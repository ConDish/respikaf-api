import { CreateUserDTO, UserLoginDTO } from "./dto/user.dto";
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(res: any, createUserDTO: CreateUserDTO): Promise<void>;
    getUser(res: any, userLoginDTO: UserLoginDTO): Promise<void>;
    getUsers(res: any): Promise<any>;
}
