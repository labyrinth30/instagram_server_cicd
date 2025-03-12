import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(env.DB_NAME);
    console.log('getHello');
    return `${env.DB_NAME}`;
  }
}
