import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  ArticleLabel,
  FeatureTitle,
} from '@/components/ui';
import { getAllInsights, getInsightById } from '@/data/insights';

const insights = getAllInsights();

export async function generateStaticParams() {
  return insights.map((insight) => ({
    id: insight.id.toString(),
  }));
}

export default async function InsightPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const insight = insights.find(i => i.id === parseInt(id));
  
  if (!insight) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="hero-container relative z-20">
          <div className="max-w-content-narrow">
            <ArticleLabel className="mb-text-gap">
              {insight.category}
            </ArticleLabel>
            <BrandHeading className="text-white mb-card-padding-small">
              {insight.title}
            </BrandHeading>
            <div className="flex items-center gap-4 text-white">
              <BodyTextSmall className="text-white">{insight.date}</BodyTextSmall>
              <span className="text-white">•</span>
              <BodyTextSmall className="text-white">{insight.readTime}</BodyTextSmall>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <Section spacing="large" background="white" className="-mt-px">
        <Container maxWidth="medium">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-text-secondary leading-loose"
              dangerouslySetInnerHTML={{ __html: insight.content }}
            />
          </div>
        </Container>
      </Section>

      {/* Related Insights */}
      <Section spacing="large" background="background">
        <Container>
          <SectionHeading className="mb-card-padding-small text-center">
            Related Insights
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights
              .filter(i => i.category === insight.category && i.id !== insight.id)
              .slice(0, 3)
              .map((relatedInsight) => (
                <Link 
                  key={relatedInsight.id} 
                  href={`/insights/${relatedInsight.id}`}
                  className="group bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 mb-card-padding-small overflow-hidden">
                    <Image
                      src={relatedInsight.image}
                      alt={relatedInsight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  <div className="p-6">
                    <ArticleLabel className="mb-text-gap">
                      {relatedInsight.category}
                    </ArticleLabel>
                    <CardTitle className="mb-text-gap group-hover:text-brand-accent transition-colors">
                      {relatedInsight.title}
                    </CardTitle>
                    <BodyTextSmall className="text-text-secondary">
                      {relatedInsight.excerpt}
                    </BodyTextSmall>
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
            sizes="100vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FeatureTitle className="mb-content-gap">
              Ready to discuss this insight?
            </FeatureTitle>
            <BodyText className="text-white leading-loose mb-content-gap max-w-2xl mx-auto">
              Connect with our experts to explore how these insights can be applied to your specific challenges and opportunities.
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
