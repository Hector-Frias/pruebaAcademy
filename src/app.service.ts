import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const helloMessage = 'Hello Dicsys! ';
    return helloMessage;
  }
}
