import { DatabaseService } from './database.service';
import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as postgres from 'postgres';
import * as schema from '../schema';

export const DATABASE_SERVICE = 'database-service';

// Decorador @Global() indica que este módulo estará disponible globalmente en la aplicación NestJS.
@Global()
@Module({
  providers: [
    {
      provide: DATABASE_SERVICE,      
      // useFactory define una fábrica asíncrona para crear el servicio de base de datos.
      useFactory: async () => {
        const pg = postgres(process.env.DATABASE_URL);
        return new DatabaseService(
          drizzle(pg, { schema, logger: true }),
        );
      },
    },
  ],
  exports: [DATABASE_SERVICE],
})
export class DatabaseModule {}