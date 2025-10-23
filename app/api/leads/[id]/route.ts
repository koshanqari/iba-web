import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
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

    // Get the fields to update
    const fields = Object.keys(body);
    const values = Object.values(body);

    if (fields.length === 0) {
      await pool.end();
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    // Build the SET clause dynamically
    const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');

    const query = `
      UPDATE web.leads
      SET ${setClause}, updated_at = NOW()
      WHERE id = $${fields.length + 1}
      RETURNING *
    `;

    const result = await pool.query(query, [...values, id]);

    if (result.rows.length === 0) {
      await pool.end();
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const lead = result.rows[0];
    const transformedLead = {
      id: lead.id.toString(),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      designation: lead.designation,
      message: lead.message,
      additional_details: lead.message || '',
      status: lead.status || 'new',
      priority: lead.priority || 'medium',
      admin_notes: lead.admin_notes || '',
      lead_source: 'form',
      created_at: lead.created_at,
      updated_at: lead.updated_at,
    };

    await pool.end();
    return NextResponse.json(transformedLead);
  } catch (error) {
    console.error(`Failed to update lead ${id}:`, error);
    return NextResponse.json({ error: `Failed to update lead ${id}` }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
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

    const query = 'DELETE FROM web.leads WHERE id = $1 RETURNING id';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      await pool.end();
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    await pool.end();
    return NextResponse.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error(`Failed to delete lead ${id}:`, error);
    return NextResponse.json({ error: `Failed to delete lead ${id}` }, { status: 500 });
  }
}
