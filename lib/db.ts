import { Pool } from 'pg';

const pool = new Pool({
  host: '15.207.214.128',
  port: 5432,
  database: 'iba',
  user: 'iba_owner',
  password: '2M23vUA3Adf3',
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
