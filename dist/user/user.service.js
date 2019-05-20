"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userModel.find();
            return users;
        });
    }
    getUser(userLoginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findOne(userLoginDTO);
            return user;
        });
    }
    createUser(createUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new this.userModel(createUserDTO);
            return yield user.save();
        });
    }
    updateUser(userID, createUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.userModel.findByIdAndUpdate(userID, createUserDTO, { new: true });
            return updatedUser;
        });
    }
    deleteUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.userModel.findByIdAndDelete(userID);
            return deletedUser;
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map