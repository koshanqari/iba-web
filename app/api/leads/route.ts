import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Dynamic import to avoid module resolution issues
    const { Pool } = await import('pg');
    
    const pool = new Pool({
      host: process.env.DB_HOST || '15.207.214.128',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'iba',
      user: process.env.DB_USER || 'iba_owner',
      password: process.env.DB_PASSWORD || '2M23vUA3Adf3',
      ssl: {
        rejectUnauthorized: false
      }
    });

    const query = `
      SELECT 
        id,
        name,
        email,
        phone,
        designation,
        company,
        message,
        status,
        priority,
        admin_notes,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        lead_source,
        created_at,
        updated_at
      FROM web.leads 
      ORDER BY created_at DESC
    `;

    const result = await pool.query(query);
    
    // Transform the data to match the expected Lead interface
    const leads = result.rows.map(row => ({
      id: row.id.toString(),
      name: row.name,
      email: row.email,
      phone: row.phone,
      company: row.company,
      designation: row.designation,
      message: row.message,
      status: row.status || 'new',
      priority: row.priority || 'medium',
      admin_notes: row.admin_notes || '',
      utm_source: row.utm_source || '',
      utm_medium: row.utm_medium || '',
      utm_campaign: row.utm_campaign || '',
      utm_content: row.utm_content || '',
      utm_term: row.utm_term || '',
      lead_source: row.lead_source || 'contact_page',
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));

    await pool.end();
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      designation, 
      company, 
      message,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      lead_source = 'manual' // Default to manual for admin panel
    } = body;

    // Dynamic import to avoid module resolution issues
    const { Pool } = await import('pg');

    const pool = new Pool({
      host: process.env.DB_HOST || '15.207.214.128',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'iba',
      user: process.env.DB_USER || 'iba_owner',
      password: process.env.DB_PASSWORD || '2M23vUA3Adf3',
      ssl: {
        rejectUnauthorized: false
      }
    });

    // Insert lead into database
    const query = `
      INSERT INTO web.leads (
        name, email, phone, designation, company, message, 
        utm_source, utm_medium, utm_campaign, utm_content, utm_term, lead_source,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
      RETURNING id
    `;

    const values = [
      name, email, phone, designation, company, message,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term, lead_source
    ];
    const result = await pool.query(query, values);

    await pool.end();
    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id 
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
