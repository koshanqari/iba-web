import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

// Primary Button (white border on dark)
export function ButtonPrimary({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `btn-primary ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

// Secondary Button (dark border on light)
export function ButtonSecondary({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `btn-secondary ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

// Link with underline (white)
export function LinkUnderlineWhite({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `link-underline-white ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

// Link with underline (dark)
export function LinkUnderlineDark({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `link-underline-dark ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

// Link with underline (accent underline, white text)
export function LinkUnderlineAccent({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `link-underline-accent ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

// Link with underline (blue) - for "View All" style links
export function LinkUnderlineBlue({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `text-button font-semibold uppercase text-brand-primary-text border-b-2 border-brand-primary-text pb-1 hover:opacity-70 transition-opacity tracking-wide whitespace-nowrap ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}


// Link with underline (black text, accent underline)
export function LinkUnderlineBlackAccent({ children, href, onClick, className = '' }: ButtonProps) {
  const classes = `text-button font-semibold uppercase text-text-primary border-b-2 border-brand-accent pb-1 hover:opacity-70 transition-opacity tracking-wide whitespace-nowrap ${className}`;
  
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={classes}>{children}</button>;
}

