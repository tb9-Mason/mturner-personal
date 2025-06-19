'use client';
import { useContext } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import { LayoutContext, LayoutProvider } from './common/providers/LayoutProvider';
import { Header } from './common/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
