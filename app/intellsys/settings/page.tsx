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
  ButtonPrimary,
  ButtonSecondary,
} from '@/components/ui';

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-section-medium">
        {/* Header */}
        <div>
          <BrandHeading className="mb-text-gap">Settings</BrandHeading>
          <BodyText className="text-text-secondary">
            Configure your Intellsys admin panel
          </BodyText>
        </div>

        {/* Settings Sections */}
        <div className="space-y-section-small">
          {/* General Settings */}
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <CardTitle className="mb-element-gap">General Settings</CardTitle>
            <div className="space-y-element-gap">
              <div>
                <label className="block text-body-small font-semibold mb-text-gap">Company Name</label>
                <input
                  type="text"
                  defaultValue="IBA Consulting"
                  className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                />
              </div>
              <div>
                <label className="block text-body-small font-semibold mb-text-gap">Default Lead Status</label>
                <select className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small">
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                </select>
              </div>
              <div>
                <label className="block text-body-small font-semibold mb-text-gap">Default Priority</label>
                <select className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small">
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <CardTitle className="mb-element-gap">Notification Settings</CardTitle>
            <div className="space-y-element-gap">
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold">Email Notifications</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Receive email alerts for new leads</BodyTextSmall>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-accent" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold">SMS Notifications</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Receive SMS alerts for urgent leads</BodyTextSmall>
                </div>
                <input type="checkbox" className="w-4 h-4 text-brand-accent" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold">Dashboard Alerts</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Show alerts in the admin dashboard</BodyTextSmall>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-brand-accent" />
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
            <CardTitle className="mb-element-gap">Data Management</CardTitle>
            <div className="space-y-element-gap">
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold">Export Leads</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Download all leads as CSV</BodyTextSmall>
                </div>
                <ButtonSecondary>Export</ButtonSecondary>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold">Backup Database</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Create a backup of all data</BodyTextSmall>
                </div>
                <ButtonSecondary>Backup</ButtonSecondary>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <BodyTextSmall className="font-semibold text-red-600">Clear Old Data</BodyTextSmall>
                  <BodyTextSmall className="text-text-secondary">Remove leads older than 2 years</BodyTextSmall>
                </div>
                <ButtonSecondary className="border-red-300 text-red-600 hover:bg-red-50">Clear</ButtonSecondary>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <ButtonPrimary>Save Settings</ButtonPrimary>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
