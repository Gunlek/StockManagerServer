import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Item, StoredItem } from 'src/types/itemType';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private item: ItemService){}

    @Get('all')
    async getAll(): Promise<StoredItem[]> {
        return await this.item.findAll();
    }

    @Post('add')
    add(@Body() item: Item){
        this.item.add(item);
    }

    @Get('get/:id')
    async get(@Param('id') id: number){
        return await this.item.get(id);
    }

    @Put("/update/:id")
    async update(@Param('id') id: number, @Body() item: Item){
        this.item.update(id, item);
    }

    @Delete('/delete/:id')
    delete(@Param('id') id: number){
        this.item.delete(id);
    }

}
