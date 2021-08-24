import { Module } from '@nestjs/common';
import { ItemService } from 'src/item/item.service';
import { LibController } from './lib.controller';

@Module({
  controllers: [LibController],
  providers: [ItemService]
})
export class LibModule {}
