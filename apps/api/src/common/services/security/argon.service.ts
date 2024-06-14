import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class ArgonService {
  public async createHash(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  public async match(hash: string, password: string): Promise<boolean> {
    return await argon2.verify(hash, password);
  }
}
