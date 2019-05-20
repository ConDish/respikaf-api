export declare class CreateUserDTO {
    readonly firstname: string;
    readonly lastname: string;
    readonly phone: string;
    readonly email: string;
    password: string;
    readonly tipo: string;
    readonly age: number;
}
export declare class UserLoginDTO {
    readonly email: string;
    password: string;
}
