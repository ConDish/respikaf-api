import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';

import { CreateUserDTO, UserLoginDTO } from "./dto/user.dto";
import { UserService } from './user.service';

import { encode, decode } from "jwt-simple";

@Controller('user')
export class UserController {

    constructor(private userService : UserService) {}

    // Routes of server
    // DTO Data transfer object
    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO){

        const user = await this.userService.createUser(createUserDTO);

        res.status(HttpStatus.OK).json({
            message: 'User Succesfully Created',
            user
        })

    }

    @Post('/login')
    async getUser(@Res() res, @Body() userLoginDTO: UserLoginDTO){

       const users = await this.userService.getUser(userLoginDTO);

        res.status(HttpStatus.OK).json({
            message: "OK",
            users
        })
    }

    @Get('/')
    async getUsers(@Res() res){
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            users
        })
    }


}
