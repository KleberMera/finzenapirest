import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtDTO, UpdateDebtAmortizationsDto, UpdateStatusDto } from 'src/models/deb.interface';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DebtService {
  constructor(private prismaService: PrismaService) {}

  async getDebtByUserId(userId: number) {
    const debts = await this.prismaService.debt.findMany({
      where: {
        user_id: userId,
      },
      include: {
        amortizations: true,
      },
    });

    // Borrar createdAt y updatedAt de la respuesta y de las amortizaciones
    debts.forEach((debt) => {
      delete debt.createdAt;
      delete debt.updatedAt;
      debt.amortizations.forEach((amortization) => {
        delete amortization.createdAt;
        delete amortization.updatedAt;
      });
    });

    return {
      message: 'Deudas cargadas con éxito',
      data: debts,
    };
  }

  async createDebt(debt: DebtDTO) {
    try {
      const newDebt = await this.prismaService.debt.create({
        data: {
          ...debt,
          amortizations: {
            createMany: {
              data: debt.amortizations,
            },
          },
        },
      });
      return {
        message: 'Deuda registrada con éxito',
        data: newDebt,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al registrar la deuda: ${error.message}`);
    }
  }

  async updateStatus(debtId: number, updateDto: UpdateStatusDto) {
    // Verificar si la deuda existe
    const debt = await this.prismaService.debt.findUnique({
      where: { id: debtId },
      include: {
        amortizations: true
      }
    });

    if (!debt) {
      throw new NotFoundException(`Deuda con ID ${debtId} no encontrada`);
    }

    // Verificar que los IDs pertenezcan a la deuda
    const validAmortizations = debt.amortizations.filter(a => 
      updateDto.ids.includes(a.id)
    );

    if (validAmortizations.length !== updateDto.ids.length) {
      throw new NotFoundException('Algunos IDs de amortización no corresponden a esta deuda');
    }

    // Actualizar las amortizaciones
    await this.prismaService.amortization.updateMany({
      where: {
        AND: [
          { debt_id: debtId },
          { id: { in: updateDto.ids } }
        ]
      },
      data: {
        status: updateDto.status,
        updatedAt: new Date()
      }
    });

    // Verificar si todas las amortizaciones están pagadas
    const allAmortizations = await this.prismaService.amortization.findMany({
      where: { debt_id: debtId }
    });

    const allPaid = allAmortizations.every(am => am.status === 'Pagado');

    if (allPaid) {
      await this.prismaService.debt.update({
        where: { id: debtId },
        data: {
          status: 'Pagado',
          updatedAt: new Date()
        }
      });
    }

    // Obtener la deuda actualizada
    const updatedDebt = await this.prismaService.debt.findUnique({
      where: { id: debtId },
      include: {
        amortizations: {
          orderBy: {
            date: 'asc'
          }
        }
      }
    });

    return {
      message: `Se actualizaron ${updateDto.ids.length} amortizaciones con éxito`,
      data: updatedDebt
    };
  }






  async updateDebtAmortizations(updateDto: UpdateDebtAmortizationsDto) {
    const { debtId, untilDate, status } = updateDto;

    // Verificar si la deuda existe
    const debt = await this.prismaService.debt.findUnique({
      where: { id: debtId },
      include: {
        amortizations: {
          orderBy: {
            date: 'asc'
          }
        }
      }
    });

    if (!debt) {
      throw new NotFoundException(`Deuda con ID ${debtId} no encontrada`);
    }

    // Filtrar las amortizaciones hasta la fecha especificada
    const amortizationsToUpdate = debt.amortizations.filter(
      amort => new Date(amort.date) <= new Date(untilDate)
    );

    if (amortizationsToUpdate.length === 0) {
      throw new NotFoundException('No se encontraron amortizaciones para actualizar en el rango de fechas especificado');
    }

    // Actualizar las amortizaciones filtradas
    await this.prismaService.amortization.updateMany({
      where: {
        AND: [
          { debt_id: debtId },
          {
            date: {
              lte: untilDate
            }
          }
        ]
      },
      data: {
        status,
        updatedAt: new Date()
      }
    });

    // Verificar si todas las amortizaciones de la deuda están pagadas
    const allAmortizations = await this.prismaService.amortization.findMany({
      where: {
        debt_id: debtId
      }
    });

    const allPaid = allAmortizations.every(am => am.status === 'Pagado');

    // Actualizar el estado de la deuda si es necesario
    if (allPaid) {
      await this.prismaService.debt.update({
        where: {
          id: debtId
        },
        data: {
          status: 'Pagado',
          updatedAt: new Date()
        }
      });
    }

    // Obtener la deuda actualizada con sus amortizaciones
    const updatedDebt = await this.prismaService.debt.findUnique({
      where: { id: debtId },
      include: {
        amortizations: {
          orderBy: {
            date: 'asc'
          }
        }
      }
    });

    return {
      message: `Se actualizaron ${amortizationsToUpdate.length} amortizaciones con éxito`,
      data: updatedDebt
    };
  }
}
