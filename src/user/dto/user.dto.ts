import {IsNotEmpty,IsString,IsOptional,IsNumber,IsEmail} from 'class-validator'

 export class UserDetailsDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;


}

// export class updateUserDTO{
//     @IsString()
//     @IsNotEmpty()
//     @IsOptional()
//     name: string;

   
// }

export class updateUserDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
}