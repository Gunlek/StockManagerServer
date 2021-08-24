import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import passport from "passport";
import { AuthService } from "src/auth/auth.service";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { UserService } from "./user.service";

export type LoginUser = {
    username: string;
    password: string;
}

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post('register')
    register(@Body() user: LoginUser){
        this.userService.create(user);
    }

}