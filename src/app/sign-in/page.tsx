'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/Button';
import Image from 'next/image';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function SignIn() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={switchToLogin}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4 dark:bg-[#657786] dark:bg-opacity-20'
      overlayClassName='fixed inset-0 z-50'
    >
      <div className='flex min-h-[530px] w-full max-w-lg flex-col  space-y-5 rounded-lg bg-white p-6 text-black shadow-lg dark:bg-twitterBlack dark:text-twitterWhite dark:shadow-2xl'>
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
            onClick={handleClick}
            isLoading={false}
            Icon={FaTwitter}
          >
            Sign In with Twitter
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={FcGoogle}
          >
            Sign In with Google
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={AiFillApple}
          >
            Sign In with Apple
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={FaGithub}
          >
            Sign In with Github
          </Button>

          <div className='break-line'>
            <div className='flex items-center justify-center'>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
              <div className='break-text font-bold'>or</div>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
            </div>
          </div>

          <div className='flex w-full  items-center justify-center'>
            <input
              className='focus:ring-twitterBlue dark:focus:ring-twitterBlue-light  w-full rounded-md border bg-transparent p-3 text-sm font-bold focus:outline-none focus:ring-2'
              id='username'
              type='text'
              placeholder='Phone, email or username'
            />
          </div>

          <Button color='black' buttonClassName='text-white font-bold' onClick={handleClick} isLoading={false}>
            Next
          </Button>

          <Button color='white' buttonClassName='text-black font-bold' onClick={handleClick} isLoading={false}>
            Forgot password?
          </Button>

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