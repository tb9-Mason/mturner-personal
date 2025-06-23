'use client';
import { useContext } from 'react';

import { Geist, Geist_Mono, Playpen_Sans } from 'next/font/google';

import { LayoutContext, LayoutProvider } from './_common/providers/LayoutProvider';
import { Footer, Header } from './_common/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playpenSans = Playpen_Sans({
  variable: '--font-playpen-sans',
  subsets: ['latin'],
});

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colorScheme } = useContext(LayoutContext);
  return (
    <html lang="en" className={colorScheme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playpenSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <LayoutProvider>{children}</LayoutProvider>
        <Footer />
      </body>
    </html>
  );
}
