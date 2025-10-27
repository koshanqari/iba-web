import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white pt-16">
      <div className="container-custom">
        {/* Brand */}
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-400 tracking-wider">
            experts-with-impact
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#strategy" className="text-sm text-gray-300 hover:text-white transition-colors">Strategy & Transformation</Link></li>
              <li><Link href="/services#operations" className="text-sm text-gray-300 hover:text-white transition-colors">Operations Excellence</Link></li>
              <li><Link href="/services#digital" className="text-sm text-gray-300 hover:text-white transition-colors">Digital & Technology</Link></li>
              <li><Link href="/services#financial" className="text-sm text-gray-300 hover:text-white transition-colors">Financial Advisory</Link></li>
              <li><Link href="/services#risk" className="text-sm text-gray-300 hover:text-white transition-colors">Risk Management</Link></li>
              <li><Link href="/services#people" className="text-sm text-gray-300 hover:text-white transition-colors">People & Change</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-sm text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="text-sm text-gray-300 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/insights" className="text-sm text-gray-300 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/about#people" className="text-sm text-gray-300 hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/about#partnership" className="text-sm text-gray-300 hover:text-white transition-colors">Partnership</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-sm text-gray-300 hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Copyright */}
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              © 2025 IBA Global, Inc., including its subsidiaries and affiliates, is a consulting firm 
              and is not a certified public accounting firm or a law firm. All Rights Reserved.
            </p>

            {/* Social */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400 mb-4">Stay Connected</p>
              <div className="flex gap-3 justify-center lg:justify-end">
                <Link 
                  href="https://www.linkedin.com/company/iba-consulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://twitter.com/ibaconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter/X"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.facebook.com/ibaconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.youtube.com/@ibaconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/ibaconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Legal */}

          </div>
        </div>

        {/* Partnership Section */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="w-full py-8 grid grid-flow-col gap-4 place-items-center place-content-between">
            {/* Powered by Intellsys */}
            <div className="w-[80px] sm:w-[250px]">
              <a href="https://www.intellsys.ai/" target="_blank" rel="noopener noreferrer">
                <img 
                  alt="Powered by Intellsys" 
                  className="w-full" 
                  src="https://iba-consulting-prod.b-cdn.net/gj-logos/Intellsys3.png"
                />
              </a>
            </div>

            {/* Build with Ottocloud */}
            <div className="w-[80px] sm:w-[250px]">
              <a href="https://www.growthjockey.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  alt="Build with Ottocloud" 
                  className="w-full" 
                  src="https://iba-consulting-prod.b-cdn.net/gj-logos/Ottocloud3.png"
                />
              </a>
            </div>

            {/* Ventured by GrowthJockey */}
            <div className="w-[80px] sm:w-[250px]">
              <a href="https://www.growthjockey.com/" target="_blank" rel="noopener noreferrer">
                <img 
                  alt="Ventured by GrowthJockey" 
                  className="w-full" 
                  src="https://iba-consulting-prod.b-cdn.net/gj-logos/GrowthJockey3.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

