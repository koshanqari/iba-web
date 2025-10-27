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

export default function TermsOfUsePage() {
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
              Terms of Use
            </HeroTitle>
            <HeroDescription className="text-white/90">
              Please read these terms carefully before using our website and services.
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
                These Terms of Use ("Terms") govern your use of the IBA Global website and services. By accessing or using our website, you agree to be bound by these Terms.
              </BodyText>
            </div>

            <div className="space-y-section-medium">
              {/* Acceptance of Terms */}
              <div>
                <SectionHeading className="mb-card-padding-small">Acceptance of Terms</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </BodyText>
              </div>

              {/* Use License */}
              <div>
                <SectionHeading className="mb-card-padding-small">Use License</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  Permission is granted to temporarily download one copy of the materials on IBA Global's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </BodyText>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Modify or copy the materials</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Use the materials for any commercial purpose or for any public display</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Attempt to reverse engineer any software contained on the website</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Remove any copyright or other proprietary notations from the materials</BodyTextSmall>
                  </li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <SectionHeading className="mb-card-padding-small">Disclaimer</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  The materials on IBA Global's website are provided on an 'as is' basis. IBA Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </BodyText>
              </div>

              {/* Limitations */}
              <div>
                <SectionHeading className="mb-card-padding-small">Limitations</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  In no event shall IBA Global or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IBA Global's website, even if IBA Global or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </BodyText>
              </div>

              {/* Accuracy of Materials */}
              <div>
                <SectionHeading className="mb-card-padding-small">Accuracy of Materials</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  The materials appearing on IBA Global's website could include technical, typographical, or photographic errors. IBA Global does not warrant that any of the materials on its website are accurate, complete, or current. IBA Global may make changes to the materials contained on its website at any time without notice.
                </BodyText>
              </div>

              {/* Links */}
              <div>
                <SectionHeading className="mb-card-padding-small">Links</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  IBA Global has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by IBA Global of the site. Use of any such linked website is at the user's own risk.
                </BodyText>
              </div>

              {/* Modifications */}
              <div>
                <SectionHeading className="mb-card-padding-small">Modifications</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  IBA Global may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </BodyText>
              </div>

              {/* Governing Law */}
              <div>
                <SectionHeading className="mb-card-padding-small">Governing Law</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </BodyText>
              </div>

              {/* Intellectual Property */}
              <div>
                <SectionHeading className="mb-card-padding-small">Intellectual Property Rights</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
                </BodyText>
                <BodyText className="text-text-secondary leading-loose">
                  You do not acquire ownership rights to any content, document, or other materials viewed through the website. The posting of information or materials on the website does not constitute a waiver of any right in such information and materials.
                </BodyText>
              </div>

              {/* User Conduct */}
              <div>
                <SectionHeading className="mb-card-padding-small">User Conduct</SectionHeading>
                <BodyText className="text-text-secondary leading-loose mb-card-padding-small">
                  You agree to use the website only for lawful purposes and in accordance with these Terms. You agree not to:
                </BodyText>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Use the website in any way that violates any applicable federal, state, local, or international law or regulation</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Transmit, or procure the sending of, any advertising or promotional material without our prior written consent</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Impersonate or attempt to impersonate IBA Global, an employee, another user, or any other person or entity</BodyTextSmall>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2 mt-1">•</span>
                    <BodyTextSmall className="text-text-secondary">Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</BodyTextSmall>
                  </li>
                </ul>
              </div>

              {/* Termination */}
              <div>
                <SectionHeading className="mb-card-padding-small">Termination</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the website will cease immediately.
                </BodyText>
              </div>

              {/* Contact Information */}
              <div>
                <SectionHeading className="mb-card-padding-small">Contact Information</SectionHeading>
                <BodyText className="text-text-secondary leading-loose">
                  If you have any questions about these Terms of Use, please contact us at:
                </BodyText>
                <div className="mt-card-padding-small p-card-padding-small bg-background rounded-lg">
                  <BodyTextSmall className="text-text-primary font-semibold">IBA Global</BodyTextSmall><br />
                  <BodyTextSmall className="text-text-secondary">Email: legal@ibaconsulting.com</BodyTextSmall><br />
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
