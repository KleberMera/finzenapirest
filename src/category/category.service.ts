import { Injectable, NotFoundException } from '@nestjs/common';
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
}
