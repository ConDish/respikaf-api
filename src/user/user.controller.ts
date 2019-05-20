
import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';

import { CreateUserDTO, UserLoginDTO } from "./dto/user.dto";
import { UserService } from './user.service';

import { encode, decode } from "jwt-simple";
import { sha256 } from 'js-sha256';

@Controller('api/user')
export class UserController {

    constructor(private userService: UserService) { }

    // Routes of server
    // DTO Data transfer object 
    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {

        createUserDTO.password = sha256(createUserDTO.password)

        // console.log(createUserDTO);
        await this.userService.createUser(createUserDTO)
            .then(() => {
                res.status(HttpStatus.OK).json({
                    message: 'User Succesfully Created',
                })
            })
            .catch((e) => {
                res.status(HttpStatus.OK).json({
                    error: 'Error already email exists',
                })
            });

    }

    @Post('/login')
    async getUser(@Res() res, @Body() userLoginDTO: UserLoginDTO) {

        userLoginDTO.password = sha256(userLoginDTO.password)

        const users = await this.userService.getUser(userLoginDTO);

        if (users) {

            let userID = users._id
            let secret = "xxx"

            var token = encode(userID, secret)

            res.status(HttpStatus.OK).json({
                message: "OK",
                token
            })
        } else {
            res.status(HttpStatus.OK).json({
                message: "El usuario no existe",
            })
        }

    }

    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            users
        })
    }


}
