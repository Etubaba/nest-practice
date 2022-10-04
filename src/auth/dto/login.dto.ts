import {IsNotEmpty,IsString,IsOptional,IsNumber,IsEmail} from 'class-validator'
import {Transform} from 'class-transformer'

 export class AuthDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Transform(({value})=>String(value))
    password: string;
}