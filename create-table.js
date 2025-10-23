const { Pool } = require('pg');
const fs = require('fs');

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

async function createTable() {
  try {
    // Read the SQL file
    const sql = fs.readFileSync('sql/create_leads_table.sql', 'utf8');
    
    // Execute the SQL
    await pool.query(sql);
    
    console.log('✅ Table created successfully!');
    console.log('Schema: web');
    console.log('Table: leads');
    console.log('Columns: id, name, email, phone, designation, company, message, created_at');
    
  } catch (error) {
    console.error('❌ Error creating table:', error.message);
  } finally {
    await pool.end();
  }
}

createTable();
