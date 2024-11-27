import { Injectable } from '@nestjs/common';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as db from '../schema';

export type DB = PostgresJsDatabase<typeof db>;

@Injectable()
export class DatabaseService {
  constructor(public readonly db: DB) {}
}