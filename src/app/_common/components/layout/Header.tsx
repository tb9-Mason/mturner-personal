'use client';

import { Switch } from '@headlessui/react';
import { useContext, useEffect, useState } from 'react';
import { ColorScheme, LayoutContext } from '../../providers/LayoutProvider';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { colorScheme, setColorScheme } = useContext(LayoutContext);

  useEffect(() => {
    // Close the nav menu when the pathname changes
    setIsOpen(false);
  }, [pathname]);

  const handleMobileToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="max-w-4xl mx-auto w-full py-4 px-6">
      <button className="block sm:hidden size-6" onClick={handleMobileToggle} aria-label="Toggle Mobile Menu">
        <Bars3Icon />
      </button>
      <ul
        className={`absolute z-10 shadow-2xl dark:shadow-dark bg-[var(--color-background)] border-b gap-4 p-4 top-0 left-0 right-0 flex-col items-center sm:flex sm:flex-row sm:justify-around sm:p-0 sm:static sm:border-0 sm:shadow-none sm:dark:shadow-none ${isOpen ? 'flex' : 'hidden'}`}
      >
        <li className={`sm:hidden absolute top-4 left-6 size-6 ${isOpen ? 'block' : 'hidden'}`}>
          <button className="size-6" onClick={handleMobileToggle} aria-label="Toggle Mobile Menu">
            <XMarkIcon />
          </button>
        </li>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="projects">projects</Link>
        </li>
        <li>
          <Link href="contact">contact</Link>
        </li>
        <li>
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
                <span
                  id="toggle-descriptor"
                  // Accessibility tools will show this as being low contrast due to the parent `bg-gray-200` even though it is hidden
                  // Give it the theme background and foreground colors to prevent false positives
                  className="sr-only bg-[var(--color-background)] text-[var(--color-foreground)]"
                  aria-hidden="true"
                >
                  dark mode toggle
                </span>
              </span>
            </Switch>
            light
          </div>
        </li>
      </ul>
    </header>
  );
};
