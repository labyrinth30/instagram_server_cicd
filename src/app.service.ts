import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.DB_NAME);
    console.log('getHello');
    return `${process.env.DB_NAME}`;
  }
}
