import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* 
Decorator that marks a class as a Nest controller that can receive inbound requests and produce responses.

An HTTP Controller responds to inbound HTTP Requests and produces HTTP Responses. 
It defines a class that provides the context for one or more related route handlers that correspond to HTTP request methods 
and associated routes for example GET /api/profile, POST /users/resume.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/time')
  getTime(): Date {
    return this.appService.getTime();
  }
}
