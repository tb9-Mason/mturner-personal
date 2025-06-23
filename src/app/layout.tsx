import type { Metadata } from 'next';

import './globals.css';
import { ColorScheme, LayoutProvider } from './_common/providers/LayoutProvider';
import { cookies } from 'next/headers';
import { RootLayout } from './rootlayout';

export const metadata: Metadata = {
  title: 'Mason Turner',
  description: 'A personal website for Mason Turner, Atlanta based software engineer.',
};

export default async function ProvidedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const getDefaultColorScheme = async () => {
    const cookieStore = await cookies();
    return cookieStore.get('colorScheme')?.value as unknown as ColorScheme;
  };

  const defaultColorScheme = await getDefaultColorScheme();
  return (
    <LayoutProvider defaultColorScheme={defaultColorScheme}>
      <RootLayout>{children}</RootLayout>
    </LayoutProvider>
  );
}
