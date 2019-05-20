import { Schema } from 'mongoose';


export const UserSchema = new Schema({

    firstname: String,
    lastname: String,
    phone: String,
    email: { type: String, index: true, unique: true, required: true },
    password: String,
    tipo: String,
    age: Number,

});