import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Return capability tags for service selection
    const capabilityTags = [
      'Strategy & Transformation',
      'Operations Excellence',
      'Digital & Technology',
      'Financial Advisory',
      'Risk Management',
      'People & Change',
      'Healthcare Consulting',
      'Financial Services',
      'Energy & Utilities',
      'Manufacturing',
      'Technology',
      'Consumer & Retail',
      'M&A Advisory',
      'Change Management',
      'Process Optimization',
      'Digital Transformation',
      'Cloud Migration',
      'Data Analytics',
      'AI Implementation',
      'Cybersecurity',
      'Regulatory Compliance',
      'Performance Management',
      'Supply Chain',
      'Customer Experience',
      'Market Entry',
      'Growth Strategy',
      'Cost Optimization',
      'Quality Management',
      'Innovation Management',
      'Sustainability Consulting'
    ];

    return NextResponse.json(capabilityTags);
  } catch (error) {
    console.error('Error fetching capability tags:', error);
    return NextResponse.json(
      { error: 'Failed to fetch capability tags' },
      { status: 500 }
    );
  }
}
