'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Don't show on contact page
  if (pathname === '/contact') {
    return null;
  }

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-brand-accent text-white px-4 py-3 md:px-6 md:py-4 font-semibold uppercase tracking-wide text-xs md:text-sm hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="hidden md:inline">Get Started</span>
      <span className="md:hidden">Start</span>
      <span className="ml-2">→</span>
    </Link>
  );
}

