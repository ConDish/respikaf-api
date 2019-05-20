import { Document } from "mongoose";

import { sha256 } from 'js-sha256';


// Help keymap for help programming easy
export interface User extends Document {
    readonly firstname : string;
    readonly lastname : string;
    readonly phone : string;
    readonly email : string;
    password : string;
    readonly tipo: string;
    readonly age : number;
}