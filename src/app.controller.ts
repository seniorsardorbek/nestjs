import { Body, Controller, Get, Header, HttpCode, Param, Post, Redirect, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post()
  postHello(@Body() body: any): string {
    return this.appService.getHello() + ' ' + body.message;
  }




  
}
