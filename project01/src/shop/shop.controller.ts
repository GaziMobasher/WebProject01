// src/shop/shop.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('api/shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  getShopData() {
    return this.shopService.getShopData();
  }
}