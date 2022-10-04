import {IsNotEmpty,IsString,IsOptional,IsNumber} from 'class-validator'

 export class UserDTO {
    @IsString()
    @IsNotEmpty()
    email: string;
    password: string;
}