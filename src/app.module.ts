import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { LibModule } from './lib/lib.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ItemModule, LibModule, AuthModule, UserModule],
})
export class AppModule {}
