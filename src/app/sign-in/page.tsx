'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { signIn, signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/Button';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function SignIn() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (session) {
      router.push('/');
    }
    if (status !== 'loading' && !session) {
      setIsOpen(true);
    }
  }, [session, router, status]);

  const switchToLogin = () => {
    // setIsOpen(false);
    router.push('/');
  };

  const handleClick = () => {
    //  Validate user
    //  make api call

    // on success
    router.push('/');
  };

  if (status === 'loading') {
    return (
      <div className='mx-auto flex w-full max-w-6xl flex-wrap items-center  justify-center px-6  py-12'>
        <p className='mt-8 w-full max-w-lg rounded  border bg-white p-6 text-center font-bold '>Initializing User...</p>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!email) return false;
    signIn('email', { email, redirect: false });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={switchToLogin}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4 dark:bg-[#657786] dark:bg-opacity-20'
      overlayClassName='fixed inset-0 z-50'
    >
      <div className='flex min-h-[500px] w-full max-w-lg flex-col  space-y-5 rounded-lg bg-white p-6 text-black shadow-lg dark:bg-twitterBlack dark:text-twitterWhite dark:shadow-2xl'>
        <div className='header flex flex-row'>
          <button className='text-xl  text-black dark:text-white' onClick={switchToLogin}>
            X
          </button>
          <div className='w-full text-center'>
            <Image
              className='mx-auto text-center'
              src='/images/Twitter-logo.svg.png'
              alt='Twitter-Logo'
              width={30}
              height={24}
            />
          </div>
        </div>
        <div className='mx-auto flex  w-full max-w-ss flex-col space-y-5 '>
          <h3 className='text-center text-2xl font-bold'>Sign in to Twitter </h3>
          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={() => signIn('twitter')}
            isLoading={false}
            Icon={FaTwitter}
          >
            Sign In with Twitter
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            isLoading={false}
            Icon={FcGoogle}
            onClick={() => signIn('google')}
          >
            Sign In with Google
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold hidden'
            onClick={() => signIn('google')}
            isLoading={false}
            Icon={AiFillApple}
          >
            Sign In with Apple
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={() => signIn('github')}
            isLoading={false}
            Icon={FaGithub}
          >
            Sign In with Github
          </Button>

          <div className='break-line hidden'>
            <div className='flex items-center justify-center'>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
              <div className='break-text font-bold'>or</div>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
            </div>
          </div>

          <div className='flex hidden  w-full items-center justify-center'>
            <input
              className='focus:ring-twitterBlue dark:focus:ring-twitterBlue-light  w-full rounded-md border bg-transparent p-3 text-sm font-bold focus:outline-none focus:ring-2'
              id='email'
              value={email}
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
          </div>

          <Button color='black' buttonClassName='text-white font-bold hidden' onClick={handleSubmit} isLoading={false}>
            Next
          </Button>

          <Button color='white' buttonClassName='text-black font-bold hidden' onClick={handleClick} isLoading={false}>
            Forgot password?
          </Button>

          <div className='text-[13px]'>
            <p>
              By signing up, you agree to the
              <span className='w-fit  cursor-pointer  px-1 text-twitterBlue-500 hover:underline'>Terms of Service</span>
            </p>
            <p>
              and
              <span className='w-fit  cursor-pointer  px-1 text-twitterBlue-500 hover:underline'>Privacy Policy</span>,
              including
              <span className='w-fit  cursor-pointer  px-1 text-twitterBlue-500 hover:underline'>Cookie Use.</span>
            </p>
          </div>

          <div className='mt-2 text-center'>
            Dont have an account?{' '}
            <Link href='/sign-up' className='text-sm text-twitterBlue-500  hover:text-twitterBlue-700 hover:underline'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
