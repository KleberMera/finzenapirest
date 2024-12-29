import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryDTO } from 'src/models/category.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async getCategoryById(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Categoria con ID ${id} no encontrado`);
    }
    return {
      message: 'Categorias cargadas con éxito',
      data: category,
    };
  }

  async getCategory() {
    const categories = await this.prismaService.category.findMany();
    return {
      message: 'Categorias cargadas con éxito',
      data: categories,
    };
  }

  async createCategory(category: CategoryDTO) {
    try {
      const existingCategory = await this.prismaService.category.findFirst({
        where: {
          AND: [{ name: category.name }, { user_id: category.user_id }],
        },
      });

      if (existingCategory)
        throw new BadRequestException('Ya tienes una categoría con este nombre');

      const newCategory = await this.prismaService.category.create({
        data: {
          ...category,
        },
      });

      return {
        message: 'Categoría creada con éxito',
        data: newCategory,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al crear la categoría: ${error.message}`);
    }
  }

  async getCategoriesByUserId(userId: number) {
    try {
      const categories = await this.prismaService.category.findMany({
        where: {
          user_id: userId,
        },
      });

      return {
        message: 'Categorías cargadas con éxito',
        data: categories,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al cargar las categorías: ${error.message}`);
    }
  }

  async deleteCategory(id: number) {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id },
      });
      if (!category) {
        throw new NotFoundException(`Categoria con ID ${id} no encontrado`);
      }
      await this.prismaService.category.delete({
        where: { id },
      });
      return {
        message: 'Categoría eliminada con éxito',
        //data: category,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error(`Error al eliminar la categoría: ${error.message}`);
    }
  }
}
