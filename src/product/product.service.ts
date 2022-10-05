import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateProductDto } from './dto/createP.dto';
import { UpdateProductDto } from './dto/updateP.dto';
import ProductNotFound from './exceptions/product.exception';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService) { }

    async getAllProducts() {
        const products = await this.prismaService.products.findMany()
        return { status: true, data: products }
    }

    async getProductById(id: number) {
        const product = await this.prismaService.products.findUnique({ where: { id } })
        if (!product) throw new ProductNotFound(id)
        return { status: true, data: product }
    }

    async createProduct(product: CreateProductDto) {
        const newProduct = await this.prismaService.products.create({
            data: product
        })
        return { status: true, data: newProduct }
    }

    async deleteProduct(id:number ){
          const product = await this.prismaService.products.delete({ where: { id } })
    }

    
  async update(id: number, product: UpdateProductDto) {
    const updatedProduct = await this.prismaService.category.update({ where: { id: id }, data: product })
    if (!updatedProduct) throw new ProductNotFound(id)
    return { status: true, msg: "Category updated successfully.", data: updatedProduct };
  }


  

}