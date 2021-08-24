import { Controller, Get } from '@nestjs/common';
import { ItemService } from 'src/item/item.service';

@Controller('lib')
export class LibController {

    constructor(private itemService: ItemService){}

    @Get('sync-database')
    syncDatabase(){
        this.itemService.sync();
        return true;
    }

}
