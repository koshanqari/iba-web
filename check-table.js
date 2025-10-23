const { Pool } = require('pg');

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

async function checkTable() {
  try {
    // Check current table structure
    const result = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_schema = 'web' AND table_name = 'leads'
      ORDER BY ordinal_position;
    `);
    
    console.log('Current table structure:');
    console.log(result.rows);
    
  } catch (error) {
    console.error('Error checking table:', error.message);
  } finally {
    await pool.end();
  }
}

checkTable();
