import Image from 'next/image';
import {
  Section,
  Container,
  Grid,
  SectionHeading,
  BrandHeading,
  CardLabel,
  CardTitle,
  CardText,
  BodyText,
  BodyTextSmall,
  ButtonPrimary,
  LinkUnderlineBlackAccent,
  ImageCard,
  HeroSuper,
  HeroTitle,
  HeroDescription,
  ImpactNumber,
} from '@/components/ui';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - full height with navbar overlay */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
            alt="Business strategy and consulting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="hero-container relative z-20">
          <div className="max-w-content-narrow">
            <HeroSuper className="mb-element-gap-small">
              What We Do
            </HeroSuper>
            <HeroTitle className="mb-card-padding-small">
              Our Services
            </HeroTitle>
            <HeroDescription>
              From strategy to execution, we deliver expert solutions that drive measurable impact across your organization.
            </HeroDescription>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section spacing="large" background="brand-secondary" className="-mt-px">
        <Container maxWidth="medium" className="text-center">
          <SectionHeading className="text-white mb-card-padding-small">
            Comprehensive Solutions for Complex Challenges
          </SectionHeading>
          <BodyText className="text-white font-light leading-loose">
            IBA Consulting delivers world-class expertise across strategy, operations, technology, and transformation. 
            Our integrated approach combines deep industry knowledge with proven methodologies to help organizations 
            navigate their most critical business challenges and seize emerging opportunities.
          </BodyText>
        </Container>
      </Section>

      {/* Service 1: Strategy & Transformation */}
      <Section spacing="large" background="light-tertiary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Strategy</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Navigate complex transformations with strategic clarity
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Navigate complex business transformations with confidence. Our strategic advisors work alongside 
                your leadership team to design and execute transformations that deliver sustainable value. From 
                corporate strategy to operating model design, we help you make the right decisions at the right time.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Corporate & business unit strategy
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Organizational transformation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    M&A strategy and post-merger integration
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Growth strategy and market entry
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                alt="Strategy and transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 2: Operations Excellence */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80"
                alt="Operations excellence"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Operations</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Drive operational performance to new levels of excellence
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Drive operational performance to new levels. We help organizations streamline processes, 
                reduce costs, and improve quality through lean methodologies, process reengineering, and 
                performance management. Our approach delivers measurable improvements in efficiency and effectiveness.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Process optimization and reengineering
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Supply chain transformation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Lean and Six Sigma implementation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Performance management systems
                  </BodyTextSmall>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 3: Digital & Technology */}
      <Section spacing="large" background="light-tertiary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Digital</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Harness technology to create competitive advantage
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Harness the power of digital transformation. Our technology experts help you leverage emerging 
                technologies, modernize legacy systems, and build digital capabilities that create competitive 
                advantage. We guide you from strategy through implementation to adoption.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Digital strategy and roadmap development
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Cloud migration and modernization
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    AI and advanced analytics implementation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Enterprise architecture and IT strategy
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="Digital and technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 4: Financial Advisory */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
                alt="Financial advisory"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Financial Advisory</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Make informed decisions with expert financial guidance
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Make informed financial decisions with expert guidance. Our financial advisory team provides 
                comprehensive support across valuation, due diligence, restructuring, and capital optimization. 
                We help you maximize value and manage financial risk.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    M&A due diligence and valuation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Financial restructuring and turnaround
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Capital structure optimization
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Financial modeling and forecasting
                  </BodyTextSmall>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 5: Risk & Compliance */}
      <Section spacing="large" background="light-tertiary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Risk Management</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Protect your organization with robust risk frameworks
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Protect your organization with robust risk management. We help you identify, assess, and mitigate 
                risks while ensuring regulatory compliance. Our integrated approach strengthens governance and 
                builds resilience across your enterprise.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Enterprise risk management frameworks
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Regulatory compliance and audit
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Cybersecurity and data privacy
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Business continuity planning
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                alt="Risk and compliance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 6: People & Change */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="People and change management"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">People & Change</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Enable successful transformations through your people
              </BrandHeading>
              <BodyText className="text-text-secondary mb-content-gap leading-loose">
                Enable successful transformations through people. Our change management experts help you build 
                organizational capability, engage stakeholders, and drive adoption. We ensure your people are 
                ready, willing, and able to embrace change.
              </BodyText>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Change management strategy and execution
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Leadership development and coaching
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Organizational design and culture transformation
                  </BodyTextSmall>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">→</span>
                  <BodyTextSmall className="text-text-secondary">
                    Talent strategy and workforce planning
                  </BodyTextSmall>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section spacing="large" background="brand-primary-dark">
        <Container maxWidth="medium" className="text-center">
          <SectionHeading className="text-white mb-card-padding-small">
            Why Choose IBA Consulting
          </SectionHeading>
          <BodyText className="text-white font-light leading-loose mb-section-small">
            Our integrated approach combines deep expertise with practical execution. We don't just advise—we 
            partner with you to deliver sustainable results that drive long-term value.
          </BodyText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-section-small">
            <div className="text-center">
              <ImpactNumber className="text-brand-accent mb-element-gap-small">30+</ImpactNumber>
              <BodyTextSmall className="text-white">
                Years of industry expertise
              </BodyTextSmall>
            </div>
            <div className="text-center">
              <ImpactNumber className="text-brand-accent mb-element-gap-small">900+</ImpactNumber>
              <BodyTextSmall className="text-white">
                Successful engagements
              </BodyTextSmall>
            </div>
            <div className="text-center">
              <ImpactNumber className="text-brand-accent mb-element-gap-small">850+</ImpactNumber>
              <BodyTextSmall className="text-white">
                Expert consultants
              </BodyTextSmall>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Insights Section */}
      <Section spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-small">
            <SectionHeading className="mb-card-padding-small">
              Service-Related Insights
            </SectionHeading>
            <BodyText className="text-text-secondary max-w-content-medium mx-auto">
              Explore our latest thinking on strategy, operations, and transformation.
            </BodyText>
          </div>

          <Grid columns={3} gap="large">
            <ImageCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              imageAlt="PE Value Creation"
            >
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Insight</span>
              </CardLabel>
              <CardTitle className="mb-text-gap">
                The Future of PE Value Creation
              </CardTitle>
              <CardText>
                How leading private equity firms are evolving their playbook to drive returns in an uncertain market.
              </CardText>
            </ImageCard>

            <ImageCard 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              imageAlt="Digital Transformation"
            >
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Insight</span>
              </CardLabel>
              <CardTitle className="mb-text-gap">
                Digital Transformation at Scale
              </CardTitle>
              <CardText>
                Best practices for executing enterprise-wide digital transformations that deliver measurable impact.
              </CardText>
            </ImageCard>

            <ImageCard 
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              imageAlt="Operational Excellence"
            >
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">Insight</span>
              </CardLabel>
              <CardTitle className="mb-text-gap">
                Operational Excellence in 2025
              </CardTitle>
              <CardText>
                How organizations are leveraging automation and AI to achieve breakthrough operational performance.
              </CardText>
            </ImageCard>
          </Grid>

          <div className="mt-section-small text-center">
            <LinkUnderlineBlackAccent href="/#insights" className="inline-flex items-center gap-2">
              View All Insights
              <span className="text-lg">→</span>
            </LinkUnderlineBlackAccent>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
            alt="Contact us"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-feature-heading font-light text-white leading-snug mb-content-gap">
              Ready to transform your business?
            </h2>
            <BodyText className="text-white font-light leading-loose mb-content-gap max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your strategic objectives.
            </BodyText>
            <ButtonPrimary href="/contact">
              Get in Touch
            </ButtonPrimary>
          </div>
        </Container>
      </section>
    </>
  );
}

