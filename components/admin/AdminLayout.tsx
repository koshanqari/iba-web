'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthProvider';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'CRM', href: '/intellsys/crm', icon: '👥' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-brand-primary border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/intellsys/crm" className="flex items-center">
                <img 
                  src="https://cdn-sleepyhug-prod.b-cdn.net/media/intellsys-logo.webp"
                  alt="Intellsys" 
                  className="h-8"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-button font-semibold uppercase tracking-wide transition-colors ${
                    pathname === item.href
                      ? 'text-white border-b-2 border-white pb-1'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-body-small text-white/80 hover:text-white transition-colors"
              >
                ← Back to Website
              </Link>
              <button
                onClick={logout}
                className="text-body-small text-white/80 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-brand-primary border-b border-border">
        <div className="container-custom">
          <nav className="flex space-x-6 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-body-small font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-custom py-section-medium">
        {children}
      </main>
    </div>
  );
}
