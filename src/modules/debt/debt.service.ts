import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtDTO, UpdateAllStatusDto, UpdateDebtAmortizationsDto, UpdateStatusDto } from 'src/models/deb.interface';

import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class DebtService {
  constructor(private prismaService: PrismaService) {}

  // Obtener todas las deudas de un usuario
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

  // Obtener todas las deudas de un usuario
  async getDebtByUserIdDebt(userId: number) {
    const debts = await this.prismaService.debt.findMany({
      where: {
        user_id: userId,
      },
     
    });

    // Borrar createdAt y updatedAt de la respuesta y de las amortizaciones
    debts.forEach((debt) => {
      delete debt.createdAt;
      delete debt.updatedAt;
      
    });

    return {
      message: 'Deudas cargadas con éxito',
      data: debts,
    };
  }

  //Obtener por id de deuda las amortizaciones
  async getAmortizationsByDebtId(debtId: number) {
    const amortizations = await this.prismaService.amortization.findMany({
      where: {
        debt_id: debtId,
      },
    });
    return {
      message: 'Amortizaciones cargadas con éxito',
      data: amortizations,
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

  async updateAllStatus(debtId: number, updateDto: UpdateAllStatusDto) {
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
        payment_date: updateDto.payment_date,
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


  //Actualizar solo un status de una amortizacion
  async updateStatus(debtId: number, updateStatusDto: UpdateStatusDto) {
    const debt = await this.prismaService.debt.findUnique({
      where: { id: debtId },
      include: {
        amortizations: true
      }
    });

    if (!debt) {
      throw new NotFoundException(`Deuda con ID ${debtId} no encontrada`);
    }

    const updatedDebt = await this.prismaService.amortization.updateMany({
      where: {  AND: [
        { debt_id: debtId },
        { id: updateStatusDto.id }
      ] },
      data: {
        status: updateStatusDto.status,
        payment_date: updateStatusDto.payment_date,
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

    return {
      message: 'Pago actualizado con éxito',
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


  ///Listar solo el nombre de la deuda con su id, por el id de usuario
  async getDebtByUserIdName(userId: number) {
    try {
      const debts = await this.prismaService.debt.findMany({
        where: {
          user_id: userId,
        },
        select: {
          id: true,
          name: true,
        },
      });

      return {
        message: 'Deudas cargadas con éxito',
        data: debts,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al cargar las deudas: ${error.message}`);
    }
  }


  //Listar por id de deuda sus deuda con su amortizaciones
  async getDebtById(id: number) {
    try {
      const debt = await this.prismaService.debt.findUnique({
        where: {
          id: id,
        },
        include: {
          amortizations: true,
        },
      });

      if (!debt) {
        throw new NotFoundException(`Seleccione una deuda`);
      }

      // Remove timestamps
      delete debt.createdAt;
      delete debt.updatedAt;
      debt.amortizations.forEach((amortization) => {
        delete amortization.createdAt;
        delete amortization.updatedAt;
      });

      return {
        message: 'Deuda cargada con éxito',
        data: [debt],
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al cargar la deuda: ${error.message}`);
    }
  }

  //Borrar deuda y amortizaciones por id  
   async deleteDebt(id: number) {
    try {
      const debt = await this.prismaService.debt.findUnique({
        where: {
          id: id,
        },
        include: {
          amortizations: true,
        },
      });

      if (!debt) {
        throw new NotFoundException(`Seleccione una deuda`);
      }

      // Borrar amortizaciones
      await this.prismaService.amortization.deleteMany({
        where: {
          debt_id: id,
        },
      });

      // Borrar deuda
      await this.prismaService.debt.delete({
        where: {
          id: id,
        },
      });

      return {
        message: 'Deuda borrada con éxito',
        data: debt,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al borrar la deuda: ${error.message}`);
    }
  }


  //Listar deuda por usuario y por varios ids de deuda

  async findDebtsByUserWithAmortizations(
    userId: number,
    debtIds?: number[]
  ) {
    // Base query with user filter
    const whereClause: any = {
      user_id: userId,
    };

    // Add debt IDs filter if provided
    if (debtIds && debtIds.length > 0) {
      whereClause.id = {
        in: debtIds,
      };
    }

    // Get debts with their amortizations
    const debts = await this.prismaService.debt.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        description: true,
        amount: true,
        interest_rate: true,
        duration_months: true,
        method: true,
        start_date: true,
        end_date: true,
        status: true,
        // Exclude createdAt and updatedAt
        amortizations: {
          select: {
            id: true,
            number_months: true,
            date: true,
            quota: true,
            interest: true,
            amortized: true,
            outstanding: true,
            status: true,
            // Exclude createdAt and updatedAt
          },
        },
      },
    });

    return debts;
  }

}
