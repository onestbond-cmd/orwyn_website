import type { Metadata } from 'next'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'optional',
  preload: false,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'optional',
  preload: false,
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
}

export const metadata: Metadata = {
  title: 'Orwyn — AI Emotional Companion | Reflect. Heal. Understand.',
  description: 'Orwyn is an AI companion that listens without judgment. A safe, quiet space for self-reflection, emotional clarity, and inner understanding. No advice. Just presence.',
  keywords: [
    'AI companion',
    'emotional support app',
    'self-reflection AI',
    'mental wellness',
    'AI chat therapy',
    'Orwyn app',
    'Onestbond'
  ],
  authors: [{ name: 'Onestbond Technologies Private Limited' }],
  creator: 'Onestbond Technologies Private Limited',
  metadataBase: new URL('https://orwyn.co'),
  openGraph: {
    title: 'Orwyn — AI Emotional Companion',
    description: 'A safe, quiet space to be heard and understand yourself better.',
    url: 'https://orwyn.co',
    siteName: 'Orwyn by Onestbond',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orwyn — AI Emotional Companion by Onestbond',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orwyn — AI Emotional Companion',
    description: 'A safe, quiet space to be heard and understand yourself better.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "x6ju7hbyq1");
            `
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Orwyn",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Android, iOS",
              "description": "An AI companion that listens without judgment. A safe, quiet space for self-reflection, emotional clarity, and inner understanding.",
              "url": "https://orwyn.co",
              "creator": {
                "@type": "Organization",
                "name": "Onestbond Technologies Private Limited",
                "url": "https://orwyn.co"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              }
            })
          }}
        />
        <CookieBanner />
      </body>
    </html>
  )
}
