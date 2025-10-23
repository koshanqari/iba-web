'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { AdminButtonPrimary, AdminButtonSecondary } from '@/components/admin/AdminButtons';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { useAuth } from '@/components/admin/AuthProvider';
import { INDIAN_STATES, INDIAN_CITIES, COUNTRIES } from '@/lib/locationData';
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
  ImpactNumber,
} from '@/components/ui';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  designation?: string;
  message?: string;
  status: string;
  priority: string;
  admin_notes?: string;
  lead_source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  created_at: string;
  updated_at?: string;
}

export default function CRMPage() {
  const { user } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterSource, setFilterSource] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage, setLeadsPerPage] = useState(50);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [capabilityTags, setCapabilityTags] = useState<string[]>([]);
  const [isLoadingPincode, setIsLoadingPincode] = useState(false);

  // Dynamic location options
  const [countryOptions, setCountryOptions] = useState<string[]>(COUNTRIES);
  const [stateOptions, setStateOptions] = useState<string[]>(INDIAN_STATES);
  const [cityOptions, setCityOptions] = useState<string[]>(INDIAN_CITIES);

  // Form data for add/edit
  const [formData, setFormData] = useState<Partial<Lead>>({});

  useEffect(() => {
    fetchLeads();
    fetchCapabilityTags();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      
      if (!response.ok) {
        console.error('API Error:', data.error || 'Unknown error');
        setLeads([]);
        return;
      }
      
      if (Array.isArray(data)) {
        setLeads(data);
      } else {
        console.error('Invalid data format received:', data);
        setLeads([]);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCapabilityTags = async () => {
    try {
      const response = await fetch('/api/capabilities/tags');
      if (response.ok) {
        const tags = await response.json();
        if (Array.isArray(tags)) {
          setCapabilityTags(tags);
        } else {
          console.error('Invalid tags format received:', tags);
          setCapabilityTags([]);
        }
      } else {
        console.error('Failed to fetch capability tags:', response.status);
        setCapabilityTags([]);
      }
    } catch (error) {
      console.error('Error fetching capability tags:', error);
      setCapabilityTags([]);
    }
  };

  // Auto-fill region and city from pincode
  const autofillFromPincode = async (pin: string): Promise<{ region: string; city: string }> => {
    try {
      if (!/^\d{6}$/.test(pin)) {
        return { region: '', city: '' };
      }

      const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await response.json();
      
      if (data && data[0]?.Status === 'Success' && data[0]?.PostOffice?.length > 0) {
        const postOffice = data[0].PostOffice[0];
        return {
          region: postOffice.State || '',
          city: postOffice.District || ''
        };
      }
      
      return { region: '', city: '' };
    } catch (error) {
      console.error('Error fetching pincode data:', error);
      return { region: '', city: '' };
    }
  };


  const handleAddLead = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      designation: '',
      message: '',
      status: 'new',
      priority: 'medium',
      lead_source: 'manual',
    });
    setShowAddModal(true);
  };

  const handleEditLead = (lead: Lead) => {
    setFormData(lead);
    setShowEditModal(true);
  };

  const handleExportLeads = async (startDate: string, endDate: string) => {
    try {
      const response = await fetch(`/api/leads/export?startDate=${startDate}&endDate=${endDate}`);
      
      if (!response.ok) {
        throw new Error('Failed to export leads');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leads_export_${startDate}_to_${endDate}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setShowExportModal(false);
    } catch (error) {
      console.error('Error exporting leads:', error);
      alert('Failed to export leads. Please try again.');
    }
  };

  const handleSaveLead = async () => {
    try {
      const url = showEditModal ? `/api/leads/${formData.id}` : '/api/leads';
      const method = showEditModal ? 'PUT' : 'POST';

      // Prepare data for the API
      const leadData = showEditModal ? {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        designation: formData.designation,
        company: formData.company,
        message: formData.message,
        status: formData.status,
        priority: formData.priority,
        admin_notes: formData.admin_notes,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_content: formData.utm_content,
        utm_term: formData.utm_term,
      } : {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        designation: formData.designation,
        company: formData.company,
        message: formData.message,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_content: formData.utm_content,
        utm_term: formData.utm_term,
        lead_source: 'manual', // Set to manual for admin panel
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(showEditModal ? 'Lead updated successfully!' : 'Lead created successfully!');
        setShowEditModal(false);
        setShowAddModal(false);
        fetchLeads();
      } else {
        console.error('Failed to save lead:', data);
        alert(`Failed to save lead: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      alert(`Error saving lead: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setLeads(leads.filter(lead => lead.id !== id));
        setShowDetailModal(false);
        setShowEditModal(false);
      } else {
        console.error('Failed to delete lead');
        alert('Failed to delete lead. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('Error deleting lead. Please try again.');
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      qualified: 'bg-purple-100 text-purple-800',
      converted: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      low: 'bg-gray-100 text-gray-800',
      medium: 'bg-blue-100 text-blue-800',
      high: 'bg-orange-100 text-orange-800',
      urgent: 'bg-red-100 text-red-800',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const filteredLeads = leads
    .filter(lead => {
      const matchesSearch = 
        lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
      const matchesPriority = filterPriority === 'All' || lead.priority === filterPriority;
      const matchesSource = filterSource === 'All' || lead.lead_source === filterSource;
      
      return matchesSearch && matchesStatus && matchesPriority && matchesSource;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'priority':
          const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
          return (priorityOrder[b.priority as keyof typeof priorityOrder] || 0) - (priorityOrder[a.priority as keyof typeof priorityOrder] || 0);
        default:
          return 0;
      }
    });

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil((filteredLeads || []).length / leadsPerPage));
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = (filteredLeads || []).slice(indexOfFirstLead, indexOfLastLead);

  // Reset to page 1 when filters or per-page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterStatus, filterPriority, filterSource, sortBy, leadsPerPage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    converted: leads.filter(l => l.status === 'converted').length,
    highPriority: leads.filter(l => l.priority === 'high' || l.priority === 'urgent').length,
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-section-medium">
        {/* Header */}
        <div className="flex pt-8 flex-col sm:flex-row justify-between items-start sm:items-center gap-content-gap">
          <div>
            <BrandHeading className="mb-text-gap">CRM Dashboard</BrandHeading>
            <BodyText className="text-text-secondary font-semibold">
              Welcome, {user}!
            </BodyText>
          </div>
          <div className="flex gap-element-gap">
            <AdminButtonPrimary onClick={handleAddLead}>
              + Add New Lead
            </AdminButtonPrimary>
            <button
              onClick={() => setShowExportModal(true)}
              className="btn-secondary border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary"
            >
              Export Leads
            </button>
          </div>
        </div>

        {/* Stats */}
        <Grid columns={4} gap="normal">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <div className="text-sm text-text-secondary">Total Leads</div>
            <div className="text-2xl font-semibold text-brand-accent mt-1">{stats.total}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <div className="text-sm text-text-secondary">New</div>
            <div className="text-2xl font-semibold text-blue-600 mt-1">{stats.new}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <div className="text-sm text-text-secondary">Converted</div>
            <div className="text-2xl font-semibold text-green-600 mt-1">{stats.converted}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <div className="text-sm text-text-secondary">High Priority</div>
            <div className="text-2xl font-semibold text-orange-600 mt-1">{stats.highPriority}</div>
          </div>
        </Grid>

        {/* Filters */}
        <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
          <div className="flex flex-col lg:flex-row gap-content-gap lg:items-center">
            {/* Search */}
            <div className="flex-1 lg:max-w-md">
              <input
                type="text"
                placeholder="🔍 Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              />
            </div>
            
            {/* Filters Row */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-element-gap-small lg:gap-element-gap">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              >
                <option value="All">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
                <option value="lost">Lost</option>
              </select>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              >
                <option value="All">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>

              <select
                value={filterSource}
                onChange={(e) => setFilterSource(e.target.value)}
                className="px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              >
                <option value="All">All Sources</option>
                <option value="form">Website Form</option>
                <option value="manual">Manual Entry</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">By Name</option>
                <option value="priority">By Priority</option>
              </select>
            </div>
            
            {/* Results Counter */}
            <div className="hidden lg:flex items-center text-body-small text-text-secondary whitespace-nowrap">
              <span className="font-semibold text-text-primary">{filteredLeads.length}</span>
              <span className="ml-1">of {leads.length} leads</span>
            </div>
          </div>
          
          {/* Mobile Results Counter */}
          <div className="lg:hidden text-body-tiny text-text-secondary text-center mt-element-gap-small">
            Showing <span className="font-semibold text-text-primary">{filteredLeads.length}</span> of {leads.length} leads
          </div>
        </div>

        {/* Leads Display */}
        <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
          {loading ? (
            <div className="p-section-medium text-center text-text-secondary">Loading leads...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-section-medium text-center text-text-secondary">No leads found</div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-background">
                    <tr>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Name</th>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Contact</th>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Lead Source</th>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Status</th>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Priority</th>
                      <th className="px-6 py-3 text-left text-body-tiny font-semibold text-text-secondary uppercase tracking-wide">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {(currentLeads || []).map((lead) => (
                      <tr key={lead.id} className="hover:bg-background cursor-pointer" onClick={() => {
                        setSelectedLead(lead);
                        setShowDetailModal(true);
                      }}>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-text-primary">{lead.name}</div>
                          {lead.company && <div className="text-body-small text-text-secondary">{lead.company}</div>}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-body-small text-text-primary">{lead.email}</div>
                          {lead.phone && <div className="text-body-small text-text-secondary">{lead.phone}</div>}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-body-small text-text-primary">
                            {lead.lead_source || '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-body-tiny rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-body-tiny rounded-full ${getPriorityColor(lead.priority)}`}>
                            {lead.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-body-small text-text-primary">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </div>
                          <div className="text-body-tiny text-text-secondary">
                            {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden divide-y divide-border">
                {(currentLeads || []).map((lead) => (
                  <div
                    key={lead.id}
                    className="p-card-padding hover:bg-background cursor-pointer"
                    onClick={() => {
                      setSelectedLead(lead);
                      setShowDetailModal(true);
                    }}
                  >
                    <div className="flex justify-between items-start mb-element-gap-small">
                      <div className="flex-1">
                        <CardTitle className="mb-text-gap">{lead.name}</CardTitle>
                        {lead.company && <BodyTextSmall className="text-text-secondary">{lead.company}</BodyTextSmall>}
                      </div>
                      <div className="flex flex-col gap-text-gap items-end ml-element-gap-small">
                        <span className={`px-3 py-1 text-body-tiny rounded-full whitespace-nowrap ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                        <span className={`px-3 py-1 text-body-tiny rounded-full whitespace-nowrap ${getPriorityColor(lead.priority)}`}>
                          {lead.priority}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-text-gap text-body-small text-text-secondary mb-element-gap-small">
                      <div>{lead.email}</div>
                      {lead.phone && <div>{lead.phone}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Pagination */}
        <div className="bg-white p-card-padding rounded-lg shadow-sm border border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-content-gap">
            {/* Left: Per Page Selector */}
            <div className="flex items-center gap-element-gap-small text-body-small">
              <span className="text-text-secondary whitespace-nowrap">Show:</span>
              <select
                value={leadsPerPage}
                onChange={(e) => setLeadsPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
              >
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-text-secondary">per page</span>
            </div>

            {/* Center: Page Info */}
            <div className="text-body-small text-text-secondary">
              {filteredLeads.length > 0 ? (
                <>
                  Page <span className="font-semibold text-text-primary">{currentPage}</span> of <span className="font-semibold text-text-primary">{totalPages}</span>
                  <span className="hidden sm:inline"> · Showing {indexOfFirstLead + 1}-{Math.min(indexOfLastLead, filteredLeads.length)} of {filteredLeads.length}</span>
                </>
              ) : (
                <span>No leads to display</span>
              )}
            </div>

            {/* Right: Page Navigation */}
            <div className="flex items-center gap-element-gap-small">
              <button 
                onClick={() => setCurrentPage(1)} 
                disabled={currentPage === 1 || totalPages === 1}
                className="px-3 py-2 text-body-small border border-border rounded-none transition-colors hover:border-brand-accent text-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                First
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} 
                disabled={currentPage === 1 || totalPages === 1}
                className="px-3 py-2 text-body-small border border-border rounded-none transition-colors hover:border-brand-accent text-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              
              {/* Page Numbers */}
              <div className="hidden md:flex gap-text-gap">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-2 text-body-small rounded-none border transition-colors ${
                        currentPage === pageNum
                          ? 'bg-brand-accent text-white border-brand-accent'
                          : 'border-border hover:border-brand-accent text-text-primary'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} 
                disabled={currentPage === totalPages || totalPages === 1}
                className="px-3 py-2 text-body-small border border-border rounded-none transition-colors hover:border-brand-accent text-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)} 
                disabled={currentPage === totalPages || totalPages === 1}
                className="px-3 py-2 text-body-small border border-border rounded-none transition-colors hover:border-brand-accent text-text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg w-full max-w-4xl my-section-medium mx-card-padding flex flex-col max-h-[calc(100vh-4rem)]">
            {/* Header */}
            <div className="flex-shrink-0 bg-white border-b border-border px-card-padding py-card-padding-small flex justify-between items-center rounded-t-lg sticky top-0 z-10">
              <BrandHeading>Lead Details</BrandHeading>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-text-secondary hover:text-text-primary text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-card-padding space-y-section-small">
              {/* Quick Actions */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-card-padding-small">
                <CardTitle className="mb-element-gap-small text-blue-900">Quick Actions</CardTitle>
                <div className="grid grid-cols-2 gap-element-gap mb-element-gap">
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Status</label>
                    <select
                      value={selectedLead.status}
                      onChange={async (e) => {
                        const newStatus = e.target.value;
                        try {
                          const response = await fetch(`/api/leads/${selectedLead.id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ status: newStatus }),
                          });
                          if (response.ok) {
                            setSelectedLead({ ...selectedLead, status: newStatus });
                            setLeads((leads || []).map(l => l.id === selectedLead.id ? { ...l, status: newStatus } : l));
                          } else {
                            console.error('Failed to update status');
                            alert('Failed to update status. Please try again.');
                          }
                        } catch (error) {
                          console.error('Error updating status:', error);
                          alert('Error updating status. Please try again.');
                        }
                      }}
                      className="w-full px-3 py-2 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="converted">Converted</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Priority</label>
                    <select
                      value={selectedLead.priority}
                      onChange={async (e) => {
                        const newPriority = e.target.value;
                        try {
                          const response = await fetch(`/api/leads/${selectedLead.id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ priority: newPriority }),
                          });
                          if (response.ok) {
                            setSelectedLead({ ...selectedLead, priority: newPriority });
                            setLeads((leads || []).map(l => l.id === selectedLead.id ? { ...l, priority: newPriority } : l));
                          } else {
                            console.error('Failed to update priority');
                            alert('Failed to update priority. Please try again.');
                          }
                        } catch (error) {
                          console.error('Error updating priority:', error);
                          alert('Error updating priority. Please try again.');
                        }
                      }}
                      className="w-full px-3 py-2 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
                
                {/* Admin Notes */}
                <div>
                  <label className="block text-body-small font-semibold mb-text-gap">Admin Notes</label>
                  <textarea
                    value={selectedLead.admin_notes || ''}
                    onChange={(e) => {
                      setSelectedLead({ ...selectedLead, admin_notes: e.target.value });
                    }}
                    onBlur={async () => {
                      try {
                        const response = await fetch(`/api/leads/${selectedLead.id}`, {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ admin_notes: selectedLead.admin_notes }),
                        });
                        if (response.ok) {
                          setLeads((leads || []).map(l => l.id === selectedLead.id ? { ...l, admin_notes: selectedLead.admin_notes } : l));
                        } else {
                          console.error('Failed to save notes');
                          alert('Failed to save notes. Please try again.');
                        }
                      } catch (error) {
                        console.error('Error saving notes:', error);
                        alert('Error saving notes. Please try again.');
                      }
                    }}
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small resize-none"
                    placeholder="Add notes about this lead..."
                  />
                  <BodyTextSmall className="text-text-muted mt-text-gap">Auto-saves when you click outside</BodyTextSmall>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-card-padding-small">
                <CardTitle className="mb-element-gap-small text-green-900">Contact Information</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap text-body-small">
                  <div>
                    <span className="font-semibold">Name:</span> {selectedLead.name}
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span> {selectedLead.email || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span> {selectedLead.phone || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">Company:</span> {selectedLead.company || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">Designation:</span> {selectedLead.designation || 'N/A'}
                  </div>
                </div>
                {selectedLead.message && (
                  <div className="mt-element-gap">
                    <span className="font-semibold block mb-text-gap">Message:</span>
                    <p className="bg-white p-card-padding-small rounded text-body-small whitespace-pre-wrap">{selectedLead.message}</p>
                  </div>
                )}
              </div>

              {/* UTM Tracking Details */}
              <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-card-padding-small">
                <CardTitle className="mb-element-gap-small text-orange-900">UTM Tracking</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap text-body-small">
                  <div>
                    <span className="font-semibold">UTM Source:</span> {selectedLead.utm_source || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">UTM Medium:</span> {selectedLead.utm_medium || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">UTM Campaign:</span> {selectedLead.utm_campaign || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">UTM Content:</span> {selectedLead.utm_content || 'N/A'}
                  </div>
                  <div>
                    <span className="font-semibold">UTM Term:</span> {selectedLead.utm_term || 'N/A'}
                  </div>
                </div>
              </div>

              {/* Lead Source & Timeline */}
              <div className="bg-gray-50 border-l-4 border-gray-500 rounded-lg p-card-padding-small">
                <CardTitle className="mb-element-gap-small text-gray-900">Lead Source & Timeline</CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-element-gap text-body-small">
                  <div>
                    <span className="font-semibold">Lead Source:</span> {selectedLead.lead_source || 'form'}
                  </div>
                  <div>
                    <span className="font-semibold">Created:</span> {new Date(selectedLead.created_at).toLocaleString()}
                  </div>
                  <div>
                    <span className="font-semibold">Last Updated:</span> {selectedLead.updated_at ? new Date(selectedLead.updated_at).toLocaleString() : 'N/A'}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 bg-white border-t border-border px-card-padding py-card-padding-small rounded-b-lg sticky bottom-0 z-10">
              <div className="flex gap-element-gap">
                <ButtonSecondary onClick={() => setShowDetailModal(false)}>
                  Close
                </ButtonSecondary>
                <ButtonPrimary onClick={() => {
                  setShowDetailModal(false);
                  handleEditLead(selectedLead);
                }}>
                  Edit Lead Details
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-card-padding">
              <div className="flex justify-between items-center mb-element-gap">
                <BrandHeading>Add New Lead</BrandHeading>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-text-secondary hover:text-text-primary text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSaveLead(); }} className="space-y-element-gap">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap">
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Name *</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Email *</label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Company</label>
                    <input
                      type="text"
                      value={formData.company || ''}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                  <div>
                    <label className="block text-body-small font-semibold mb-text-gap">Designation</label>
                    <input
                      type="text"
                      value={formData.designation || ''}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                </div>

                {/* UTM Tracking Fields */}
                <div className="border-t border-border pt-element-gap">
                  <BrandHeading className="text-lg mb-element-gap">UTM Tracking</BrandHeading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-element-gap">
                    <div>
                      <label className="block text-body-small font-semibold mb-text-gap">UTM Source</label>
                      <input
                        type="text"
                        value={formData.utm_source || ''}
                        onChange={(e) => setFormData({ ...formData, utm_source: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                        placeholder="e.g., google, facebook, linkedin"
                      />
                    </div>
                    <div>
                      <label className="block text-body-small font-semibold mb-text-gap">UTM Medium</label>
                      <input
                        type="text"
                        value={formData.utm_medium || ''}
                        onChange={(e) => setFormData({ ...formData, utm_medium: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                        placeholder="e.g., cpc, social, email"
                      />
                    </div>
                    <div>
                      <label className="block text-body-small font-semibold mb-text-gap">UTM Campaign</label>
                      <input
                        type="text"
                        value={formData.utm_campaign || ''}
                        onChange={(e) => setFormData({ ...formData, utm_campaign: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                        placeholder="e.g., summer_sale_2024"
                      />
                    </div>
                    <div>
                      <label className="block text-body-small font-semibold mb-text-gap">UTM Content</label>
                      <input
                        type="text"
                        value={formData.utm_content || ''}
                        onChange={(e) => setFormData({ ...formData, utm_content: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                        placeholder="e.g., banner_ad, text_link"
                      />
                    </div>
                    <div>
                      <label className="block text-body-small font-semibold mb-text-gap">UTM Term</label>
                      <input
                        type="text"
                        value={formData.utm_term || ''}
                        onChange={(e) => setFormData({ ...formData, utm_term: e.target.value })}
                        className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                        placeholder="e.g., consulting services"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-body-small font-semibold mb-text-gap">Message/Requirements</label>
                  <textarea
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small resize-none"
                    placeholder="Describe the project requirements or any additional details..."
                  />
                </div>

                <div className="flex gap-element-gap pt-element-gap">
                  <AdminButtonSecondary onClick={() => setShowAddModal(false)}>
                    Cancel
                  </AdminButtonSecondary>
                  <AdminButtonPrimary type="submit">
                    Add Lead
                  </AdminButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-card-padding">
              <div className="flex justify-between items-center mb-element-gap">
                <BrandHeading>Export Leads</BrandHeading>
                <button
                  onClick={() => setShowExportModal(false)}
                  className="text-text-secondary hover:text-text-primary text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-element-gap">
                <div>
                  <label className="block text-body-small font-semibold mb-text-gap">Start Date *</label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    required
                  />
                </div>
                <div>
                  <label className="block text-body-small font-semibold mb-text-gap">End Date *</label>
                  <input
                    type="date"
                    id="endDate"
                    className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    required
                  />
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-card-padding-small">
                  <BodyTextSmall className="text-blue-900">
                    <strong>Export includes:</strong> All lead data from the database including contact information, UTM tracking, status, priority, admin notes, and timestamps.
                  </BodyTextSmall>
                </div>
              </div>

              <div className="flex gap-element-gap pt-element-gap">
                <AdminButtonSecondary onClick={() => setShowExportModal(false)}>
                  Cancel
                </AdminButtonSecondary>
                <AdminButtonPrimary onClick={() => {
                  const startDate = (document.getElementById('startDate') as HTMLInputElement)?.value;
                  const endDate = (document.getElementById('endDate') as HTMLInputElement)?.value;
                  
                  if (!startDate || !endDate) {
                    alert('Please select both start and end dates');
                    return;
                  }
                  
                  if (new Date(startDate) > new Date(endDate)) {
                    alert('Start date cannot be after end date');
                    return;
                  }
                  
                  handleExportLeads(startDate, endDate);
                }}>
                  Export CSV
                </AdminButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      )}
      </AdminLayout>
    </ProtectedRoute>
  );
}
