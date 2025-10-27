import {
  Section,
  Container,
  SectionHeading,
  BodyText,
  BodyTextSmall,
  HeroSuper,
  HeroTitle,
  HeroDescription,
} from '@/components/ui';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-brand-primary-dark">
        <div className="hero-container-centered relative z-20">
          <div className="max-w-content-narrow">
            <HeroSuper className="mb-element-gap-small text-white">
              Legal Information
            </HeroSuper>
            <HeroTitle className="mb-card-padding-small text-white">
              Privacy Policy
            </HeroTitle>
            <HeroDescription className="text-white/90">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </HeroDescription>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <Section spacing="large" background="white">
        <Container maxWidth="medium">
          <div className="prose prose-lg max-w-none">
            <div className="mb-section-medium">
              <BodyText className="text-text-secondary mb-content-gap">
                <strong>Last Updated:</strong> January 2025
              </BodyText>
              <BodyText className="text-text-secondary leading-loose">
                IBA Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </BodyText>
            </div>

            <div className="space-y-section-medium">
              {/* Information We Collect */}
              <div>
                <SectionHeading className="mb-card-padding-small">Information We Collect</SectionHeading>
                <div className="space-y-card-padding-small">
                  <div>
                    <h3 className="text-card-title font-semibold text-text-primary mb-text-gap">Personal Information</h3>
                    <BodyText className="text-text-secondary leading-loose">
                      We may collect personal information that you voluntarily provide to us, including:
                    </BodyText>
                    <ul className="space-y-2 mt-card-padding-small ml-6">
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Name and contact information (email address, phone number, mailing address)</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Company information and job title</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Information provided in forms, surveys, or communications</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Resume and professional background information</BodyTextSmall>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-card-title font-semibold text-text-primary mb-text-gap">Automatically Collected Information</h3>
                    <BodyText className="text-text-secondary leading-loose">
                      When you visit our website, we may automatically collect certain information, including:
                    </BodyText>
                    <ul className="space-y-2 mt-card-padding-small ml-6">
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">IP address and device information</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Browser type and version</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Pages visited and time spent on our site</BodyTextSmall>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-accent mr-2 mt-1">•</span>
                        <BodyTextSmall className="text-text-secondary">Referring website information</BodyTextSmall>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <SectionHeading className="mb-card-padding-small">How We Use Your Information</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  We use the information we collect for various purposes, including:
                </BodyText>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Providing and improving our consulting services</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Responding to your inquiries and requests</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Sending newsletters, updates, and marketing communications</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Analyzing website usage and improving user experience</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Complying with legal obligations and protecting our rights</BodyTextSmall>
                  </li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <SectionHeading className="mb-card-padding-small">Information Sharing and Disclosure</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </BodyText>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">With your explicit consent</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">With service providers who assist us in operating our business</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">When required by law or to protect our legal rights</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">In connection with a business transfer or merger</BodyTextSmall>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <SectionHeading className="mb-card-padding-small">Data Security</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </BodyText>
              </div>

              {/* Your Rights */}
              <div>
                <SectionHeading className="mb-card-padding-small">Your Rights</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  Depending on your location, you may have certain rights regarding your personal information:
                </BodyText>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Access to your personal information</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Correction of inaccurate information</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Deletion of your personal information</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Restriction of processing</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Data portability</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Objection to processing</BodyTextSmall>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <SectionHeading className="mb-card-padding-small">Cookies and Tracking Technologies</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                </BodyText>
              </div>

              {/* Third-Party Links */}
              <div>
                <SectionHeading className="mb-card-padding-small">Third-Party Links</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </BodyText>
              </div>

              {/* Updates to Policy */}
              <div>
                <SectionHeading className="mb-card-padding-small">Updates to This Privacy Policy</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
                </BodyText>
              </div>

              {/* Contact Information */}
              <div>
                <SectionHeading className="mb-card-padding-small">Contact Us</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </BodyText>
                <div className="mt-card-padding-small p-card-padding-small bg-background rounded-lg">
                  <BodyTextSmall className="text-text-primary font-semibold">IBA Global</BodyTextSmall><br />
                  <BodyTextSmall className="text-text-secondary">Email: privacy@ibaconsulting.com</BodyTextSmall><br />
                  <BodyTextSmall className="text-text-secondary">Phone: +1 (555) 123-4567</BodyTextSmall><br />
                  <BodyTextSmall className="text-text-secondary">Address: 123 Business District, Suite 100, New York, NY 10001</BodyTextSmall>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
