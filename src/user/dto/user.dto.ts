// Validate attributes

export class CreateUserDTO {
    
    readonly firstname : string;
    readonly lastname : string;
    readonly phone : string;
    readonly email : string;
    readonly password : string;
    readonly age : number;

}

export class UserLoginDTO {
    readonly email : string;
    readonly password : string;
}