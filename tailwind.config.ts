import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'Noto Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // DESIGN TOKENS - Semantic color system
      colors: {
        // Brand colors - backgrounds
        'brand-primary': '#173098',   // Mid between dark (#0f2068) and light (#1e3fc7)
        'brand-secondary': '#051c2c', // Updated secondary brand color
        'brand-accent': '#d32f2f',    // Red - accent color
        // Brand primary variants
        'brand-primary-dark': '#0f2068',
        'brand-primary-light': '#1e3fc7',
        
        // Brand colors - text
        'brand-primary-text': '#1976d2', // Blue - links, CTAs, labels
        'brand-accent-text': '#d32f2f',  // Red - success labels, accents
        
        // Text colors (gray scale)
        'text-primary': '#212121',   // Headings, main text
        'text-secondary': '#616161', // Body text, descriptions
        'text-muted': '#757575',     // Labels, meta info, placeholders
        
        // UI colors - backgrounds
        'border': '#e0e0e0',         // Borders, dividers
        'background': '#f5f5f5',     // Light grey backgrounds
        'background-tertiary': '#e3f2fd', // Light blue backgrounds
      },
      
      fontSize: {
        // Exact typography scale from design
        'hero': '64px',
        'feature-heading': '48px',
        'section-heading': '36px',
        'brand-heading': '32px',
        'impact-number': '96px',
        'brand-subtitle': '20px',
        'card-title': '20px',
        'article-title': '20px',
        'success-title': '18px',
        'news-title': '16px',
        'body': '16px',
        'body-large': '18px',
        'body-small': '15px',
        'body-tiny': '14px',
        'label': '12px',
        'label-tiny': '11px',
        'button': '13px',
      },
      
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.3',
        'relaxed': '1.4',
        'loose': '1.6',
      },
      
      letterSpacing: {
        'tight': '-0.5px',
        'normal': '0.5px',
        'wide': '1px',
        'wider': '1.5px',
        'widest': '2px',
      },
      
      spacing: {
        // Section & component spacing
        'section-large': '80px',
        'section-medium': '60px',
        'section-small': '48px',
        'content-gap': '32px',
        'card-padding': '28px',
        'card-padding-small': '24px',
        'element-gap': '20px',
        'element-gap-small': '16px',
        'text-gap': '12px',
      },
      
      gap: {
        'grid': '24px',
        'grid-large': '32px',
        'grid-small': '20px',
      },
      
      maxWidth: {
        'container': '1440px',
        'content-narrow': '700px',
        'content-medium': '900px',
        'content-wide': '950px',
      },

      // Background images (gradients)
      backgroundImage: {
        // Sequence: light → light → dark → dark → light with smoother transitions
        'brand-primary-gradient': 'linear-gradient(90deg, #1e3fc7 0%, #1e3fc7 18%, #173098 35%, #0f2068 100%, #0f2068 85%, #173098 100%, #1e3fc7 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
