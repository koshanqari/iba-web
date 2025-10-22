import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

// Base Card with standard styling
export function Card({ children, className = '', onClick, hoverable = true }: CardProps) {
  const hoverClass = hoverable ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <article 
      className={`bg-white border border-border transition-all duration-300 ${hoverClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </article>
  );
}

// Card with Image
export function ImageCard({ 
  image, 
  imageAlt, 
  children, 
  className = '' 
}: { 
  image: string; 
  imageAlt: string; 
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={`overflow-hidden group ${className}`}>
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-card-padding">
        {children}
      </div>
    </Card>
  );
}

// Success Story Card (with border, padding)
export function SuccessCard({ children, className = '', onClick }: CardProps) {
  return (
    <Card 
      className={`p-content-gap ${className}`}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}

// News Card (smaller padding)
export function NewsCard({ children, className = '', onClick }: CardProps) {
  return (
    <Card 
      className={`p-card-padding-small ${className}`}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}

// Article Card (no border, just content)
export function ArticleCard({ 
  image, 
  imageAlt, 
  children, 
  className = '' 
}: { 
  image: string; 
  imageAlt: string; 
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`group cursor-pointer ${className}`}>
      <div className="relative h-60 overflow-hidden mb-element-gap-small">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      {children}
    </article>
  );
}

// Insight Card - image with overlay and white typography
export function InsightCard({ 
  image,
  imageAlt,
  label = 'Article',
  title,
  excerpt,
  href,
  className = ''
}: {
  image: string;
  imageAlt: string;
  label?: string;
  title: string;
  excerpt?: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <article className={`relative h-72 overflow-hidden group ${className}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-card-padding">
        <p className="text-label font-bold uppercase tracking-wide text-brand-accent-text mb-text-gap">{label}</p>
        <h3 className="text-article-title font-semibold text-white leading-normal mb-text-gap">{title}</h3>
        {excerpt ? (
          <p className="text-body-small text-white/80 leading-loose">{excerpt}</p>
        ) : null}
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

