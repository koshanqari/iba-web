import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
      WHERE id = $1
    `;

    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    const lead = result.rows[0];
    
    // Transform the data to match the expected Lead interface
    const transformedLead = {
      id: lead.id.toString(),
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      designation: lead.designation,
      message: lead.message,
      additional_details: lead.message || '',
      status: 'new', // Default status
      priority: 'medium', // Default priority
      lead_source: 'form', // Default source
      created_at: lead.created_at,
      updated_at: lead.updated_at,
    };

    return NextResponse.json(transformedLead);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lead' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      company, 
      designation, 
      message,
      additional_details,
      status,
      priority,
      admin_notes
    } = body;

    // Build dynamic query based on provided fields
    const updateFields = [];
    const values = [];
    let paramCount = 1;

    if (name !== undefined) {
      updateFields.push(`name = $${paramCount++}`);
      values.push(name);
    }
    if (email !== undefined) {
      updateFields.push(`email = $${paramCount++}`);
      values.push(email);
    }
    if (phone !== undefined) {
      updateFields.push(`phone = $${paramCount++}`);
      values.push(phone);
    }
    if (company !== undefined) {
      updateFields.push(`company = $${paramCount++}`);
      values.push(company);
    }
    if (designation !== undefined) {
      updateFields.push(`designation = $${paramCount++}`);
      values.push(designation);
    }
    if (message !== undefined || additional_details !== undefined) {
      updateFields.push(`message = $${paramCount++}`);
      values.push(message || additional_details);
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      );
    }

    // Always update the updated_at timestamp
    updateFields.push(`updated_at = NOW()`);
    
    // Add the ID parameter
    values.push(id);

    const query = `
      UPDATE web.leads 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING id
    `;

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id.toString() 
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const query = `
      DELETE FROM web.leads 
      WHERE id = $1
      RETURNING id
    `;

    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      id: result.rows[0].id.toString() 
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}
