import { Injectable } from '@nestjs/common';
import { DataTypes, Sequelize } from 'sequelize';
import { Item } from 'src/types/itemType';

@Injectable()
export class ItemService {

    private sequelize: Sequelize;
    private itemModel;

    constructor(){
        this.sequelize = new Sequelize({
            dialect: "mariadb",
            /* host: process.env.MYSQL_HOST,
            database: process.env.MYSQL_DATABASE,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD */
            host: "localhost",
            database: "stockManager",
            username: "stockManager",
            password: "stockManagerPassword"
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
                type: DataTypes.INTEGER,
            },
            unitPrice: {
                type: DataTypes.DOUBLE,
            },
            location: {
                type: DataTypes.STRING,
            }
        });
    }

    sync(): void{
        this.itemModel.sync({alter: true});
    }

    async findAll(): Promise<[]>{
        return this.itemModel.findAll();
    }

    add(item: Item): boolean{
        this.itemModel.create(item);
        return true;
    }

}
