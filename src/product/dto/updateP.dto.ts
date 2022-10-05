import { IsNumber, IsString } from "class-validator"


export class UpdateProductDto{
@IsString()
productName:string
@IsNumber()
userId:number
@IsNumber()
categoryId:number

}