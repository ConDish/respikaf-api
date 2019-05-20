import { Injectable } from '@nestjs/common';
import { Model  } from "mongoose";
import {  InjectModel } from "@nestjs/mongoose";

import { User } from "./interfaces/user.interface";
import { CreateUserDTO, UserLoginDTO } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]>{
        const users = await this.userModel.find()
        return users;
    }

    async getUser(userLoginDTO : UserLoginDTO): Promise<User>{

        const user = await this.userModel.findOne(userLoginDTO);
        
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        
        const user = new this.userModel(createUserDTO);

        return await user.save();
    }

    async updateUser(userID : string, createUserDTO: CreateUserDTO) : Promise<User>{
        // This {new : true} function for update the new object because mongo return the object old
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, createUserDTO, { new : true});

        return updatedUser;
    }

    async deleteUser(userID: string): Promise<User>{

        const deletedUser = await this.userModel.findByIdAndDelete(userID);

        return deletedUser;

    }

}
