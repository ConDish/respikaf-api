import { Model } from "mongoose";
import { User } from "./interfaces/user.interface";
import { CreateUserDTO, UserLoginDTO } from './dto/user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
    getUser(userLoginDTO: UserLoginDTO): Promise<User>;
    createUser(createUserDTO: CreateUserDTO): Promise<User>;
    updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User>;
    deleteUser(userID: string): Promise<User>;
}
