import type { Metadata } from 'next';
import { Cormorant } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-corm',
});

export const metadata: Metadata = {
  title: 'Crossroads Communication Clinic',
  description: 'Crossroads Communication Clinic information and contact form',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} font-seriff`}>
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
