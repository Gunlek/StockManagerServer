import { Injectable } from '@nestjs/common';
import { DataTypes, Sequelize } from 'sequelize';
import { localSequelize } from 'src/main';
import { LoginUser } from './user.controller';

const bcrypt = require('bcrypt');

export type User = {
    username: string;
    loggedAt: number;
}

export type StoredUser = {
    id: number;
    username: string;
    password: string;
    createdAd: string;
    updatedAt: string;
}

@Injectable()
export class UserService {

    private sequelize: Sequelize;
    private userModel;

    constructor(){
        this.sequelize = localSequelize;
        this.userModel = this.sequelize.define("User", {
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        })
    }

    sync(): void{
        this.userModel.sync({alter: true});
    }

    async findOne(username: string): Promise<StoredUser> {
        return this.userModel.findOne({
            where: {
                username: username
            }
        });
    }

    create(user: LoginUser): void {
        bcrypt.hash(user.password, 10, (err, hash) => {
            if(err)
                console.error(err);
            else
                this.userModel.create({
                    username: user.username,
                    password: hash
                });
        })
    }

}
