import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // The post controller to return the body and verified status
  @Post()
  validateCompanyData(@Body() body): Object {
    return this.appService.validateCompanyData(body)
  }
}
