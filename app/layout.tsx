import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import { cn } from '@/lib/utils';
import Providers from '@/providers/Providers';

const geistMonoHeading = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-heading',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NextPro',
  description:
    'A Next.js 16 project with TypeScript, Tailwind CSS, and NextAuth.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        geistSans.variable,
        geistMono.variable,
        geistMonoHeading.variable
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>
          <main className='mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
