import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('category/:id')
  async getCategoryById(@Param('id') id: string) {
    return await this.categoryService.getCategoryById(Number(id));
  }
}
