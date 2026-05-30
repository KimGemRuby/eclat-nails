import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

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
  title: 'Sreynouv Rann — Éclat Nails · Manucure à Domicile',
  description:
    "Sreynouv Rann, manucure professionnelle à domicile. Nail art, semi-permanent, extensions gel — une expérience spa chez vous.",
  keywords: 'manucure domicile, nail art, semi-permanent, extensions gel, pédicure',
  openGraph: {
    title: 'Éclat Nails — Manucure à Domicile',
    description: 'Une expérience beauté unique, chez vous.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-ivory text-warm-dark antialiased">
        {children}
      </body>
    </html>
  );
}
