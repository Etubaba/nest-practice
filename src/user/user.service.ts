import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateUserDTO, UserDetailsDTO } from './dto/user.dto';
import UserNotFoundException from './exceptions/not-found.exception';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService){
         
    } 
   async  getAllUsers(){
        return await this.prismaService.user.findMany()
       }
   async  getUser(id:number){

        const user= await this.prismaService.user.findUnique({where: {id}}) 

        if(!user){
            throw new UserNotFoundException(id)
        }

        return user;

       }
   async createUser(user: UserDetailsDTO){
        return await this.prismaService.user.create({
            data: user
        }) 
       }
   async updateUsers(id:number,user:updateUserDTO){
    

        const updatedUser= await this.prismaService.user.update({
            where: {id},
            data: user
        })

        if(!updatedUser) throw new UserNotFoundException(id)

        return updatedUser
        // return await  this.prismaService.user.update({
        //     where: {id},
        //     data:{ ...updatedUser}
        // })
       }
   async  deleteUser(id:number){
        const deletedUser= await this.prismaService.user.delete({where: {id}})
        return {msg:'User deleted successfully',user:deletedUser}
       }


}
