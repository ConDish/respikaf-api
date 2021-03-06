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
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const jwt_simple_1 = require("jwt-simple");
const js_sha256_1 = require("js-sha256");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(res, createUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            createUserDTO.password = js_sha256_1.sha256(createUserDTO.password);
            yield this.userService.createUser(createUserDTO)
                .then(() => {
                res.status(common_1.HttpStatus.OK).json({
                    message: 'User Succesfully Created',
                });
            })
                .catch((e) => {
                res.status(common_1.HttpStatus.OK).json({
                    error: 'Error already email exists',
                });
            });
        });
    }
    getUser(res, userLoginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            userLoginDTO.password = js_sha256_1.sha256(userLoginDTO.password);
            const users = yield this.userService.getUser(userLoginDTO);
            if (users) {
                let userID = users._id;
                let secret = "xxx";
                var token = jwt_simple_1.encode(userID, secret);
                res.status(common_1.HttpStatus.OK).json({
                    message: "OK",
                    token
                });
            }
            else {
                res.status(common_1.HttpStatus.OK).json({
                    message: "El usuario no existe",
                });
            }
        });
    }
    getUsers(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getUsers();
            return res.status(common_1.HttpStatus.OK).json({
                users
            });
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserLoginDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
UserController = __decorate([
    common_1.Controller('api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map