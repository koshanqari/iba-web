import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'Start date and end date are required' },
        { status: 400 }
      );
    }

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

    // Query to get all leads within the date range
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
      WHERE DATE(created_at) >= $1 AND DATE(created_at) <= $2
      ORDER BY created_at DESC
    `;

    const result = await pool.query(query, [startDate, endDate]);

    // Transform data for CSV
    const leads = result.rows.map(row => ({
      id: row.id,
      name: row.name || '',
      email: row.email || '',
      phone: row.phone || '',
      designation: row.designation || '',
      company: row.company || '',
      message: row.message || '',
      status: row.status || 'new',
      priority: row.priority || 'medium',
      admin_notes: row.admin_notes || '',
      utm_source: row.utm_source || '',
      utm_medium: row.utm_medium || '',
      utm_campaign: row.utm_campaign || '',
      utm_content: row.utm_content || '',
      utm_term: row.utm_term || '',
      lead_source: row.lead_source || 'contact_page',
      created_at: row.created_at ? new Date(row.created_at).toISOString() : '',
      updated_at: row.updated_at ? new Date(row.updated_at).toISOString() : '',
    }));

    await pool.end();

    // Convert to CSV
    const csvHeaders = [
      'ID',
      'Name',
      'Email',
      'Phone',
      'Designation',
      'Company',
      'Message',
      'Status',
      'Priority',
      'Admin Notes',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign',
      'UTM Content',
      'UTM Term',
      'Lead Source',
      'Created At',
      'Updated At'
    ];

    const csvRows = leads.map(lead => [
      lead.id,
      `"${lead.name.replace(/"/g, '""')}"`,
      `"${lead.email.replace(/"/g, '""')}"`,
      `"${lead.phone.replace(/"/g, '""')}"`,
      `"${lead.designation.replace(/"/g, '""')}"`,
      `"${lead.company.replace(/"/g, '""')}"`,
      `"${lead.message.replace(/"/g, '""')}"`,
      `"${lead.status.replace(/"/g, '""')}"`,
      `"${lead.priority.replace(/"/g, '""')}"`,
      `"${lead.admin_notes.replace(/"/g, '""')}"`,
      `"${lead.utm_source.replace(/"/g, '""')}"`,
      `"${lead.utm_medium.replace(/"/g, '""')}"`,
      `"${lead.utm_campaign.replace(/"/g, '""')}"`,
      `"${lead.utm_content.replace(/"/g, '""')}"`,
      `"${lead.utm_term.replace(/"/g, '""')}"`,
      `"${lead.lead_source.replace(/"/g, '""')}"`,
      lead.created_at,
      lead.updated_at
    ]);

    const csvContent = [
      csvHeaders.join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="leads_export_${startDate}_to_${endDate}.csv"`,
      },
    });

  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export leads' },
      { status: 500 }
    );
  }
}
