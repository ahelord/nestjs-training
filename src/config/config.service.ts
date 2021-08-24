import { Injectable } from '@nestjs/common';
import * as config from 'config';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly configs: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';
    if (isDevelopmentEnv) {
      const envFilePath = path.join(__dirname, '../', '../', '../', '.env');
      console.log(envFilePath);
      const existPath = fs.existsSync(envFilePath);
      if (!existPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }
      this.configs = parse(fs.readFileSync(envFilePath));
    } else {
      this.configs = {
        PORT: process.env.PORT,
      };
    }
  }

  getConfig(key: string): string {
    return this.configs[key];
  }

  //  Complete Developer Node.js Dawid Udemy
  public get<T>(key: string): T {
    return config.get<T>(key);
  }
}
