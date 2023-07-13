import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'В этом проекте нет фронтенда. Зато в нем есть миграции';
  }
}
