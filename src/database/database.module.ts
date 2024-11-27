import { DatabaseService } from './database.service';
import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';

export const DATABASE_SERVICE = 'database-service';

@Global()
@Module({
  providers: [
    {
      provide: DATABASE_SERVICE,
      useFactory: async () => {
        const pg = postgres('postgresql://user:example@127.0.0.1:5432/db');
        return new DatabaseService(
          drizzle(pg, { schema: {}, logger: true }),
        );
      },
    },
  ],
  exports: [DATABASE_SERVICE],
})
export class DatabaseModule {}