/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppjapanService {
  constructor(
    @Inject('APP_NAME')
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message: string,
  ) {}
  getHello(): string {
    console.log(process.env);
    return `Hello japan! from ${this.name}, ${this.message}`;
  }
}
