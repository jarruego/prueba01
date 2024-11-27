import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DatabaseService } from './database/database.service';
import { DATABASE_SERVICE } from './database/database.module';
import { users } from './schema';

@Injectable()
export class AppService {

  constructor(@Inject(DATABASE_SERVICE) private readonly databaseService: DatabaseService) { }

  async insertUser() {
    await this.databaseService.db.insert(users).values({
      lastname: 'usuario',
      name: '2',
    });
  }

  async getAll(){
    const result = await this.databaseService.db.select().from(users);  
    console.log(result);  
    return result;
  }
}
