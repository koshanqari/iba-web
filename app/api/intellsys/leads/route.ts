import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const query = `
      SELECT 
        id,
        name,
        email,
        phone,
        designation,
        company,
        message,
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
      additional_details: row.message || '',
      status: 'new', // Default status
      priority: 'medium', // Default priority
      lead_source: 'form', // Default source
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));

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
      company, 
      designation, 
      message,
      additional_details,
      status = 'new',
      priority = 'medium',
      lead_source = 'manual'
    } = body;

    // Insert lead into database
    const query = `
      INSERT INTO web.leads (
        name, 
        email, 
        phone, 
        designation, 
        company, 
        message, 
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING id
    `;

    const values = [name, email, phone, designation, company, message || additional_details];
    const result = await pool.query(query, values);

    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id.toString() 
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}
