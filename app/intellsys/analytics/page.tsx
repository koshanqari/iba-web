import AdminLayout from '@/components/admin/AdminLayout';
import {
  Section,
  Container,
  Grid,
  SectionHeading,
  BrandHeading,
  CardTitle,
  CardText,
  BodyText,
  BodyTextSmall,
  ImpactNumber,
} from '@/components/ui';

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="space-y-section-medium">
        {/* Header */}
        <div>
          <BrandHeading className="mb-text-gap">Analytics Dashboard</BrandHeading>
          <BodyText className="text-text-secondary">
            Track performance metrics and insights
          </BodyText>
        </div>

        {/* Stats Grid */}
        <Grid columns={4} gap="normal">
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <div className="text-body-small text-text-secondary">Total Leads</div>
            <ImpactNumber className="text-brand-accent mt-element-gap-small">1,247</ImpactNumber>
          </div>
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <div className="text-body-small text-text-secondary">Conversion Rate</div>
            <ImpactNumber className="text-green-600 mt-element-gap-small">23.4%</ImpactNumber>
          </div>
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <div className="text-body-small text-text-secondary">Avg Response Time</div>
            <ImpactNumber className="text-blue-600 mt-element-gap-small">2.3h</ImpactNumber>
          </div>
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <div className="text-body-small text-text-secondary">Revenue Generated</div>
            <ImpactNumber className="text-purple-600 mt-element-gap-small">$2.4M</ImpactNumber>
          </div>
        </Grid>

        {/* Charts Placeholder */}
        <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
          <CardTitle className="mb-element-gap">Lead Trends</CardTitle>
          <div className="h-64 bg-background rounded-lg flex items-center justify-center">
            <BodyText className="text-text-secondary">Chart visualization coming soon</BodyText>
          </div>
        </div>

        {/* Additional Metrics */}
        <Grid columns={2} gap="normal">
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <CardTitle className="mb-element-gap">Top Lead Sources</CardTitle>
            <div className="space-y-element-gap-small">
              <div className="flex justify-between items-center">
                <BodyTextSmall>Website Form</BodyTextSmall>
                <BodyTextSmall className="font-semibold">45%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Referrals</BodyTextSmall>
                <BodyTextSmall className="font-semibold">28%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Social Media</BodyTextSmall>
                <BodyTextSmall className="font-semibold">15%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Direct Contact</BodyTextSmall>
                <BodyTextSmall className="font-semibold">12%</BodyTextSmall>
              </div>
            </div>
          </div>

          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <CardTitle className="mb-element-gap">Service Categories</CardTitle>
            <div className="space-y-element-gap-small">
              <div className="flex justify-between items-center">
                <BodyTextSmall>Strategy & Transformation</BodyTextSmall>
                <BodyTextSmall className="font-semibold">32%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Digital & Technology</BodyTextSmall>
                <BodyTextSmall className="font-semibold">28%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Operations Excellence</BodyTextSmall>
                <BodyTextSmall className="font-semibold">22%</BodyTextSmall>
              </div>
              <div className="flex justify-between items-center">
                <BodyTextSmall>Financial Advisory</BodyTextSmall>
                <BodyTextSmall className="font-semibold">18%</BodyTextSmall>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </AdminLayout>
  );
}
