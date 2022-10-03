import {IsNotEmpty,IsString,IsOptional,IsNumber} from 'class-validator'

 export class UserDetailsDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    email: string;
    password: string;


}

export class updateUserDTO{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;




    @IsNotEmpty()
    @IsOptional()
    @IsNumber()
    id: number;
}