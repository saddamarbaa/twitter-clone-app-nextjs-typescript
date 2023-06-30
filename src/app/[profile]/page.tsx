'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';
import Tweets from '@/components/Tweets';
import Image from 'next/image';
import { IoArrowBackSharp } from 'react-icons/io5';
import Link from 'next/link';

const metadata: Metadata = {
  title: 'Twitter Profile',
  description: 'Profile page',
};

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const adminReference = process.env.NEXT_PUBLIC_ADMIN_REF;

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/sign-up');
    }
  }, [session, router, status]);

  if (status === 'loading') {
    return (
      <div className='mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center px-6 py-12'>
        <p className='mt-8 w-full max-w-lg rounded border bg-white p-6 text-center font-bold'>Initializing User...</p>
      </div>
    );
  }

  const profileImage = '/images/twitter-banner.jpeg';

  return (
    <>
      <div>
        <div className='sticky top-0 z-50'>
          <div className='relative h-56 w-full'>
            <Image
              src={profileImage}
              alt='Profile image'
              layout='fill'
              objectFit='cover'
              className='rounded-md object-cover transition duration-300'
            />
            <div className='absolute bottom-0 left-0 right-0 top-0 flex space-x-8 p-4 pt-1 text-base font-bold uppercase text-white md:space-x-12 md:text-lg'>
              <Link href='/'>
                <IoArrowBackSharp className='cursor-pointer text-xl md:text-2xl' />
              </Link>
              <p>{session?.user?.name}</p>
            </div>
          </div>
          <div className='-mt-20 ml-6 flex items-start'>
            <Image
              src={session?.user?.image || '/images/saddam.jpg'}
              alt='Profile image'
              width={120}
              height={120}
              className='transform cursor-pointer rounded-full transition duration-200 hover:cursor-pointer dark:cursor-pointer'
            />
          </div>
          <div className='hidden w-full cursor-pointer p-4 pt-2 md:block'>
            <p className='line-clamp-1 w-full cursor-pointer text-base font-semibold md:text-lg'>
              {session?.user?.name}
            </p>
            <p className='line-clamp-1 text-sm text-gray-400'>@{session?.user?.name}</p>
            <p className='mt-1 line-clamp-1'>Forever a learner ☀ always growing ☀ Opinions are my own</p>
          </div>
        </div>
      </div>
      <div className='mt-4 border-b border-gray-200 transition duration-300 ease-in-out dark:border-gray-700' />
      <Tweets fetchUser />
    </>
  );
}
