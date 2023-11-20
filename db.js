import { Pool } from 'pg';

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ownapipro',
  password: 'secret',
  port: 5432,
});

export default db;
