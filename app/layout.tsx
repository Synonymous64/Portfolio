import type { Metadata, Viewport } from 'next';
import {
  Inter as FontSans,
  La_Belle_Aurore as FontHandwriting,
  Source_Serif_4 as SourceSerif,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import SVGGradientBg from '@/components/Hero/SVGGradientBg';
import Menu from '@/components/Hero/Menu/Menu';
import { Providers } from '@/components/Providers/Providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: 'Prajwal Urkude Portfolio & Blog',

  description:
    'Prajwal Urkude is a Full-Stack Developer and creative technologist with a strong foundation in web, game, and cloud development. With hands-on expertise in React, Next.js, Unreal Engine, and Google Cloud, He builds performant, user-focused applications and tools. Actively exploring AI, Web3, and machine learning, they combine design thinking with engineering to deliver innovative digital experiences and open-source projects.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Prajwal Urkude',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    images: '/images/png/preview.png',
    siteName: 'Prajwal Urkude',
    title: 'Prajwal Urkude Portfolio & Blog',
    description:
      'Prajwal Urkude is a Full-Stack Developer and creative technologist with a strong foundation in web, game, and cloud development. With hands-on expertise in React, Next.js, Unreal Engine, and Google Cloud, He builds performant, user-focused applications and tools. Actively exploring AI, Web3, and machine learning, they combine design thinking with engineering to deliver innovative digital experiences and open-source projects.',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/images/png/preview.png',
    title: 'Prajwal Urkude Portfolio & Blog',
    description:
      'Prajwal Urkude is a Full-Stack Developer and creative technologist with a strong foundation in web, game, and cloud development. With hands-on expertise in React, Next.js, Unreal Engine, and Google Cloud, He builds performant, user-focused applications and tools. Actively exploring AI, Web3, and machine learning, they combine design thinking with engineering to deliver innovative digital experiences and open-source projects.',
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHandwriting = FontHandwriting({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-handwriting',
});

const MonaLisa = localFont({
  src: '../public/fonts/monolisa/MonoLisa-Regular.ttf',
  variable: '--font-monalisa',
});

const sourceSerif = SourceSerif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHandwriting.variable} ${MonaLisa.variable} ${sourceSerif.variable}`}
    >
      <body
        className={cn(
          'min-h-screen bg-bg-default font-sans antialiased',
          fontSans.variable,
          fontHandwriting.variable,
          MonaLisa.variable,
        )}
      >
        <Providers>
          <div className="mx-auto max-w-[1440px] bg-transparent px-4 sm:px-6 lg:px-8">
            <SVGGradientBg />
            <Menu />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
