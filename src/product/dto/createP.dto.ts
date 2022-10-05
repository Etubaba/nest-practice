import { IsNumber, IsString } from "class-validator"
import { Transform } from "class-transformer"

export class CreateProductDto{
@IsString()
productName:string
@Transform(({value})=>Number(value))
userId:number
@Transform(({value})=>Number(value))
categoryId:number

}