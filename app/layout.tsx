import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const SITE_URL = 'https://188-245-170-97.sslip.io/eclat-nails';
const OG_IMAGE = `${SITE_URL}/og.jpg`;

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sreynouv Rann — Éclat Nails · Manucure à Domicile',
  description:
    "Sreynouv Rann, manucure professionnelle à domicile. Nail art, semi-permanent, extensions gel — une expérience spa chez vous.",
  keywords: 'manucure domicile, nail art, semi-permanent, extensions gel, pédicure',
  alternates: { canonical: SITE_URL + '/' },
  openGraph: {
    title: 'Éclat Nails — Manucure à Domicile',
    description: 'Une expérience beauté unique, chez vous.',
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL + '/',
    siteName: 'Éclat Nails',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Éclat Nails — Manucure à domicile' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Éclat Nails — Manucure à Domicile',
    description: 'Une expérience beauté unique, chez vous.',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-ivory text-warm-dark antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
