import { Injectable } from '@nestjs/common';
import { verify } from '@digitalroute/email-verify';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async verifyEmail(email): Promise<Record<string, any>> {
    return new Promise((resolve) => {
      verify(email, (err, info) => {
        if (err)
          return resolve({
            success: false,
            ...err,
          });

        if (info.success) {
          return resolve(info);
        } else {
          return resolve(info);
        }
      });
    });
  }
}
