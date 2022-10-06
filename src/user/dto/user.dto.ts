import {IsNotEmpty,IsString,IsOptional,IsNumber,IsEmail} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

 export class UserDetailsDTO {

    @ApiProperty({

    description:"This is the name of the user",
    example:"Etubaba"

    })
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
      @ApiProperty({

    description:"email address",
    example:"lolo@gmail.com"

    })
    email: string;
    @IsString()
    @ApiProperty({
    description:"password",
    example:"****"

    })
    password: string;


}




export class updateUserDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
}