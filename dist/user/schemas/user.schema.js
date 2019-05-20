"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    firstname: String,
    lastname: String,
    phone: String,
    email: { type: String, index: true, unique: true, required: true },
    password: String,
    tipo: String,
    age: Number,
});
//# sourceMappingURL=user.schema.js.map