'use client';

import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import useCookie from '../hooks/use-cookie';

interface LayoutContextValues {
  colorScheme?: ColorScheme;
  setColorScheme: () => void;
}

interface LayoutProviderProps extends PropsWithChildren {
  defaultColorScheme?: ColorScheme;
}

export enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
}

const DEFAULT_LAYOUT_CONTEXT: LayoutContextValues = {
  colorScheme: ColorScheme.LIGHT,
  setColorScheme: () => {},
};

export const LayoutContext = createContext<LayoutContextValues>(DEFAULT_LAYOUT_CONTEXT);

export const LayoutProvider = ({ children, defaultColorScheme }: LayoutProviderProps) => {
  const [_v, updateColorScheme, _r] = useCookie('colorScheme');
  const [layoutOptions, setLayoutOptions] = useState<LayoutContextValues>({
    ...DEFAULT_LAYOUT_CONTEXT,
    colorScheme: defaultColorScheme || DEFAULT_LAYOUT_CONTEXT.colorScheme,
  });

  const handleToggleColorScheme = useCallback(() => {
    setLayoutOptions(({ colorScheme, ...rest }) => {
      const nextColorScheme = colorScheme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT;
      updateColorScheme(nextColorScheme, {});
      return {
        colorScheme: nextColorScheme,
        ...rest,
      };
    });
  }, [updateColorScheme]);

  const context = useMemo<LayoutContextValues>(
    () => ({
      colorScheme: layoutOptions.colorScheme,
      setColorScheme: handleToggleColorScheme,
    }),
    [layoutOptions, handleToggleColorScheme],
  );

  return <LayoutContext.Provider value={context}>{children}</LayoutContext.Provider>;
};
