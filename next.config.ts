import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  
  // 1. Enables Brotli/Gzip compression — Vercel will serve compressed assets automatically
  compress: true,

  // 2. Power user mode off — cleaner console output in production
  reactStrictMode: true,

  // 3. Image optimisation pipeline — even though no images now, ready for screenshots/OG later
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 2592000, // 30 days
    dangerouslyAllowSVG: false,
  },

  // 4. Security headers — applied to every route
  async headers() {
    const isDev = process.env.NODE_ENV === 'development'

    const cspDirectives = [
      "default-src 'self'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://va.vercel-scripts.com"
        : "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      isDev
        ? "connect-src 'self' ws: wss: https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://api.web3forms.com https://www.clarity.ms https://x.clarity.ms https://orwyn.us3.list-manage.com"
        : "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://api.web3forms.com https://www.clarity.ms https://x.clarity.ms https://orwyn.us3.list-manage.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://api.web3forms.com",
    ]

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },

    ]
  },

  // 5. Experimental optimisations safe for Next.js 16 + Tailwind v4
  experimental: {
    optimizeCss: true,        // removes unused CSS — critical for Tailwind v4 large output
    optimizePackageImports: [
      'lucide-react',         // you use this — tree-shakes icon imports automatically
      'framer-motion',        // you use this heavily — reduces bundle size significantly
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tooltip',
    ],
  },

}

export default nextConfig
