import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import RevealObserver from '@/components/RevealObserver';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const title = 'Nicolò Rancan — Full-stack developer';
const description =
  'Full-stack developer based in Chiampo, Italy. I design, write, and ship complete web applications. Open to work on websites and apps.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://nicolorancan.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://nicolorancan.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0e11',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
