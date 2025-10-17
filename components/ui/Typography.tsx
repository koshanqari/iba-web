import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// Hero Section Typography
export function HeroTitle({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-hero font-light text-white leading-tight ${className}`}>
      {children}
    </h1>
  );
}

export function HeroSuper({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-tiny text-white font-normal uppercase tracking-widest ${className}`}>
      {children}
    </p>
  );
}

export function HeroDescription({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-large text-white font-light leading-loose max-w-content-narrow ${className}`}>
      {children}
    </p>
  );
}

// Feature Block Typography
export function FeatureTitle({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-feature-heading font-light text-white leading-snug ${className}`}>
      {children}
    </h2>
  );
}

export function FeatureSuper({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-tiny text-white font-normal uppercase tracking-widest ${className}`}>
      {children}
    </p>
  );
}

export function FeatureDescription({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-large text-white font-light leading-loose ${className}`}>
      {children}
    </p>
  );
}

// Section Headings
export function SectionHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-section-heading font-normal text-text-primary ${className}`}>
      {children}
    </h2>
  );
}

export function BrandHeading({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-brand-heading font-bold text-text-primary ${className}`}>
      {children}
    </h2>
  );
}

// Impact Numbers (very large, light weight)
export function ImpactNumber({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-impact-number font-light leading-tight ${className}`}>
      {children}
    </p>
  );
}

export function SectionSubheading({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body text-text-secondary ${className}`}>
      {children}
    </p>
  );
}

// Card Typography
export function CardLabel({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-label font-bold uppercase tracking-wide text-brand-primary-text ${className}`}>
      {children}
    </p>
  );
}

export function CardTitle({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-card-title font-semibold text-text-primary leading-normal ${className}`}>
      {children}
    </h3>
  );
}

export function CardText({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-small text-text-secondary leading-loose ${className}`}>
      {children}
    </p>
  );
}

// Article Typography
export function ArticleLabel({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-label font-bold uppercase tracking-wide text-brand-accent-text ${className}`}>
      {children}
    </p>
  );
}

export function ArticleTitle({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-article-title font-semibold text-text-primary leading-normal ${className}`}>
      {children}
    </h3>
  );
}

// Success Story Typography
export function SuccessLabel({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-label-tiny font-bold uppercase tracking-wide text-brand-accent-text ${className}`}>
      {children}
    </p>
  );
}

export function SuccessTitle({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-success-title font-semibold text-text-primary leading-normal ${className}`}>
      {children}
    </h3>
  );
}

// News Typography
export function NewsLabel({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-label-tiny font-bold uppercase tracking-wide text-text-muted ${className}`}>
      {children}
    </p>
  );
}

export function NewsTitle({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-news-title font-semibold text-text-primary leading-normal ${className}`}>
      {children}
    </h3>
  );
}

export function NewsDate({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-tiny text-text-muted ${className}`}>
      {children}
    </p>
  );
}

// Body Text
export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body text-text-secondary leading-loose ${className}`}>
      {children}
    </p>
  );
}

export function BodyTextSmall({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-body-small text-text-secondary leading-loose ${className}`}>
      {children}
    </p>
  );
}

