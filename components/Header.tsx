'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const pathname = usePathname();
  
  // Pages without hero sections should always show the sticky navbar
  const pagesWithoutHero = ['/contact'];
  const alwaysShowSticky = pagesWithoutHero.includes(pathname);

  useEffect(() => {
    if (alwaysShowSticky) {
      setShowSticky(true);
      return;
    }
    
    const handleScroll = () => {
      const threshold = window.innerHeight - 72; // reveal after hero height (~header height offset)
      setShowSticky(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysShowSticky]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Header - hidden over hero, appears after */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          backgroundColor: showSticky ? 'rgba(255,255,255,0.96)' : 'transparent',
          boxShadow: showSticky ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
          backdropFilter: showSticky ? 'saturate(180%) blur(8px)' as any : undefined,
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between" style={{ height: '72px' }}>
            <Link href="/" className="text-2xl font-bold" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '-0.5px' }}>
              IBA Consulting
            </Link>

            <button
              className="lg:hidden flex flex-col p-2 z-50 relative"
              style={{ gap: '6px' }}
              onClick={() => {
                console.log('Menu clicked, current state:', mobileMenuOpen);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <span className={`w-6 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ height: '2px', backgroundColor: showSticky ? '#212121' : '#fff' }} />
              <span className={`w-6 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ height: '2px', backgroundColor: showSticky ? '#212121' : '#fff' }} />
              <span className={`w-6 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ height: '2px', backgroundColor: showSticky ? '#212121' : '#fff' }} />
            </button>

            <nav className="hidden lg:flex items-center" style={{ gap: '32px' }}>
              <Link href="/" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                HOME
              </Link>
              <Link href="/services" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                SERVICES
              </Link>
              <Link href="/industries" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                INDUSTRIES
              </Link>
              <Link href="/insights" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                INSIGHTS
              </Link>
              <Link href="/about" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                ABOUT US
              </Link>
              <Link href="/contact" className="text-[13px] font-semibold transition-colors nav-link" style={{ color: showSticky ? '#212121' : '#fff', letterSpacing: '0.5px', padding: '8px 0' }}>
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu - moved outside header for better rendering */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 lg:hidden z-40" style={{ top: '72px' }}>
          <div className="h-full bg-white overflow-y-auto">
            <nav className="flex flex-col">
              {[
                { label: 'HOME', href: '/' },
                { label: 'SERVICES', href: '/services' },
                { label: 'INDUSTRIES', href: '/industries' },
                { label: 'INSIGHTS', href: '/insights' },
                { label: 'ABOUT US', href: '/about' },
                { label: 'CONTACT', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-semibold text-text-primary py-4 px-6 border-b border-border hover:bg-background hover:text-brand-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
