// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [ShopModule],
  controllers: [AppController],
})
export class AppModule {}