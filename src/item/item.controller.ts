import { Controller, Get } from '@nestjs/common';

@Controller('item')
export class ItemController {


    @Get()
    getAll(): string {
        return "Hello world !";
    }

}
