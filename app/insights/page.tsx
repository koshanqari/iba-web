'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  const allInsights = getAllInsights().map(({ id, category, title, excerpt, image, readTime, date }) => ({
    id, category, title, excerpt, image: image.replace('w=1200', 'w=800'), readTime, date
  }));

  // Get unique categories
  const categories = Array.from(new Set(allInsights.map(insight => insight.category))).sort();
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // Filter insights based on selected category
  const filteredInsights = selectedCategory === 'All' 
    ? allInsights 
    : allInsights.filter(insight => insight.category === selectedCategory);

  // Pagination logic
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredInsights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedInsights = filteredInsights.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2400&q=90"
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
      <Section spacing="medium"  background="white" className="-mt-px pb-8">
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

      {/* Filter Section */}
      <Section spacing="none" background="background">
        <Container>
          <div className="flex flex-col items-center">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-brand-accent text-white'
                    : 'bg-white text-text-primary border border-border hover:border-brand-accent hover:text-brand-accent'
                }`}
              >
                All Industries
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-brand-accent text-white'
                      : 'bg-white text-text-primary border border-border hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Insights Grid */}
      <Section spacing="large" background="background" className='pt-8'>
        <Container>
          {/* Pagination Controls - Top */}
          {totalPages > 1 && (
            <div className="flex justify-center md:justify-end mb-16">
              {/* Pagination Buttons */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-text-primary border border-border hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  Previous
                </button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-brand-accent text-white'
                          : 'bg-white text-text-primary border border-border hover:border-brand-accent hover:text-brand-accent'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-text-primary border border-border hover:border-brand-accent hover:text-brand-accent'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedInsights.map((insight) => (
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
          
          {/* No Results Message */}
          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <SectionHeading className="mb-4">
                No insights found
              </SectionHeading>
              <BodyText className="text-text-secondary mb-8">
                We don't have any insights for {selectedCategory} yet. Check back soon!
              </BodyText>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-3 bg-brand-accent text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                View All Insights
              </button>
            </div>
          )}
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
