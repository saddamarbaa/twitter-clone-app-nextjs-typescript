'use client';

import Button from '@/components/Button';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: 'Twitter Clone app | Page not found',
  description: 'Twitter Clone build with + Typescript.',
};

export default function PageNotFound() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className='grid min-h-screen place-items-center px-6 py-24 sm:px-8 sm:py-32'>
      <div className='max-w-3xl text-center'>
        <h1 className='mb-4 text-5xl font-bold text-twitterBlue-500'>404</h1>
        <p className='mb-6 text-2xl font-semibold'>Oops! Page not found</p>
        <p className='mb-10 text-lg'>
          We re sorry. The page you requested could not be found. Please go back to the homepage or contact us.
        </p>
        <div className='flex w-full items-center justify-center'>
          <Button size='large' buttonClassName='text-white sm:max-w-[250px]' onClick={handleClick}>
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
