import { Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export type DB = PostgresJsDatabase<{}>;

@Injectable()
export class DatabaseService {
  constructor(public readonly db: DB) {}
}