import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white py-16">
      <div className="container-custom">
        {/* Brand */}
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-400 tracking-wider">
            experts-with-impact
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Our Experts</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About IBA</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Investor Relations</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Copyright */}
            <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">
              © 2025 IBA Consulting, Inc., including its subsidiaries and affiliates, is a consulting firm 
              and is not a certified public accounting firm or a law firm. All Rights Reserved.
            </p>

            {/* Social */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400 mb-3">Stay Connected</p>
              <div className="flex gap-4 justify-center lg:justify-end">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">in</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">𝕏</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">f</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">▶</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">📷</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex gap-4 text-xs">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Legal</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

