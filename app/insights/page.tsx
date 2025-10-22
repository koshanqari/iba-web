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

export default function InsightsPage() {
  const insights = [
    {
      id: 1,
      category: 'Healthcare',
      title: 'The Future of Value-Based Care',
      excerpt: 'How leading healthcare providers are transforming care delivery models to improve outcomes and reduce costs.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      category: 'Financial Services',
      title: 'Digital Banking Transformation',
      excerpt: 'Key strategies for traditional banks to compete effectively in the digital-first banking landscape.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
      readTime: '7 min read',
      date: 'Dec 12, 2024'
    },
    {
      id: 3,
      category: 'Energy & Utilities',
      title: 'Accelerating the Energy Transition',
      excerpt: 'How utilities are balancing grid reliability, affordability, and sustainability in the shift to clean energy.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
      readTime: '6 min read',
      date: 'Dec 10, 2024'
    },
    {
      id: 4,
      category: 'Manufacturing',
      title: 'Industry 4.0 Implementation Guide',
      excerpt: 'A comprehensive roadmap for manufacturers looking to adopt smart manufacturing technologies.',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      readTime: '8 min read',
      date: 'Dec 8, 2024'
    },
    {
      id: 5,
      category: 'Technology',
      title: 'AI Integration in Enterprise Systems',
      excerpt: 'Best practices for implementing artificial intelligence across enterprise technology stacks.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      readTime: '9 min read',
      date: 'Dec 5, 2024'
    },
    {
      id: 6,
      category: 'Retail',
      title: 'Omnichannel Customer Experience',
      excerpt: 'Building seamless customer journeys across physical and digital touchpoints.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      readTime: '6 min read',
      date: 'Dec 3, 2024'
    },
    {
      id: 7,
      category: 'Healthcare',
      title: 'Telemedicine Best Practices',
      excerpt: 'Optimizing virtual care delivery for improved patient satisfaction and clinical outcomes.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
      readTime: '5 min read',
      date: 'Nov 30, 2024'
    },
    {
      id: 8,
      category: 'Financial Services',
      title: 'RegTech Solutions for Compliance',
      excerpt: 'Leveraging regulatory technology to streamline compliance processes and reduce operational risk.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      readTime: '7 min read',
      date: 'Nov 28, 2024'
    },
    {
      id: 9,
      category: 'Energy & Utilities',
      title: 'Smart Grid Cybersecurity',
      excerpt: 'Protecting critical infrastructure from evolving cyber threats in the digital grid era.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      readTime: '6 min read',
      date: 'Nov 25, 2024'
    },
    {
      id: 10,
      category: 'Manufacturing',
      title: 'Supply Chain Resilience Strategies',
      excerpt: 'Building robust supply chains that can adapt to global disruptions and market volatility.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      readTime: '8 min read',
      date: 'Nov 22, 2024'
    },
    {
      id: 11,
      category: 'Technology',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A strategic approach to moving enterprise workloads to the cloud while minimizing risk.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      readTime: '9 min read',
      date: 'Nov 20, 2024'
    },
    {
      id: 12,
      category: 'Retail',
      title: 'Personalization at Scale',
      excerpt: 'Using data analytics and AI to deliver personalized experiences across all customer touchpoints.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      readTime: '6 min read',
      date: 'Nov 18, 2024'
    }
  ];

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
