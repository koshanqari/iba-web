import Image from 'next/image';
import Link from 'next/link';
import {
  Section,
  Container,
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
  FeatureTitle,
} from '@/components/ui';
import { getAllInsights } from '@/data/insights';

export default function InsightsPage() {
  const insights = getAllInsights().map(({ id, category, title, excerpt, image, readTime, date }) => ({
    id, category, title, excerpt, image: image.replace('w=1200', 'w=800'), readTime, date
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2400&q=90"
            alt="Insights and thought leadership"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="hero-container relative z-20">
          <div className="max-w-content-narrow">
            <HeroSuper className="mb-element-gap-small">
              Thought Leadership
            </HeroSuper>
            <HeroTitle className="mb-card-padding-small">
              Industry Insights & Analysis
            </HeroTitle>
            <HeroDescription>
              Stay ahead with our latest perspectives on industry trends, transformation strategies, and emerging opportunities.
            </HeroDescription>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section spacing="large" background="white" className="-mt-px">
        <Container maxWidth="medium" className="text-center">
          <SectionHeading className="mb-card-padding-small">
            Expert Perspectives
          </SectionHeading>
          <BodyText className="text-text-secondary leading-loose">
            Our consultants share deep insights from their experience across industries, helping you navigate 
            complex challenges and identify new opportunities for growth and transformation.
          </BodyText>
        </Container>
      </Section>

      {/* Insights Grid */}
      <Section spacing="large" background="background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
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

      {/* CTA Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
            alt="Contact us"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FeatureTitle className="mb-content-gap">
              Ready to transform your industry?
            </FeatureTitle>
            <BodyText className="text-white leading-loose mb-content-gap max-w-2xl mx-auto">
              Connect with our experts to discuss how these insights can be applied to your specific challenges and opportunities.
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
