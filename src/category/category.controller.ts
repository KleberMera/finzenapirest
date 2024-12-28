import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from 'src/models/category.interface';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return await this.categoryService.getCategoryById(Number(id));
  }

  @Get('category')
  async getCategory() {
    return await this.categoryService.getCategory();
  }

  @Post()
  async createCategory(@Body() category: CategoryDTO) {
    return await this.categoryService.createCategory(category);
  }

  @Get('user/:userId')
  async getCategoriesByUserId(@Param('userId') userId: string) {
    return await this.categoryService.getCategoriesByUserId(Number(userId));
  }

  //Eliminar una categoria
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(Number(id));
  }
}
