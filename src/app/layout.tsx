import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Narayana Seva Dal — Serving Humanity, One Meal at a Time',
    template: '%s | Narayana Seva Dal',
  },
  description:
    'Volunteer-driven charity in Guntur, AP. 40,000+ meals served since 2019. Join us in feeding the hungry and transforming communities through compassion.',
  keywords: [
    'Narayana Seva Dal',
    'charity',
    'nonprofit',
    'Guntur',
    'Andhra Pradesh',
    'food distribution',
    'volunteer',
    'meals',
    'community service',
    'humanitarian',
  ],
  metadataBase: new URL('https://narayanasevadal.org'),
  openGraph: {
    title: 'Narayana Seva Dal — Serving Humanity, One Meal at a Time',
    description:
      'Volunteer-driven charity in Guntur, AP. 40,000+ meals served since 2019.',
    url: 'https://narayanasevadal.org',
    siteName: 'Narayana Seva Dal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narayana Seva Dal — Serving Humanity, One Meal at a Time',
    description:
      'Volunteer-driven charity in Guntur, AP. 40,000+ meals served since 2019.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
