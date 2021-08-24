import { Module } from '@nestjs/common';
import { ItemModule } from 'src/item/item.module';
import { UserModule } from 'src/user/user.module';
import { LibController } from './lib.controller';

@Module({
  controllers: [LibController],
  imports: [ItemModule, UserModule]
})
export class LibModule {}
