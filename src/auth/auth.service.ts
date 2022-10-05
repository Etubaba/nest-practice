import {Injectable} from "@nestjs/common"
import { userInfo } from "os";
import { PrismaService } from "src/prisma/prisma.service";
import UserNotFoundException from "src/auth/exception/Not-authorise.exception";
import { AuthDTO } from "./dto/login.dto";
import * as argon2 from "argon2"
import{ JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService{
 constructor(
  private prismaService: PrismaService,
  private jwtService: JwtService
  ){}

 async login(user:AuthDTO){
  try{
    const theUser= await this.prismaService.user.findUnique({where: {email:user.email}})
    if(!theUser) throw new UserNotFoundException(user.email)
    const match =await argon2.verify(theUser.password ,user.password)
   // const match = theUser.password===user.password
    if(match){
      return {status:true,data:theUser}
    }else{
      return {status:false,msg:'Invalid user credentials'}
    }

  }catch(err:any){

    console.log(err.message)
  }
 }


async authJwt(user:any){
  
  const payload = { email: user.email, sub: user.id }

  return {
     access_token:this.jwtService.sign(payload)
  }
   

}








}