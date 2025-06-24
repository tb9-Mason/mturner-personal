'use client';

import { Switch } from '@headlessui/react';
import { useContext } from 'react';
import { ColorScheme, LayoutContext } from '../../providers/LayoutProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export const Header = () => {
  const { colorScheme, setColorScheme } = useContext(LayoutContext);
  return (
    <header className="max-w-4xl mx-auto flex w-full items-center justify-around my-4">
      <Link href="/">home</Link>
      <Link href="projects">projects</Link>
      <Link href="contact">contact</Link>
      <div className="flex items-center gap-2">
        dark
        <Switch
          checked={colorScheme === ColorScheme.LIGHT}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-slate-900"
          onChange={setColorScheme}
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6">
            <MoonIcon className="text-slate-900 hidden dark:block" />
            <SunIcon className="text-slate-900 hidden not-dark:block" />
            <span className="sr-only">dark mode toggle</span>
          </span>
        </Switch>
        light
      </div>
    </header>
  );
};
