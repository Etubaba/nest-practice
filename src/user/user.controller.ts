import {Patch, Controller,Get,Post,Body,Put,Delete,Param,ParseIntPipe} from '@nestjs/common';

import { updateUserDTO, UserDetailsDTO } from './dto/user.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
  async  getAllUsers(){
        return await this.userService.getAllUsers();
    }
    @Get('/:id')
  async  getUser(@Param('id',ParseIntPipe) id:number){
        return await this.userService.getUser(id);
    }


    @Post()
    async createUser(@Body() user:UserDetailsDTO){
        return await this.userService.createUser(user);
    }
    @Put(':id')
    async updateUser( @Param('id',ParseIntPipe) id:number,@Body() user:updateUserDTO){
        return await this.userService.updateUsers(id,user);
    }
    @Delete(':id')
    async deleteUser( @Param('id',ParseIntPipe) id:number){
        return await this.userService.deleteUser(id);
    }








}
