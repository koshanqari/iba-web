'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if we're in the admin panel
  const isAdminRoute = pathname.startsWith('/intellsys');
  
  if (isAdminRoute) {
    // For admin routes, render only the children (AdminLayout will handle its own header)
    return <>{children}</>;
  }
  
  // For regular routes, render with Header and Footer
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
