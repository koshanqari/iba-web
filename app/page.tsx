import Image from 'next/image';
import {
  Section,
  Container,
  Grid,
  ContentNarrow,
  SectionHeading,
  BrandHeading,
  ImpactNumber,
  CardLabel,
  CardTitle,
  CardText,
  ArticleLabel,
  ArticleTitle,
  BodyTextSmall,
  ButtonPrimary,
  ButtonSecondary,
  LinkUnderlineWhite,
  LinkUnderlineAccent,
  LinkUnderlineBlue,
  LinkUnderlineBlackAccent,
  ImageCard,
  ArticleCard,
  InsightCard,
} from '@/components/ui';
import { getFeaturedInsights } from '@/data/insights';
import Link from 'next/link';

export default function HomePage() {
  const featuredInsights = getFeaturedInsights();
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
            alt="Business skyline"
            fill
            className="object-cover"
          priority
        />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="hero-container relative z-20">
          <div className="max-w-content-narrow">
            <p className="text-body-tiny text-white font-normal uppercase tracking-widest mb-element-gap-small">
              Transform Your Business
            </p>
            <h1 className="text-hero font-light text-white leading-tight mb-card-padding-small">
              Strategic Excellence.<br />Delivered.
            </h1>
            <p className="text-body-large text-white font-light leading-loose mb-content-gap max-w-content-narrow">
              Partner with industry-leading consultants to drive transformation, optimize operations, 
              and achieve sustainable growth in today's dynamic business environment.
            </p>
            <ButtonPrimary href="/contact">
              Get Started
            </ButtonPrimary>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <Section spacing="large" background="brand-secondary" className="-mt-px">
        <Container maxWidth="narrow" className="text-center px-8 md:px-12 lg:px-80">
          
          <p className="text-body-large text-white font-light leading-loose mb-content-gap">
            We are the leading global expert firm helping organizations navigate crisis and transformation with
            clarity, speed and confidence. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod illum maxime similique explicabo repellendus odio nisi repudiandae, perferendis amet eos quos numquam temporibus animi. Tenetur culpa ea magnam accusamus error.
          </p>
          <LinkUnderlineAccent href="#about-iba" className="inline-flex items-center gap-2">
            About us
            <span className="text-lg">→</span>
          </LinkUnderlineAccent>
        </Container>
      </Section>

      {/* Our Impact Section */}
      <Section spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-small">
            <SectionHeading className="mb-card-padding-small">Our Impact</SectionHeading>
            <p className="text-body text-text-secondary max-w-content-medium mx-auto">
              A snapshot of our presence and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-grid items-start text-center lg:divide-x lg:divide-border">
            {/* Stat 1 */}
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">30+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">years in India,</p>
              <p className="text-body-small text-text-secondary">opening our first office in Mumbai in 1992</p>
            </div>

            {/* Stat 2 */}
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">900+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">engagements</p>
              <p className="text-body-small text-text-secondary">completed since 2017</p>
            </div>

            {/* Stat 3 */}
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">850+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">partners and consultants</p>
              <p className="text-body-small text-text-secondary">across four locations</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Services Section */}
      <Section spacing="large" background="white" className="section-split-gradient">
        <Container>
          <div className="text-center mb-section-small">
            <SectionHeading className="mb-element-gap-small">
              Core Services
            </SectionHeading>
            <p className="text-brand-subtitle font-normal max-w-content-medium mx-auto text-text-secondary">
              Explore how we help organizations across critical challenges.
            </p>
          </div>

          <Grid columns={3} gap="normal">
            <ImageCard 
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              imageAlt="Data Centers"
            >
              <CardLabel className="mb-text-gap"><span className="text-brand-accent-text">Data Centers</span></CardLabel>
              <CardTitle className="mb-text-gap">
                Solving tomorrow's data center demands
              </CardTitle>
              <CardText>
                As AI, cloud expansion and sustainability targets converge, data center providers and investors face the challenge of delivering more capacity.
              </CardText>
            </ImageCard>

            <ImageCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              imageAlt="PE Value Creation Index"
            >
              <CardLabel className="mb-text-gap"><span className="text-brand-accent-text">PE Value Creation Index</span></CardLabel>
              <CardTitle className="mb-text-gap">
                PE firms face a more challenging path to returns
              </CardTitle>
              <CardText>
                A survey of 500+ global PE leaders reveals which levers firms trust most, where execution gaps persist and why today's playbook must evolve.
              </CardText>
            </ImageCard>

            <ImageCard 
              image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
              imageAlt="Corporate Sustainability"
            >
              <CardLabel className="mb-text-gap"><span className="text-brand-accent-text">Corporate Sustainability</span></CardLabel>
              <CardTitle className="mb-text-gap">
                Sustainable impact through expertise
              </CardTitle>
              <CardText>
                In 2024, IBA Consulting continued to advance our climate goals, invest in our talent and make a sustainable impact in the communities we serve.
              </CardText>
            </ImageCard>
          </Grid>
        </Container>
      </Section>


      {/* Feature Block*/}
      <Section spacing="large" background="brand-primary-gradient" className="-mt-px">
        <Container maxWidth="narrow" className="text-center">

          <h2 className="text-feature-heading font-light text-white leading-snug mb-card-padding-small">
            True expertise is<br />delivering confidence
          </h2>
          <p className="text-body-large text-white font-light leading-loose mb-content-gap">
            See how we deliver confidence for decision-makers across the built environment — 
            from strategy to execution to dispute resolution. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nihil quis magni, eveniet officia esse blanditiis. Blanditiis at atque ipsum fuga, explicabo consectetur. Modi, mollitia commodi tempore hic rem recusandae!
          </p>
          <LinkUnderlineAccent href="#construction" className="inline-flex items-center gap-2">
            Other Services
            <span className="text-lg">→</span>
          </LinkUnderlineAccent>
        </Container>
      </Section>



      {/* Industries Section */}
      <Section spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-small">
            <SectionHeading className="mb-text-gap">Industries</SectionHeading>
            <p className="text-body text-text-secondary max-w-content-narrow mx-auto">
              We partner with organizations across sectors to deliver measurable outcomes.
            </p>
        </div>

          <Grid columns={3} gap="large">
            <ArticleCard 
              image="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80"
              imageAlt="Healthcare"
            >
              <ArticleLabel className="text-brand-accent-text mb-text-gap">Industry</ArticleLabel>
              <ArticleTitle className="mb-text-gap group-hover:opacity-70 transition-opacity">
                Healthcare
              </ArticleTitle>
              <BodyTextSmall>
                Supporting providers, payers and pharma with transformation and resilience.
              </BodyTextSmall>
            </ArticleCard>

            <ArticleCard 
              image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80"
              imageAlt="Energy & Utilities"
            >
              <ArticleLabel className="text-brand-accent-text mb-text-gap">Industry</ArticleLabel>
              <ArticleTitle className="mb-text-gap group-hover:opacity-70 transition-opacity">
                Energy & Utilities
              </ArticleTitle>
              <BodyTextSmall>
                Enabling reliable growth through capital planning and operational excellence.
              </BodyTextSmall>
            </ArticleCard>

            <ArticleCard 
              image="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80"
              imageAlt="Financial Services"
            >
              <ArticleLabel className="text-brand-accent-text mb-text-gap">Industry</ArticleLabel>
              <ArticleTitle className="mb-text-gap group-hover:opacity-70 transition-opacity">
                Financial Services
              </ArticleTitle>
              <BodyTextSmall>
                Advising banks, insurers and PE on risk, growth and value creation.
              </BodyTextSmall>
            </ArticleCard>
          </Grid>

          <div className="mt-section-small text-center">
            <LinkUnderlineBlackAccent href="#industries" className="inline-flex items-center gap-2">
            All Industries
            <span className="text-lg">→</span>
            </LinkUnderlineBlackAccent>
          </div>
        </Container>
      </Section>

      {/* Insights Section */}
      <Section spacing="large" background="light">
        <Container>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-section-small">
            <SectionHeading className="mb-4 lg:mb-0 relative inline-block">
              Insights
              <span className="absolute left-0 w-full bg-brand-accent" style={{ bottom: '-8px', height: '4px' }}></span>
            </SectionHeading>
            <LinkUnderlineBlackAccent href="#insights" className="inline-flex items-center gap-2">
              View All Insights
              <span className="text-lg">→</span>
            </LinkUnderlineBlackAccent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInsights.map((insight) => (
              <Link 
                key={insight.id} 
                href={`/insights/${insight.id}`}
                className="group bg-white transition-all duration-300 overflow-hidden hover:translate-y-[-4px] flex flex-col"
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6 border-l border-r border-b border-border flex flex-col flex-grow">
                  <ArticleLabel className="mb-text-gap">
                    {insight.category}
                  </ArticleLabel>
                  <CardTitle className="mb-text-gap group-hover:text-brand-accent transition-colors line-clamp-2">
                    {insight.title}
                  </CardTitle>
                  <BodyTextSmall className="text-text-secondary mb-card-padding-small leading-relaxed flex-grow line-clamp-3">
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
        </Container>
      </Section>



      {/* Careers Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2400&q=90"
            alt="Team collaboration"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-feature-heading font-light text-white leading-snug mb-content-gap">
              Need expert help? Contact our team today.
            </h2>
            <ButtonPrimary href="#contact">
              Contact us
            </ButtonPrimary>
    </div>
        </Container>
      </section>



      
    </>
  );
}
