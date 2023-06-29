import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { verify } from '@digitalroute/email-verify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/email/check/:email')
  async checkEmailAddress(
    @Param('email') email: string,
  ): Promise<Record<string, any>> {
    const result = await this.appService.verifyEmail(email);
    return {
      status: result.success,
      ...result,
    };
  }
}
