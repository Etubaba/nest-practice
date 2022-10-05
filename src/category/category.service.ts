import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import CategoryNotFound from './exception/category.exception';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) { }

  async create(cat: CreateCategoryDto) {

    //const { name}=cat
    const newCategory = await this.prismaService.category.create({
      data: { catName: cat.name }
    })
    return { status: true, data: newCategory }
  }

  async findAll() {
    const category = await this.prismaService.category.findMany();
    return { status: true, data: category }
  }

  async findOne(id: number) {
    const category = await this.prismaService.category.findUnique({ where: { id: id } });
    if (!category) throw new CategoryNotFound(id)

    return { status: true, data: category }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.prismaService.category.update({ where: { id: id }, data: updateCategoryDto })
    if (!updatedCategory) throw new CategoryNotFound(id)
    return { status: true, msg: "Category updated successfully.", data: updatedCategory };
  }

  async remove(id: number) {
    const deletedCategory = await this.prismaService.category.delete({ where: { id: id } })
    if(!deletedCategory)throw new CategoryNotFound(id)

    return { status: true, msg: "Category deleted successfully" }
  }
}
