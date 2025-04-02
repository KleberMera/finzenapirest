import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { Salary } from 'src/models/salary';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalaryService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Listar salarios por ID de usuario
   * Devuelve todos los registros de salario asociados a un usuario específico.
   */
  async getSalariesByUserId(userId: number) {
    const salaries = await this.prisma.salaryHistory.findMany({
      where: { user_id: userId },
    });
    return {
      message: 'Salaries retrieved successfully',
      data: salaries,
      status: 200,
    };
  }

  /**
   * Crear un nuevo registro de salario
   * Crea un nuevo registro en la tabla SueldoHistorial con los datos proporcionados.
   */
  async createSalary(data: Salary) {
    log(data);
    const salary = await this.prisma.salaryHistory.create({
      data,
    });
    return {
      message: 'Salary created successfully',
      data: salary,
      status: 201,
    };
  }

  /**
   * Actualizar un registro de salario
   * Actualiza un registro existente basado en su ID con los datos proporcionados.
   */
  async updateSalary(id: number, data: Salary) {
    const salary = await this.prisma.salaryHistory.update({
      where: { id },
      data,
    });
    return {
      message: 'Salary updated successfully',
      data: salary,
      status: 200,
    };
  }

  /**
   * Eliminar un registro de salario
   * Elimina un registro de salario basado en su ID.
   */
  async deleteSalary(id: number) {
    await this.prisma.salaryHistory.delete({
      where: { id },
    });
    return {
      message: 'Salary deleted successfully',
      data: null,
      status: 200,
    };
  }

  /**
   * Listar salario por mes actual o mes específico
   * Devuelve el salario de un usuario para un mes dado o el mes actual si no se especifica.
   */
  async getSalaryByMonth(userId: number, month?: string) {
    const currentMonth =
      month || new Date().toLocaleString('default', { month: 'long' });
  
    const salary = await this.prisma.salaryHistory.findFirst({
      where: {
        user_id: userId,
        month_name: currentMonth,
      },
      orderBy: {
        createdAt: 'desc', // Ordenar por effective_date descendente
      },
    });
  
    return {
      message: 'Salary retrieved successfully',
      data: salary,
      status: 200,
    };
  }
}
