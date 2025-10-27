'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Section,
  Container,
  Grid,
  SectionHeading,
  BrandHeading,
  ImpactNumber,
  CardTitle,
  CardText,
  BodyText,
  BodyTextSmall,
  ButtonPrimary,
  ImageCard,
} from '@/components/ui';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(4);
  
  // All carousel images
  const carouselImages = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", alt: "Team celebration" },
    { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80", alt: "Team collaboration" },
    { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", alt: "Team meeting" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80", alt: "Team event" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", alt: "Team working" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", alt: "Office environment" },
    { src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80", alt: "Team discussion" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", alt: "Team collaboration" },
  ];
  
  const totalSlides = Math.ceil(carouselImages.length / cardsPerSlide);

  // Handle responsive cards per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(4); // Desktop: 4 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(3); // Tablet: 3 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerSlide(2); // Small tablet: 2 cards
      } else {
        setCardsPerSlide(1); // Mobile: 1 card
      }
      // Reset to first slide when cards per slide changes
      setCurrentSlide(0);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the hero section
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Make nav sticky when scrolled past hero
      setIsNavSticky(scrollPosition > heroHeight);

      // Auto-highlight sections based on scroll position
      const sections = ['overview', 'framework', 'people', 'partnership'];
      const navHeight = 144; // 72px header + 72px section nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navHeight + 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll carousel with slide tracking
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 144; // 72px header + 72px section nav
      const top = element.offsetTop - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section with Navigation at Bottom */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
            alt="About IBA Global"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center hero-container-centered relative z-20 px-6 md:px-0">
          <div className="max-w-content-medium">
            <p className="text-body-tiny text-white font-normal uppercase tracking-widest mb-element-gap-small">
              About IBA Global
            </p>
            <h1 className="text-4xl md:text-hero font-light text-white leading-tight mb-card-padding-small">
              Guiding organizations through their most critical moments
            </h1>
            <p className="text-base md:text-body-large text-white font-light leading-loose mb-content-gap max-w-content-narrow">
              For over three decades, we've been the trusted partner for organizations facing crisis, transformation, 
              and unprecedented challenges—delivering clarity, speed, and confidence when it matters most.
            </p>
          </div>
        </div>

        {/* Navigation at bottom of hero - becomes sticky on scroll */}
        <nav
          className={`z-40 transition-all duration-300 ${
            isNavSticky ? 'fixed top-[72px] left-0 right-0' : 'relative'
          }`}
          style={{
            backgroundColor: isNavSticky ? 'rgba(255,255,255,0.96)' : 'rgba(0,0,0,0.3)',
            backdropFilter: isNavSticky ? 'saturate(180%) blur(8px)' : 'blur(8px)',
            borderTop: isNavSticky ? 'none' : '1px solid rgba(255,255,255,0.1)',
            boxShadow: isNavSticky ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
          }}
        >
          <div className="container-custom">
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-8" style={{ height: '72px' }}>
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'framework', label: 'Framework' },
                    { id: 'people', label: 'People' },
                    { id: 'partnership', label: 'Partnership' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-[10px] md:text-button font-semibold uppercase tracking-wide transition-all pb-1 relative whitespace-nowrap ${
                        activeSection === item.id
                          ? isNavSticky 
                            ? 'text-brand-accent' 
                            : 'text-white'
                          : isNavSticky
                            ? 'text-text-secondary hover:text-brand-accent'
                            : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span 
                          className="absolute left-0 right-0 bottom-0 h-0.5 bg-brand-accent"
                          style={{ bottom: '-4px' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
          </div>
        </nav>
      </section>

      {/* Overview Section */}
      <Section id="overview" spacing="large" background="white">
        <Container maxWidth="medium">
          <div className="text-center mb-section-medium">
            <SectionHeading className="mb-card-padding-small">Who We Are</SectionHeading>
            <p className="text-body-large text-text-secondary leading-loose max-w-content-narrow mx-auto">
              IBA Global is the leading global expert firm helping organizations navigate crisis and transformation 
              with clarity, speed, and confidence. We bring unparalleled expertise across industries, geographies, and 
              disciplines to solve the most complex challenges facing businesses today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-large text-center lg:divide-x lg:divide-border">
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">30+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">Years of Excellence</p>
              <p className="text-body-small text-text-secondary">
                Established in 1992, we've been delivering expert solutions for three decades
              </p>
            </div>
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">850+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">Expert Team</p>
              <p className="text-body-small text-text-secondary">
                Partners and consultants across four strategic locations worldwide
              </p>
            </div>
            <div className="px-6">
              <ImpactNumber className="text-brand-accent">900+</ImpactNumber>
              <p className="text-brand-subtitle text-text-primary mt-element-gap-small">Engagements</p>
              <p className="text-body-small text-text-secondary">
                Successfully completed since 2017 across diverse industries
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Framework Section - Mission & Vision + Our Values */}
      <Section id="framework" spacing="none" background="brand-secondary">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Mission & Vision Text */}
          <div className="bg-brand-secondary px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-32 flex flex-col justify-center">
            <h2 className="text-2xl md:text-section-heading font-normal text-white mb-6 md:mb-10">Mission & Vision</h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-body text-white/90 leading-loose">
                We combine the talent, technology and creative power of our agency to connect brands, institutions 
                and associations with their audiences in the digital age.
              </p>
              
              <p className="text-sm md:text-body text-white/90 leading-loose">
                We act as a bridge for transformation and growth, designing creative and strategic solutions 
                executed with operational excellence.
              </p>
            </div>
          </div>

          {/* Image - Full height, edge to edge */}
          <div className="relative min-h-[300px] md:min-h-[500px] lg:min-h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Spacer between Mission and Values */}
        <div className="h-12 md:h-20" style={{ height: '80px' }}></div>

        {/* Our Values */}
        <div className="container-custom pb-16 md:pb-32">
          <div className="text-center mb-12 md:mb-20" style={{ marginBottom: '80px' }}>
            <h3 className="text-2xl md:text-section-heading font-normal text-white">Our Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 - Excellence */}
            <div>
              <div className="relative h-64 overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Excellence"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-card-title font-semibold text-white mb-3">Excellence</h4>
              <p className="text-body-small text-white/80 leading-relaxed">
                We pursue the highest standards in everything we do, delivering solutions that exceed expectations.
              </p>
            </div>

            {/* Value 2 - Integrity */}
            <div>
              <div className="relative h-64 overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                  alt="Integrity"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-card-title font-semibold text-white mb-3">Integrity</h4>
              <p className="text-body-small text-white/80 leading-relaxed">
                We operate with transparency, honesty, and ethical rigor, earning the trust of our clients.
              </p>
            </div>

            {/* Value 3 - Impact */}
            <div>
              <div className="relative h-64 overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Impact"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-card-title font-semibold text-white mb-3">Impact</h4>
              <p className="text-body-small text-white/80 leading-relaxed">
                We focus on outcomes that matter, delivering measurable results that drive sustainable growth.
              </p>
            </div>

            {/* Value 4 - Innovation */}
            <div>
              <div className="relative h-64 overflow-hidden mb-5">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Innovation"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-card-title font-semibold text-white mb-3">Innovation</h4>
              <p className="text-body-small text-white/80 leading-relaxed">
                We continuously innovate to meet the evolving needs of our clients and the world.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer at bottom of section */}
        <div style={{ height: '80px' }}></div>
      </Section>

      {/* People Section */}
      <Section id="people" spacing="large" background="white">
        <Container>
          <div className="text-center mb-section-medium">
            <SectionHeading className="mb-card-padding-small">People</SectionHeading>
            <p className="text-body text-text-secondary max-w-content-medium mx-auto">
              Our strength lies in our people—a diverse team of experts committed to excellence and innovation.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-section-medium">
            <h3 className="text-card-title font-semibold text-text-primary mb-card-padding">Leadership Team</h3>
            <Grid columns={3} gap="large">
              <div className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden mb-element-gap-small">
                  <Image
                    src="https://iba-consulting-prod.b-cdn.net/team-members/varun2.jpg"
                    alt="Varun Kochhar"
                    fill
                    className="object-cover object-top transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-card-title font-semibold text-text-primary mb-text-gap">Varun Kochhar</h4>
                <p className="text-body-small text-brand-accent-text font-semibold mb-element-gap-small">
                  Founder & CEO
                </p>
                <p className="text-body-small text-text-secondary leading-loose">
                  Visionary leader with extensive experience driving organizational transformation and delivering exceptional results for clients across diverse industries.
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden mb-element-gap-small">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Leadership member"
                    fill
                    className="object-cover object-top transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-card-title font-semibold text-text-primary mb-text-gap">Priya Sharma</h4>
                <p className="text-body-small text-brand-accent-text font-semibold mb-element-gap-small">
                  Senior Partner
                </p>
                <p className="text-body-small text-text-secondary leading-loose">
                  Expert in crisis management and operational excellence with a focus on healthcare and pharma.
                </p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative h-80 overflow-hidden mb-element-gap-small">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
                    alt="Leadership member"
                    fill
                    className="object-cover object-top transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-card-title font-semibold text-text-primary mb-text-gap">Arjun Mehta</h4>
                <p className="text-body-small text-brand-accent-text font-semibold mb-element-gap-small">
                  Partner, Digital & Technology
                </p>
                <p className="text-body-small text-text-secondary leading-loose">
                  Leading digital transformation initiatives for clients in financial services and technology.
                </p>
              </div>
            </Grid>
          </div>

          {/* Life at IBA - Carousel */}
          <div className="mb-section-medium">
            <h3 className="text-card-title font-semibold text-text-primary mb-element-gap">Life at IBA</h3>
            <p className="text-body-small text-text-secondary leading-loose mb-8 max-w-content-medium">
              At IBA Global, we combine passion with purpose. Our culture is about building ventures, friendships, 
              and futures together. We thrive on curiosity, collaboration, and celebrating every win as one team.
            </p>
            
            {/* Carousel container */}
            <div className="relative -mx-6 md:mx-0">
              <div className="overflow-hidden">
                <div 
                  ref={carouselRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Dynamically generate slides */}
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                    const startIndex = slideIndex * cardsPerSlide;
                    const slideImages = carouselImages.slice(startIndex, startIndex + cardsPerSlide);
                    
                    return (
                      <div key={slideIndex} className="min-w-full flex gap-4 md:gap-6 flex-shrink-0 px-6 md:px-0">
                        {slideImages.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative flex-1 h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? 'w-12 bg-brand-accent'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Partnership Section */}
      <Section id="partnership" spacing="large" background="light">
        <Container>
          <div className="text-center mb-section-medium">
            <SectionHeading className="mb-card-padding-small">Partnership</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 md:divide-x md:divide-brand-accent">
            {/* Enduring Results */}
            <div className="md:pr-12">
              <div className="flex items-start gap-2 mb-4">
                <h3 className="text-card-title font-semibold text-text-primary">Enduring Results</h3>
                <span className="text-brand-accent text-xl font-bold">›</span>
              </div>
              <p className="text-body-small text-text-secondary leading-relaxed">
                We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.
              </p>
            </div>

            {/* Bain Alliance Ecosystem */}
            <div className="md:px-12">
              <div className="flex items-start gap-2 mb-4">
                <h3 className="text-card-title font-semibold text-text-primary">IBA Alliance Ecosystem</h3>
                <span className="text-brand-accent text-xl font-bold">›</span>
              </div>
              <p className="text-body-small text-text-secondary leading-relaxed">
                We develop partnerships with leading companies and organizations from around the globe to complement our expertise and deliver breakthrough results.
              </p>
            </div>

            {/* Global Affiliations */}
            <div className="md:pl-12">
              <div className="flex items-start gap-2 mb-4">
                <h3 className="text-card-title font-semibold text-text-primary">Global Affiliations</h3>
                <span className="text-brand-accent text-xl font-bold">›</span>
              </div>
              <p className="text-body-small text-text-secondary leading-relaxed">
                We have long-lasting partnerships and affiliations with like-minded organizations and leaders share our commitment to deliver lasting results.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative min-h-[400px] md:h-[500px] flex items-center overflow-hidden py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2400&q=90"
            alt="Join our team"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <Container className="relative z-20 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-feature-heading font-light text-white leading-snug mb-6 md:mb-content-gap">
              Ready to partner with us?
            </h2>
            <p className="text-base md:text-body-large text-white font-light leading-loose mb-8 md:mb-content-gap max-w-content-narrow mx-auto">
              Let's discuss how we can help you navigate your most critical challenges and unlock new opportunities.
            </p>
            <ButtonPrimary href="/contact">
              Get in Touch
            </ButtonPrimary>
          </div>
        </Container>
      </section>
    </>
  );
}

