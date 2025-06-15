/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { Injectable, NotFoundException } from '@nestjs/common';
import { DebtDTO, UpdateAllStatusDto, UpdateDebtAmortizationsDto, UpdateStatusDto } from 'src/models/deb.interface';

import { PrismaService } from 'src/config/prisma/prisma.service';
import { differenceInDays, format, isAfter, parseISO } from 'date-fns';

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
  // async getDebtById(id: number) {
  //   try {
  //     const debt = await this.prismaService.debt.findUnique({
  //       where: {
  //         id: id,
  //       },
  //       include: {
  //         amortizations: {
  //           orderBy: {
  //             number_months: 'asc',
  //           },
  //         },
  //       },
  //     });
  
  //     if (!debt) {
  //       throw new NotFoundException(`Seleccione una deuda`);
  //     }
  
  //     // Cálculos generales de la deuda
  //     const allAmortizations = debt.amortizations;
  //     const paidAmortizations = allAmortizations.filter(a => a.status === 'Pagado');
  //     const pendingAmortizations = allAmortizations.filter(a => a.status === 'Pendiente');
  
  //     // Cálculos de montos
  //     const totalAmountToPay = allAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  //     const totalPaidAmount = paidAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  //     const remainingAmount = totalAmountToPay - totalPaidAmount;
  
  //     // Cálculos de intereses
  //     const totalInterest = allAmortizations.reduce((sum, a) => sum + Number(a.interest || 0), 0);
  //     const paidInterest = paidAmortizations.reduce((sum, a) => sum + Number(a.interest || 0), 0);
  //     const remainingInterest = totalInterest - paidInterest;
  
  //     // Cálculos de capital amortizado
  //     const totalAmortized = allAmortizations.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
  //     const paidAmortized = paidAmortizations.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
  //     const remainingAmortized = totalAmortized - paidAmortized;
  
  //     // Obtener fecha actual
  //    // const today = format(new Date(), 'YYYY-MM-DD');
  
  //     // Procesar cada amortización con cálculos detallados
  //     const processedAmortizations = allAmortizations.map((amortization, index) => {
  //       // Calcular progreso acumulado hasta esta cuota
  //       const amortizationsUpToThis = allAmortizations.slice(0, index + 1);
  //       const paidAmortizationsUpToThis = amortizationsUpToThis.filter(a => a.status === 'Pagado');
        
  //       const accumulatedQuota = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  //       const accumulatedPaid = paidAmortizationsUpToThis.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  //       const accumulatedInterest = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.interest || 0), 0);
  //       const accumulatedAmortized = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
  
  //       // Cálculos de fechas y retrasos usando @formkit/tempo
  //       let daysOverdue = 0;
  //       let isOverdue = false;
  //       let formattedDueDate = null;
  //       let formattedPaymentDate = null;
  //       let daysUntilDue = 0;
  
  //       if (amortization.date) {
  //         try {
  //           const dueDate = parse(amortization.date, 'YYYY-MM-DD');
  //           formattedDueDate = format(dueDate, 'DD/MM/YYYY');
            
  //           if (amortization.status === 'Pendiente') {
  //             const todayDate = new Date();
  //             if (isAfter(todayDate, dueDate)) {
  //               isOverdue = true;
  //               daysOverdue = differenceInDays(todayDate, dueDate);
  //             } else {
  //               daysUntilDue = differenceInDays(dueDate, todayDate);
  //             }
  //           }
  //         } catch (error) {
  //           console.warn(`Error parsing due date for amortization ${amortization.id}:`, error);
  //         }
  //       }
  
  //       if (amortization.payment_date) {
  //         try {
  //           const paymentDate = parse(amortization.payment_date, 'YYYY-MM-DD');
  //           formattedPaymentDate = format(paymentDate, 'DD/MM/YYYY');
  //         } catch (error) {
  //           console.warn(`Error parsing payment date for amortization ${amortization.id}:`, error);
  //         }
  //       }
  
  //       // Remove timestamps
  //       const cleanAmortization = { ...amortization };
  //       delete cleanAmortization.createdAt;
  //       delete cleanAmortization.updatedAt;
  
  //       return {
  //         ...cleanAmortization,
  //         // Información de estado
  //         isOverdue,
  //         daysOverdue,
  //         daysUntilDue,
  //         isPaid: amortization.status === 'Pagado',
          
  //         // Fechas formateadas
  //         formattedDueDate,
  //         formattedPaymentDate,
          
  //         // Progreso acumulado
  //         accumulatedQuota,
  //         accumulatedPaid,
  //         accumulatedInterest,
  //         accumulatedAmortized,
          
  //         // Porcentajes de progreso
  //         progressPercentage: totalAmountToPay > 0 ? (accumulatedPaid / totalAmountToPay) * 100 : 0,
  //         installmentProgressPercentage: allAmortizations.length > 0 ? ((index + 1) / allAmortizations.length) * 100 : 0,
          
  //         // Información adicional
  //         remainingAfterThis: totalAmountToPay - accumulatedQuota,
  //         isLastInstallment: index === allAmortizations.length - 1,
  //         installmentNumber: index + 1,
          
  //         // Porcentaje individual de la cuota respecto al total
  //         quotaPercentage: totalAmountToPay > 0 ? (Number(amortization.quota || 0) / totalAmountToPay) * 100 : 0,
  //       };
  //     });
  
  //     // Buscar próximo pago y último pago con manejo de fechas
  //     const nextPaymentDue = pendingAmortizations
  //       .filter(a => a.date)
  //       .sort((a, b) => {
  //         try {
  //           // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  //           const dateA = parse(a.date!, 'YYYY-MM-DD');
  //           // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  //           const dateB = parse(b.date!, 'YYYY-MM-DD');
  //           return dateA.getTime() - dateB.getTime();
  //         } catch {
  //           return 0;
  //         }
  //       })[0];
  
  //     const lastPaymentMade = paidAmortizations
  //       .filter(a => a.payment_date)
  //       .sort((a, b) => {
  //         try {
  //           const dateA = parse(a.payment_date!, 'YYYY-MM-DD');
  //           const dateB = parse(b.payment_date!, 'YYYY-MM-DD');
  //           return dateB.getTime() - dateA.getTime();
  //         } catch {
  //           return 0;
  //         }
  //       })[0];
  
  //     // Estadísticas de retraso
  //     const overdueAmortizations = processedAmortizations.filter(a => a.isOverdue);
  //     const totalOverdueAmount = overdueAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  
  //     // Fechas formateadas para el resumen
  //     let nextPaymentFormatted = null;
  //     let lastPaymentFormatted = null;
  
  //     if (nextPaymentDue?.date) {
  //       try {
  //         const nextDate = parse(nextPaymentDue.date, 'YYYY-MM-DD');
  //         nextPaymentFormatted = format(nextDate, 'DD/MM/YYYY');
  //       } catch (error) {
  //         console.warn('Error formatting next payment date:', error);
  //       }
  //     }
  
  //     if (lastPaymentMade?.payment_date) {
  //       try {
  //         const lastDate = parse(lastPaymentMade.payment_date, 'YYYY-MM-DD');
  //         lastPaymentFormatted = format(lastDate, 'DD/MM/YYYY');
  //       } catch (error) {
  //         console.warn('Error formatting last payment date:', error);
  //       }
  //     }
  
  //     // Formatear fechas de inicio y fin de la deuda
  //     let formattedStartDate = null;
  //     let formattedEndDate = null;
  
  //     if (debt.start_date) {
  //       try {
  //         const startDate = parse(debt.start_date, 'YYYY-MM-DD');
  //         formattedStartDate = format(startDate, 'DD/MM/YYYY');
  //       } catch (error) {
  //         console.warn('Error formatting start date:', error);
  //       }
  //     }
  
  //     if (debt.end_date) {
  //       try {
  //         const endDate = parse(debt.end_date, 'YYYY-MM-DD');
  //         formattedEndDate = format(endDate, 'DD/MM/YYYY');
  //       } catch (error) {
  //         console.warn('Error formatting end date:', error);
  //       }
  //     }
  
  //     // Remove timestamps from debt
  //     const cleanDebt = { ...debt };
  //     delete cleanDebt.createdAt;
  //     delete cleanDebt.updatedAt;
  
  //     // Construir el objeto de respuesta
  //     const debtWithCalculations = {
  //       ...cleanDebt,
  //       // Fechas formateadas
  //       formattedStartDate,
  //       formattedEndDate,
        
  //       // Información básica calculada
  //       loanAmount: Number(debt.amount || 0),
  //       totalAmountToPay,
  //       totalPaidAmount,
  //       remainingAmount,
        
  //       // Información de intereses
  //       totalInterest,
  //       paidInterest,
  //       remainingInterest,
        
  //       // Información de capital
  //       totalAmortized,
  //       paidAmortized,
  //       remainingAmortized,
        
  //       // Estadísticas de cuotas
  //       totalInstallments: allAmortizations.length,
  //       paidInstallments: paidAmortizations.length,
  //       pendingInstallments: pendingAmortizations.length,
  //       overdueInstallments: overdueAmortizations.length,
        
  //       // Progreso general
  //       paymentProgress: totalAmountToPay > 0 ? (totalPaidAmount / totalAmountToPay) * 100 : 0,
  //       installmentProgress: allAmortizations.length > 0 ? (paidAmortizations.length / allAmortizations.length) * 100 : 0,
        
  //       // Información de fechas importantes
  //       nextPaymentDue: nextPaymentDue?.date || null,
  //       nextPaymentAmount: nextPaymentDue?.quota || null,
  //       nextPaymentFormatted,
  //       lastPaymentDate: lastPaymentMade?.payment_date || null,
  //       lastPaymentAmount: lastPaymentMade?.quota || null,
  //       lastPaymentFormatted,
        
  //       // Estadísticas de retraso
  //       totalOverdueAmount,
  //       hasOverduePayments: overdueAmortizations.length > 0,
        
  //       // Amortizaciones procesadas
  //       amortizations: processedAmortizations,
  //     };
  
  //     return {
  //       message: 'Deuda cargada con éxito',
  //       data: [debtWithCalculations],
  //     };
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw error;
  //     }
  //     throw new Error(`Error al cargar la deuda: ${error.message}`);
  //   }
  // }

  async getDebtById(id: number) {
    try {
      const debt = await this.prismaService.debt.findUnique({
        where: {
          id: id,
        },
        include: {
          amortizations: {
            orderBy: {
              number_months: 'asc',
            },
          },
        },
      });
  
      if (!debt) {
        throw new NotFoundException(`Seleccione una deuda`);
      }
  
      // Cálculos generales de la deuda
      const allAmortizations = debt.amortizations;
      const paidAmortizations = allAmortizations.filter(a => a.status === 'Pagado');
      const pendingAmortizations = allAmortizations.filter(a => a.status === 'Pendiente');
  
      // Cálculos de montos
      const totalAmountToPay = allAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
      const totalPaidAmount = paidAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
      const remainingAmount = totalAmountToPay - totalPaidAmount;
  
      // Cálculos de intereses
      const totalInterest = allAmortizations.reduce((sum, a) => sum + Number(a.interest || 0), 0);
      const paidInterest = paidAmortizations.reduce((sum, a) => sum + Number(a.interest || 0), 0);
      const remainingInterest = totalInterest - paidInterest;
  
      // Cálculos de capital amortizado
      const totalAmortized = allAmortizations.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
      const paidAmortized = paidAmortizations.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
      const remainingAmortized = totalAmortized - paidAmortized;
  
      // Obtener fecha actual
      const today = format(new Date(), 'yyyy-MM-dd');
  
      // Procesar cada amortización con cálculos detallados
      const processedAmortizations = allAmortizations.map((amortization, index) => {
        // Calcular progreso acumulado hasta esta cuota
        const amortizationsUpToThis = allAmortizations.slice(0, index + 1);
        const paidAmortizationsUpToThis = amortizationsUpToThis.filter(a => a.status === 'Pagado');
        
        const accumulatedQuota = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.quota || 0), 0);
        const accumulatedPaid = paidAmortizationsUpToThis.reduce((sum, a) => sum + Number(a.quota || 0), 0);
        const accumulatedInterest = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.interest || 0), 0);
        const accumulatedAmortized = amortizationsUpToThis.reduce((sum, a) => sum + Number(a.amortized || 0), 0);
  
        // Cálculos de fechas y retrasos usando @formkit/tempo
        let daysOverdue = 0;
        let isOverdue = false;
        let formattedDueDate = null;
        let formattedPaymentDate = null;
        let daysUntilDue = 0;
  
        if (amortization.date) {
          try {
            const dueDate = parseISO(amortization.date);
            formattedDueDate = format(dueDate, 'dd/MM/yyyy');
            
            if (amortization.status === 'Pendiente') {
              //const todayDate = new Date();
              if (isAfter(today, dueDate)) {
                isOverdue = true;
                daysOverdue = differenceInDays(today, dueDate);
              } else {
                daysUntilDue = differenceInDays(dueDate, today);
              }
            }
          } catch (error) {
            console.warn(`Error parsing due date for amortization ${amortization.id}:`, error);
          }
        }
  
        if (amortization.payment_date) {
          try {
            const paymentDate = parseISO(amortization.payment_date);
            formattedPaymentDate = format(paymentDate, 'dd/MM/yyyy');
          } catch (error) {
            console.warn(`Error parsing payment date for amortization ${amortization.id}:`, error);
          }
        }
  
        // Remove timestamps
        const cleanAmortization = { ...amortization };
        delete cleanAmortization.createdAt;
        delete cleanAmortization.updatedAt;
  
        return {
          ...cleanAmortization,
          // Información de estado
          isOverdue,
          daysOverdue,
          daysUntilDue,
          isPaid: amortization.status === 'Pagado',
          
          // Fechas formateadas
          formattedDueDate,
          formattedPaymentDate,
          
          // Progreso acumulado
          accumulatedQuota,
          accumulatedPaid,
          accumulatedInterest,
          accumulatedAmortized,
          
          // Porcentajes de progreso
          progressPercentage: totalAmountToPay > 0 ? (accumulatedPaid / totalAmountToPay) * 100 : 0,
          installmentProgressPercentage: allAmortizations.length > 0 ? ((index + 1) / allAmortizations.length) * 100 : 0,
          
          // Información adicional
          remainingAfterThis: totalAmountToPay - accumulatedQuota,
          isLastInstallment: index === allAmortizations.length - 1,
          installmentNumber: index + 1,
          
          // Porcentaje individual de la cuota respecto al total
          quotaPercentage: totalAmountToPay > 0 ? (Number(amortization.quota || 0) / totalAmountToPay) * 100 : 0,
        };
      });
  
      // Buscar próximo pago y último pago con manejo de fechas
      const nextPaymentDue = pendingAmortizations
        .filter(a => a.date)
        .sort((a, b) => {
          try {
            const dateA = parseISO(a.date!);
            const dateB = parseISO(b.date!);
            return dateA.getTime() - dateB.getTime();
          } catch {
            return 0;
          }
        })[0];
  
      const lastPaymentMade = paidAmortizations
        .filter(a => a.payment_date)
        .sort((a, b) => {
          try {
            const dateA = parseISO(a.payment_date!);
            const dateB = parseISO(b.payment_date!);
            return dateB.getTime() - dateA.getTime();
          } catch {
            return 0;
          }
        })[0];
  
      // Estadísticas de retraso
      const overdueAmortizations = processedAmortizations.filter(a => a.isOverdue);
      const totalOverdueAmount = overdueAmortizations.reduce((sum, a) => sum + Number(a.quota || 0), 0);
  
      // Fechas formateadas para el resumen
      let nextPaymentFormatted = null;
      let lastPaymentFormatted = null;
  
      if (nextPaymentDue?.date) {
        try {
          const nextDate = parseISO(nextPaymentDue.date);
          nextPaymentFormatted = format(nextDate, 'dd/MM/yyyy');
        } catch (error) {
          console.warn('Error formatting next payment date:', error);
        }
      }
  
      if (lastPaymentMade?.payment_date) {
        try {
          const lastDate = parseISO(lastPaymentMade.payment_date);
          lastPaymentFormatted = format(lastDate, 'dd/MM/yyyy');
        } catch (error) {
          console.warn('Error formatting last payment date:', error);
        }
      }
  
      // Formatear fechas de inicio y fin de la deuda
      let formattedStartDate = null;
      let formattedEndDate = null;
  
      if (debt.start_date) {
        try {
          const startDate = parseISO(debt.start_date);
          formattedStartDate = format(startDate, 'dd/MM/yyyy');
        } catch (error) {
          console.warn('Error formatting start date:', error);
        }
      }
  
      if (debt.end_date) {
        try {
          const endDate = parseISO(debt.end_date);
          formattedEndDate = format(endDate, 'dd/MM/yyyy');
        } catch (error) {
          console.warn('Error formatting end date:', error);
        }
      }
  
      // Remove timestamps from debt
      const cleanDebt = { ...debt };
      delete cleanDebt.createdAt;
      delete cleanDebt.updatedAt;
  
      // Construir el objeto de respuesta
      const debtWithCalculations = {
        ...cleanDebt,
        // Fechas formateadas
        formattedStartDate,
        formattedEndDate,
        
        // Información básica calculada
        loanAmount: Number(debt.amount || 0),
        totalAmountToPay,
        totalPaidAmount,
        remainingAmount,
        
        // Información de intereses
        totalInterest,
        paidInterest,
        remainingInterest,
        
        // Información de capital
        totalAmortized,
        paidAmortized,
        remainingAmortized,
        
        // Estadísticas de cuotas
        totalInstallments: allAmortizations.length,
        paidInstallments: paidAmortizations.length,
        pendingInstallments: pendingAmortizations.length,
        overdueInstallments: overdueAmortizations.length,
        
        // Progreso general
        paymentProgress: totalAmountToPay > 0 ? (totalPaidAmount / totalAmountToPay) * 100 : 0,
        installmentProgress: allAmortizations.length > 0 ? (paidAmortizations.length / allAmortizations.length) * 100 : 0,
        
        // Información de fechas importantes
        nextPaymentDue: nextPaymentDue?.date || null,
        nextPaymentAmount: nextPaymentDue?.quota || null,
        nextPaymentFormatted,
        lastPaymentDate: lastPaymentMade?.payment_date || null,
        lastPaymentAmount: lastPaymentMade?.quota || null,
        lastPaymentFormatted,
        
        // Estadísticas de retraso
        totalOverdueAmount,
        hasOverduePayments: overdueAmortizations.length > 0,
        
        // Amortizaciones procesadas
        amortizations: processedAmortizations,
      };
  
      return {
        message: 'Deuda cargada con éxito',
        data: [debtWithCalculations],
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
