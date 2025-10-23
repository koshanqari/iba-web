'use client';

import { useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  Section,
  Container,
  SectionHeading,
  BrandHeading,
  CardTitle,
  BodyText,
  BodyTextSmall,
  ButtonPrimary,
  ButtonSecondary,
  HeroTitle,
  HeroSuper,
  HeroDescription,
} from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    company: '',
    message: '',
  });
  
  const [phoneValue, setPhoneValue] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: phoneValue || formData.phone,
          designation: formData.designation,
          company: formData.company,
          message: formData.message,
          lead_source: 'contact_page', // Set to contact_page for contact form submissions
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          designation: '',
          company: '',
          message: '',
        });
        setPhoneValue('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-[72px]"></div>

      {/* Contact Form & Info Section */}
      <Section spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-medium">
            <SectionHeading className="mb-card-padding-small">Get in Touch</SectionHeading>
            <p className="text-body text-text-secondary max-w-content-medium mx-auto">
              Fill out the form below and our team will get back to you within 24 hours, or reach out to one of our offices directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name */}
                <div>
                  <label htmlFor="name" className="block text-body-small font-semibold text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                  />
                </div>

                {/* Row 2: Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-body-small font-semibold text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-body-small font-semibold text-text-primary mb-2">
                      Phone *
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      className="phone-input-custom"
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Designation and Company Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="designation" className="block text-body-small font-semibold text-text-primary mb-2">
                      Designation *
                    </label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-body-small font-semibold text-text-primary mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-small font-semibold text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:border-brand-accent transition-colors text-body-small resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-accent text-white px-8 py-4 hover:bg-opacity-90 transition-all text-button font-semibold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-body-small text-green-600 font-medium">
                      ✓ Message sent successfully! We'll get back to you within 24 hours.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="text-body-small text-red-600 font-medium">
                      ✗ Failed to send message. Please try again or contact us directly.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <h3 className="text-brand-heading font-normal text-text-primary mb-element-gap">Our Offices</h3>

              <div className="space-y-10">
                {/* New York Office */}
                <div>
                  <CardTitle className="mb-text-gap">New York</CardTitle>
                  <div className="space-y-2 text-body-small text-text-secondary leading-loose">
                    <p>350 Fifth Avenue, Suite 7410</p>
                    <p>New York, NY 10118</p>
                    <p className="pt-2">
                      <a href="tel:+12125551234" className="text-brand-accent hover:underline">
                        +1 (212) 555-1234
                      </a>
                    </p>
                    <p>
                      <a href="mailto:newyork@ibaconsulting.com" className="text-brand-accent hover:underline">
                        newyork@ibaconsulting.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* London Office */}
                <div>
                  <CardTitle className="mb-text-gap">London</CardTitle>
                  <div className="space-y-2 text-body-small text-text-secondary leading-loose">
                    <p>25 Gresham Street</p>
                    <p>London EC2V 7HN, United Kingdom</p>
                    <p className="pt-2">
                      <a href="tel:+442075551234" className="text-brand-accent hover:underline">
                        +44 20 7555 1234
                      </a>
                    </p>
                    <p>
                      <a href="mailto:london@ibaconsulting.com" className="text-brand-accent hover:underline">
                        london@ibaconsulting.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Singapore Office */}
                <div>
                  <CardTitle className="mb-text-gap">Singapore</CardTitle>
                  <div className="space-y-2 text-body-small text-text-secondary leading-loose">
                    <p>10 Collyer Quay, #10-01</p>
                    <p>Ocean Financial Centre, Singapore 049315</p>
                    <p className="pt-2">
                      <a href="tel:+6565551234" className="text-brand-accent hover:underline">
                        +65 6555 1234
                      </a>
                    </p>
                    <p>
                      <a href="mailto:singapore@ibaconsulting.com" className="text-brand-accent hover:underline">
                        singapore@ibaconsulting.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Dubai Office */}
                <div>
                  <CardTitle className="mb-text-gap">Dubai</CardTitle>
                  <div className="space-y-2 text-body-small text-text-secondary leading-loose">
                    <p>Level 14, The Gate Building</p>
                    <p>Dubai International Financial Centre, Dubai, UAE</p>
                    <p className="pt-2">
                      <a href="tel:+97145551234" className="text-brand-accent hover:underline">
                        +971 4 555 1234
                      </a>
                    </p>
                    <p>
                      <a href="mailto:dubai@ibaconsulting.com" className="text-brand-accent hover:underline">
                        dubai@ibaconsulting.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="mt-12 pt-8 border-t border-border">
                <CardTitle className="mb-text-gap">General Inquiries</CardTitle>
                <p className="text-body-small text-text-secondary mb-2">
                  For all other inquiries:
                </p>
                <p>
                  <a href="mailto:info@ibaconsulting.com" className="text-brand-accent hover:underline text-body-small">
                    info@ibaconsulting.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}

