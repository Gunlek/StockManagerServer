import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { LibModule } from './lib/lib.module';

@Module({
  imports: [ItemModule, LibModule],
})
export class AppModule {}
