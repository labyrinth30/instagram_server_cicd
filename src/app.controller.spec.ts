import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from 'process';
import * as dotenv from 'dotenv'; // dotenv 라이브러리 import

dotenv.config({ path: '.env' }); // .env 파일 로드

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Hello World"', () => {
      expect(appController.getHello()).toBe(`Hello World`);
    });
  });
});