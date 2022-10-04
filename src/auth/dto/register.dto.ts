import {IsNotEmpty,IsString,IsOptional,IsNumber} from 'class-validator'

 export class User {
    @IsString()
    @IsNotEmpty()
    name: string;
    email: string;
    password: string;


}