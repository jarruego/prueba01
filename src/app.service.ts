import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DatabaseService } from './database/database.service';
import { DATABASE_SERVICE } from './database/database.module';
import { users } from './schema';

@Injectable()
export class AppService {

  constructor(@Inject(DATABASE_SERVICE) private readonly databaseService: DatabaseService) {}

  async getHello() {
    await this.databaseService.db.insert(users).values({
      lastname: 'usuario',
      name: '2',
    });
  }
}
