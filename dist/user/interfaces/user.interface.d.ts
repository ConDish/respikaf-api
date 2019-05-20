import { Document } from "mongoose";
export interface User extends Document {
    readonly firstname: string;
    readonly lastname: string;
    readonly phone: string;
    readonly email: string;
    password: string;
    readonly tipo: string;
    readonly age: number;
}
