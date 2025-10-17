import { ReactNode, CSSProperties } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

// Section Containers with exact spacing
export function Section({ 
  children, 
  className = '', 
  style,
  spacing = 'large',
  background = 'white'
}: LayoutProps & { 
  spacing?: 'large' | 'medium' | 'small' | 'none';
  background?: 'white' | 'light' | 'brand-primary' | 'brand-secondary' | string;
}) {
  const paddingClass = {
    'large': 'py-section-large',
    'medium': 'py-section-medium',
    'small': 'py-section-small',
    'none': ''
  }[spacing];

  const bgClass = {
    'white': 'bg-white',
    'light': 'bg-background',
    'brand-primary': 'bg-brand-primary',
    'brand-secondary': 'bg-brand-secondary',
    'brand-primary-gradient': 'bg-brand-primary-gradient',
  }[background] || '';

  return (
    <section className={`${paddingClass} ${bgClass} ${className}`} style={style}>
      {children}
    </section>
  );
}

// Container with max-width
export function Container({ 
  children, 
  className = '',
  maxWidth = 'default'
}: LayoutProps & {
  maxWidth?: 'default' | 'narrow' | 'medium' | 'wide';
}) {
  const widthClass = {
    'default': 'container-custom',
    'narrow': 'container-custom max-w-content-narrow',
    'medium': 'container-custom max-w-content-medium',
    'wide': 'container-custom max-w-content-wide',
  }[maxWidth];

  return (
    <div className={`${widthClass} ${className}`}>
      {children}
    </div>
  );
}

// Grid with predefined gaps
export function Grid({ 
  children, 
  className = '',
  columns = 3,
  gap = 'normal'
}: LayoutProps & {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'normal' | 'large';
}) {
  const gapClass = {
    'small': 'gap-grid-small',
    'normal': 'gap-grid',
    'large': 'gap-grid-large'
  }[gap];

  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}

// Stack for vertical spacing
export function Stack({ 
  children, 
  className = '',
  spacing = 'normal'
}: LayoutProps & {
  spacing?: 'small' | 'normal' | 'large';
}) {
  const spaceClass = {
    'small': 'space-y-element-gap-small',
    'normal': 'space-y-content-gap',
    'large': 'space-y-section-small'
  }[spacing];

  return (
    <div className={`${spaceClass} ${className}`}>
      {children}
    </div>
  );
}

// Flex utilities
export function FlexRow({ 
  children, 
  className = '',
  align = 'start',
  justify = 'start',
  gap = 'normal'
}: LayoutProps & {
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  gap?: 'small' | 'normal' | 'large';
}) {
  const alignClass = `items-${align}`;
  const justifyClass = `justify-${justify}`;
  const gapClass = {
    'small': 'gap-4',
    'normal': 'gap-8',
    'large': 'gap-12'
  }[gap];

  return (
    <div className={`flex ${alignClass} ${justifyClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}

// Content width limiters
export function ContentNarrow({ children, className = '' }: LayoutProps) {
  return <div className={`max-w-content-narrow ${className}`}>{children}</div>;
}

export function ContentMedium({ children, className = '' }: LayoutProps) {
  return <div className={`max-w-content-medium mx-auto ${className}`}>{children}</div>;
}

export function ContentWide({ children, className = '' }: LayoutProps) {
  return <div className={`max-w-content-wide mx-auto ${className}`}>{children}</div>;
}

