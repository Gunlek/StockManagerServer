import { Controller, Get } from '@nestjs/common';
import { ItemService } from 'src/item/item.service';
import { UserService } from 'src/user/user.service';

@Controller('lib')
export class LibController {

    constructor(private itemService: ItemService, private userService: UserService){}

    @Get('sync-database')
    syncDatabase(){
        this.itemService.sync();
        this.userService.sync();
        return true;
    }

}
