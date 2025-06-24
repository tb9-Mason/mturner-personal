import { JSX, PropsWithChildren } from 'react';

export const PageLayout = ({ children, className, ...rest }: PropsWithChildren<JSX.IntrinsicElements['div']>) => {
  return (
    <div
      {...rest}
      className={`flex-1 p-6 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] mx-auto max-w-4xl ${className}`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">{children}</main>
    </div>
  );
};
