import { ReactNode } from 'react';

interface AdminButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

// Admin Primary Button - follows design system but with better visibility
export function AdminButtonPrimary({ children, onClick, className = '', type = 'button' }: AdminButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-secondary border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent ${className}`}
    >
      {children}
    </button>
  );
}

// Admin Secondary Button - follows design system
export function AdminButtonSecondary({ children, onClick, className = '', type = 'button' }: AdminButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-secondary ${className}`}
    >
      {children}
    </button>
  );
}
