'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';
import { Toaster as ToastProvider } from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <motion.div
        initial='initial'
        animate='enter'
        exit='exit'
        variants={pageVariants}
        className='transition-color flex min-h-screen flex-col bg-twitterWhite text-twitterBlack duration-300 dark:bg-twitterBlack dark:text-twitterWhite'
      >
        <ToastProvider position='top-right' />
        {children}
      </motion.div>
    </ThemeProvider>
  );
}
