import { Schema } from 'mongoose';


export const UserSchema = new Schema({

    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    password: String,
    age: Number

});