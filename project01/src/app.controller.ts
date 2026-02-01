// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: 'Aura Shop API is running',
      status: 'ok',
      endpoints: {
        shop: '/api/shop',
        health: '/api/health',
      },
    };
  }

  @Get('api/health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}



