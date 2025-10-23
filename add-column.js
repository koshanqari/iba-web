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

async function addDesignationColumn() {
  try {
    // Add designation column
    await pool.query(`
      ALTER TABLE web.leads 
      ADD COLUMN IF NOT EXISTS designation VARCHAR(255);
    `);
    
    console.log('✅ Designation column added successfully!');
    
    // Check updated table structure
    const result = await pool.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_schema = 'web' AND table_name = 'leads'
      ORDER BY ordinal_position;
    `);
    
    console.log('\nUpdated table structure:');
    result.rows.forEach(row => {
      console.log(`- ${row.column_name} (${row.data_type}) ${row.is_nullable === 'NO' ? 'NOT NULL' : 'NULL'}`);
    });
    
  } catch (error) {
    console.error('❌ Error adding column:', error.message);
  } finally {
    await pool.end();
  }
}

addDesignationColumn();
