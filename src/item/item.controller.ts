import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Item } from 'src/types/itemType';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private item: ItemService){}

    @Get('all')
    async getAll(): Promise<[]> {
        return await this.item.findAll();
    }

    @Post('add')
    add(@Body() item: Item){
        this.item.add(item);
    }

}
