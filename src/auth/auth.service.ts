import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StoredUser, User, UserService } from 'src/user/user.service';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<User|undefined>{
        const user: StoredUser = await this.userService.findOne(username);
        if(user){
            return bcrypt.compare(password, user.password)
                .then((result) => {
                    if(result){
                        const { username } = user;
                        const loggedInTimestamp = Date.now();
                        return {
                            username: username,
                            loggedInAt: loggedInTimestamp
                        }
                    }
                    return null;
                });
        }
        return null;
    }

    async login(user: any){
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
