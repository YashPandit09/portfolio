import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SITE, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  keywords: ['Yash Pandit', 'AI Developer', 'Full-Stack', 'Portfolio', 'Machine Learning', 'React', 'Next.js'],
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE.title,
    description: 'AI/ML student building end-to-end products. View projects, skills, and experience.',
    url: SITE_URL,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: SITE.title },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE_URL,
    jobTitle: 'AI & Full-Stack Developer',
    alumniOf: { '@type': 'Organization', name: 'Universal AI University' },
    sameAs: [SITE.github, SITE.linkedin],
  };

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="theme-color" content="#0D1117" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
