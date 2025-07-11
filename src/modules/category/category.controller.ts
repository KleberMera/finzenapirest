import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from 'src/models/category.interface';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return await this.categoryService.getCategoryById(Number(id));
  }

  @Get('user/name/:userId')
  async getCategoriesByUserIdName(@Param('userId') userId: string) {
    return await this.categoryService.getCategoriesByUserIdName(Number(userId));
  }

  @Get()
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

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(Number(id));
  }


  @Get('user/type/:userId/:type')
  async getCategoriesByType(@Param('userId') userId: string, @Param('type') type: string) {
    return await this.categoryService.getCategoriesByUserIde(Number(userId), type);
  }


  @Put(':id')
  async updateCategory(@Param('id') id: number, @Body() category: CategoryDTO) {
    return await this.categoryService.updateCategory(Number(id), category);
  }


}
