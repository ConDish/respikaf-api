import { Document } from "mongoose";

// Help keymap for help programming easy
export interface User extends Document {
    readonly firstname : string;
    readonly lastname : string;
    readonly phone : string;
    readonly email : string;
    readonly password : string;
    readonly age : number;
}