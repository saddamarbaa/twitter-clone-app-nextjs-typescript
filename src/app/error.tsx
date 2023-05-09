'use client';

import Button from '@/components/Button';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface Props {
  error: Error | null;
  rest: () => void;
}

export const metadata: Metadata = {
  title: 'Twitter Clone app | Page not found',
  description: 'Twitter Clone build with + Typescript.',
};

export default function ErrorPage({ error, rest }: Props) {
  useEffect(() => {
    return () => {};
  }, [error]);

  return (
    <div className='grid min-h-screen place-items-center px-6 py-24 sm:px-8 sm:py-32'>
      <div className='max-w-3xl text-center'>
        <h1 className='mb-4 text-5xl font-bold text-twitterBlue-500'> Oops!</h1>
        <p className='mb-6 text-2xl font-semibold'>{error?.message || 'Unknown error occurred.'}</p>
        <p className='mb-10 text-lg'>Please try again later or contact our support team if the problem persists.</p>
        <div className='flex w-full items-center justify-center space-x-6'>
          <Link href='/' className='w-40'>
            <Button buttonClassName={'text-white'}> Back to home</Button>
          </Link>
          <div className='w-40'>
            <Button
              buttonClassName={'text-black'}
              type='button'
              color='gray'
              onClick={() => {
                rest();
              }}
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
