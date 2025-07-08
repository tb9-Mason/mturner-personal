'use client';
import { useContext } from 'react';

import { Geist_Mono, Gaegu, Montserrat } from 'next/font/google';

import { LayoutContext, LayoutProvider } from './_common/providers/LayoutProvider';
import { Footer, Header } from './_common/components';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const gaegu = Gaegu({
  variable: '--font-gaegu',
  weight: ['300', '700'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['300', '400', '700'],
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
        className={`${geistMono.variable} ${gaegu.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <LayoutProvider>{children}</LayoutProvider>
        <Footer />
      </body>
    </html>
  );
}
