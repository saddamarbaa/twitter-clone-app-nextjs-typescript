'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import { Toaster as ToastProvider } from 'react-hot-toast';
type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='transition-color flex min-h-screen flex-col   bg-twitterWhite text-twitterBlack duration-300 dark:bg-twitterBlack dark:text-twitterWhite'>
        <ToastProvider position='top-right' />
        {children}
      </div>
    </ThemeProvider>
  );
}
