import { Pool } from 'pg';

export const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ownapipro',
  password: 'secret',
  port: 5432,
});
