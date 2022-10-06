import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Transform } from "class-transformer"

export class CreateProductDto{
@IsString()
productName:string
@Transform(({value})=>Number(value))
@IsNotEmpty()
userId:number
@IsNotEmpty()
@Transform(({value})=>Number(value))
categoryId:number

}