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

export default function SignUp() {
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
        <div className='mx-auto flex  w-full max-w-[310px] flex-col space-y-5 '>
          <h3 className='text-center text-2xl font-bold'>Join Twitter today </h3>
          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={FaTwitter}
          >
            Sign Up with Twitter
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={FcGoogle}
          >
            Sign Up with Google
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={AiFillApple}
          >
            Sign Up with Apple
          </Button>

          <Button
            color='white'
            buttonClassName='text-black font-bold'
            onClick={handleClick}
            isLoading={false}
            Icon={FaGithub}
          >
            Sign Up with Github
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

          <div className='mt-2'>
            Have an account already?{' '}
            <Link href='/sign-in' className='text-sm text-twitterBlue-500  hover:text-twitterBlue-700 hover:underline'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
