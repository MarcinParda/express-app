import { Pool } from 'pg';

export const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'ownapipro',
  password: 'secret',
  port: 5432,
});
