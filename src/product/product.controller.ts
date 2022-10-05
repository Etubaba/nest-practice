import {Controller,Post,Body,Get,Param,ParseIntPipe,Patch,Delete} from "@nestjs/common"
import { CreateProductDto } from "./dto/createP.dto";
import { UpdateProductDto } from "./dto/updateP.dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}
    

    
  @Post('/create')
  create(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Get()
  findAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Patch('/update/:id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateproductDto: UpdateProductDto) {
    return this.productService.update(+id, updateproductDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }

    
}
         