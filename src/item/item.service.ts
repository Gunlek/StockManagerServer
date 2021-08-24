import { Injectable } from '@nestjs/common';
import { DataTypes, Model, Sequelize } from 'sequelize';

@Injectable()
export class ItemService {

    private sequelize: Sequelize;
    private itemModel;

    constructor(){
        this.sequelize = new Sequelize({
            dialect: "mysql",
            host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DATABASE,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        });

        this.itemModel = this.sequelize.define('Item', {
            type: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            provider: {
                type: DataTypes.STRING,
            },
            quantity: {
                type: DataTypes.NUMBER,
            },
            unitPrice: {
                type: DataTypes.DOUBLE,
            },
            location: {
                type: DataTypes.STRING,
            }
        })
    }

}
