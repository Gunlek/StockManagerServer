import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Item, RESTItem, StoredItem } from 'src/types/itemType';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private item: ItemService){}

    @Get('all')
    async getAll(): Promise<StoredItem[]> {
        return await this.item.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('add')
    add(@Body() item: Item){
        this.item.add(item);
    }

    @Get('get/:id')
    async get(@Param('id') id: number){
        return await this.item.get(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put("/update/:id")
    async update(@Param('id') id: number, @Body() item: RESTItem){
        this.item.update(id, {
            type: item.type,
            name: item.name,
            provider: item.provider,
            quantity: parseInt(item.quantity.toString()),
            unitPrice: parseFloat(item.unitPrice.toString()),
            location: item.location.toString()
        });
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete/:id')
    delete(@Param('id') id: number){
        this.item.delete(id);
    }

}
