import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// src/app.controller.ts
@Controller('api')
export class AppController {
  @Get('health')
  healthCheck() {
    return { status: 'ok', message: 'NestJS connected' };
  }
}



