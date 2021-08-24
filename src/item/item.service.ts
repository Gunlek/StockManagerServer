import { Injectable } from '@nestjs/common';
import { DataTypes, Sequelize } from 'sequelize';
import { localSequelize } from 'src/main';
import { Item, StoredItem } from 'src/types/itemType';

@Injectable()
export class ItemService {

    private sequelize: Sequelize;
    private itemModel;

    constructor(){
        this.sequelize = localSequelize;
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

    async findAll(): Promise<StoredItem[]>{
        return this.itemModel.findAll();
    }

    add(item: Item): boolean{
        this.itemModel.create(item);
        return true;
    }

    async get(id: number): Promise<StoredItem> {
        return await this.itemModel.findOne({
            where: {
                id: id
            }
        });
    }

    update(id: number, item: Item): void {
        this.itemModel.update(item, {
            where: {
                id: id
            }
        });
    }

    delete(id: number){
        this.itemModel.destroy({
            where: {
                id: id
            }
        });
    }

}
