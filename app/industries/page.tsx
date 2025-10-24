import Image from 'next/image';
import Link from 'next/link';
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
  HeroSuper,
  HeroTitle,
  HeroDescription,
  ArticleLabel,
} from '@/components/ui';
import { getInsightsForPage } from '@/data/insights';

export default function IndustriesPage() {
  const industryInsights = getInsightsForPage('industries');
  
  return (
    <>
      {/* Hero Section - full height with navbar overlay */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2400&q=90"
            alt="Industries we serve"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="hero-container relative z-20">
          <div className="max-w-content-narrow">
            <HeroSuper className="mb-element-gap-small">
              Where We Work
            </HeroSuper>
            <HeroTitle className="mb-card-padding-small">
              Industries We Serve
            </HeroTitle>
            <HeroDescription>
              Deep industry expertise across sectors driving global transformation and growth.
            </HeroDescription>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section spacing="large" background="white" className="-mt-px">
        <Container maxWidth="medium" className="text-center">
          <SectionHeading className="mb-card-padding-small">
            Sector-Specific Excellence
          </SectionHeading>
          <BodyText className="text-text-secondary leading-loose">
            Our consultants bring decades of industry-specific experience across diverse sectors. 
            We understand the unique challenges, regulatory landscapes, and competitive dynamics that 
            define each industry, enabling us to deliver tailored solutions that drive measurable impact.
          </BodyText>
        </Container>
      </Section>

      {/* Healthcare */}
      <Section spacing="large" background="brand-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">01 / Health Care</span>
              </CardLabel>
              <BrandHeading className="text-white mb-card-padding-small">
                Transforming Care Delivery
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=1200&q=80"
                  alt="Health Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-white leading-loose mb-content-gap">
                Navigate the evolving healthcare landscape with confidence. We help providers, payers, and life sciences 
                companies improve patient outcomes while managing costs. Our healthcare experts drive operational excellence, 
                digital transformation, and strategic growth across the care continuum—from hospital operations and value-based 
                care to clinical effectiveness and healthcare technology implementation.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-white">
                    Hospital operations • Value-based care • Clinical quality • Healthcare IT • Population health management
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-white">
                    Health systems • Payers • Pharma & biotech • Medical device companies • Health tech startups
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=1200&q=80"
                alt="Healthcare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Financial Services */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">02 / Financials</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Navigating Digital Disruption
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Financials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-text-secondary leading-loose mb-content-gap">
                Partner with us to address the financial services industry's most pressing challenges. We work with banks, 
                insurers, asset managers, and fintech firms to drive digital transformation, enhance risk management, and 
                improve operational efficiency. Our expertise spans retail banking, wealth management, payments, insurance, 
                and capital markets—helping you navigate complex regulatory requirements while capturing new growth opportunities.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Digital banking • Risk & compliance • Wealth management • Payments modernization • Core banking transformation
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Retail banks • Investment banks • Insurance companies • Asset managers • Fintech platforms
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Financial Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Energy & Utilities */}
      <Section spacing="large" background="brand-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">03 / Utilities</span>
              </CardLabel>
              <BrandHeading className="text-white mb-card-padding-small">
                Leading the Energy Transition
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
                  alt="Utilities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-white leading-loose mb-content-gap">
                Navigate the shift to clean energy while maintaining reliable operations. We help utilities, oil & gas companies, 
                and renewable energy firms adapt to changing market dynamics and regulatory requirements. Our energy experts support 
                grid modernization, asset optimization, decarbonization strategies, and the integration of renewable technologies—
                ensuring you deliver affordable, reliable, and sustainable energy to your customers.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-white">
                    Grid modernization • Decarbonization • Asset performance • Renewable integration • Energy trading & markets
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-white">
                    Electric utilities • Oil & gas • Renewable developers • Energy storage • Grid infrastructure
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
                alt="Energy & Utilities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Manufacturing */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">04 / Industrials</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Driving Industry 4.0 Excellence
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80"
                  alt="Industrials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-text-secondary leading-loose mb-content-gap">
                Optimize your manufacturing operations for the digital age. We help industrial companies improve productivity, 
                implement smart manufacturing technologies, and build resilient supply chains. Our expertise spans discrete and 
                process manufacturing across automotive, aerospace, chemicals, and consumer goods—delivering lean operations, 
                quality excellence, and intelligent automation that drives competitive advantage.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Smart manufacturing • Supply chain resilience • Lean operations • Quality management • Predictive maintenance
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Automotive • Aerospace & defense • Chemicals • Consumer products • Industrial equipment
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80"
                alt="Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Technology & Telecom */}
      <Section spacing="large" background="brand-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">05 / Information Technology</span>
              </CardLabel>
              <BrandHeading className="text-white mb-card-padding-small">
                Scaling Innovation & Market Leadership
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                  alt="Information Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-white leading-loose mb-content-gap">
                Stay ahead in fast-moving technology markets. We partner with software companies, telecom operators, and 
                tech-enabled businesses to drive growth, optimize go-to-market strategies, and scale operations. Our team 
                understands platform business models, network economics, and the unique dynamics of technology-driven industries—
                from product strategy and sales optimization to 5G deployment and ecosystem development.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-white">
                    Product strategy • Go-to-market • Network infrastructure • Platform ecosystems • SaaS optimization
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="text-white mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-white">
                    Software companies • Telecom operators • Cloud providers • Hardware OEMs • Tech platforms
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="Technology & Telecommunications"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Retail & Consumer */}
      <Section spacing="large" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <CardLabel className="mb-text-gap">
                <span className="text-brand-accent-text">06 / Consumer Discretionary</span>
              </CardLabel>
              <BrandHeading className="mb-card-padding-small">
                Adapting to the Digital Consumer
              </BrandHeading>
              <div className="relative h-[300px] md:h-[400px] lg:hidden mb-content-gap">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="Consumer Discretionary"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <BodyText className="text-text-secondary leading-loose mb-content-gap">
                Thrive in the evolving retail landscape. We help retailers and consumer goods companies transform their business 
                models, optimize omnichannel experiences, and build direct-to-consumer capabilities. Our solutions address 
                merchandising, supply chain optimization, customer experience design, and e-commerce strategy—driving customer 
                loyalty and operational efficiency in a digital-first world where consumer expectations are constantly evolving.
              </BodyText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <CardTitle className="mb-text-gap text-lg">Key Focus Areas</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Omnichannel strategy • Customer experience • Supply chain • E-commerce • Merchandising analytics
                  </BodyTextSmall>
                </div>
                <div>
                  <CardTitle className="mb-text-gap text-lg">Client Types</CardTitle>
                  <BodyTextSmall className="text-text-secondary">
                    Department stores • Specialty retail • CPG companies • E-commerce pure-plays • Luxury brands
                  </BodyTextSmall>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                alt="Retail & Consumer Goods"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Cross-Industry Approach */}
      <Section spacing="large" background="brand-primary-dark">
        <Container maxWidth="medium" className="text-center">
          <SectionHeading className="text-white mb-card-padding-small">
            Cross-Industry Innovation
          </SectionHeading>
          <BodyText className="text-white leading-loose mb-content-gap">
            While we bring deep sector-specific knowledge, our cross-industry perspective enables us to transfer 
            best practices and innovative solutions across sectors. This unique combination of depth and breadth 
            drives breakthrough results for our clients.
          </BodyText>
          <BodyText className="text-white leading-loose">
            Whether you're facing digital disruption, regulatory change, or competitive pressure, we combine 
            industry expertise with proven methodologies to deliver sustainable transformation.
          </BodyText>
        </Container>
      </Section>

      {/* Industry Insights Section */}
      <Section spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-small">
            <SectionHeading className="mb-card-padding-small relative inline-block">
              Industry Insights
              <span className="absolute left-0 w-full bg-brand-accent" style={{ bottom: '-8px', height: '4px' }}></span>
            </SectionHeading>
            <BodyText className="text-text-secondary max-w-content-medium mx-auto mt-8">
              Explore our latest perspectives on industry trends and transformation.
            </BodyText>
          </div>

          {industryInsights.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industryInsights.map((insight) => (
                  <Link 
                    key={insight.id} 
                    href={`/insights/${insight.id}`}
                    className="group bg-white transition-all duration-300 overflow-hidden hover:translate-y-[-4px] flex flex-col"
                  >
                    <div className="relative h-48 md:h-64 mb-card-padding-small">
                      <Image
                        src={insight.image.replace('w=1200', 'w=800')}
                        alt={insight.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 border-l border-r border-b border-border flex flex-col flex-grow">
                      <ArticleLabel className="text-brand-accent-text mb-text-gap">
                        {insight.category}
                      </ArticleLabel>
                      <CardTitle className="mb-text-gap group-hover:text-brand-accent transition-colors line-clamp-2">
                        {insight.title}
                      </CardTitle>
                      <BodyTextSmall className="text-text-secondary leading-relaxed flex-grow line-clamp-3">
                        {insight.excerpt}
                      </BodyTextSmall>
                      <div className="flex items-center justify-between pt-card-padding-small border-t border-border mt-auto">
                        <BodyTextSmall className="text-text-muted">
                          {insight.date}
                        </BodyTextSmall>
                        <BodyTextSmall className="text-text-muted">
                          {insight.readTime}
                        </BodyTextSmall>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-section-small text-center">
                <LinkUnderlineBlackAccent href="/insights" className="inline-flex items-center gap-2">
                  View All Insights
                  <span className="text-lg">→</span>
                </LinkUnderlineBlackAccent>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <SectionHeading className="mb-4">
                No insights available
              </SectionHeading>
              <BodyText className="text-text-secondary mb-8">
                We're working on adding industry-specific insights. Check back soon!
              </BodyText>
              <LinkUnderlineBlackAccent href="/insights" className="inline-flex items-center gap-2">
                View All Insights
                <span className="text-lg">→</span>
              </LinkUnderlineBlackAccent>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90"
            alt="Contact us"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-feature-heading font-light text-white leading-snug mb-content-gap">
              Let's discuss your industry challenges
            </h2>
            <BodyText className="text-white leading-loose mb-content-gap max-w-2xl mx-auto">
              Connect with our industry experts to explore how we can help you navigate transformation and achieve your strategic goals.
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
