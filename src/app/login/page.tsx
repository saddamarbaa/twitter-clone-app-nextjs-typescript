'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';
function login() {
  const [isOpen, setIsOpen] = useState(true);
  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '30px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const switchToSignup = () => {
    console.log('hello');
    setIsOpen(false);
  };

  const handleClick = () => {
    //  Validate user
    //  make api call

    // on success
    router.push('/');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <div className='flex h-[530px] w-[450px] flex-col text-black'>
          <div className='header flex flex-row'>
            <button onClick={() => setIsOpen(false)}> X</button>
            <div className='w-full text-center'>
              <Image
                className='mx-auto text-center '
                src='/Twitter-logo.svg.png'
                alt='Twitter-Logo'
                width={30}
                height={24}
              />
            </div>
          </div>
          <div className='mx-auto pt-6 pb-6 text-2xl font-bold'>
            <h3>Sign in to Twitter </h3>
          </div>
          <div className='mx-auto w-full max-w-[256px]'>
            <Button color='white' buttonClassName='text-black' onClick={handleClick} isLoading={false} Icon={FcGoogle}>
              Sign In with Google
            </Button>
          </div>

          <div className='mx-auto mt-5 w-full max-w-[256px]'>
            <Button
              color='white'
              buttonClassName='text-black'
              onClick={handleClick}
              isLoading={false}
              Icon={AiFillApple}
            >
              Sign In with Apple
            </Button>
          </div>
          <div className='break-line'>
            <div className='flex h-[60px]  items-center justify-center'>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
              <div className='break-text'>or</div>
              <div className='m-2  h-px w-32 bg-gray-300'></div>
            </div>
          </div>

          <div className='mb-6 flex items-center justify-center'>
            <input
              className='focus:shadow-outline w-80 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              id='username'
              type='text'
              placeholder='Phone, email or username'
            ></input>
          </div>

          <div className='mx-auto w-full max-w-[256px]'>
            <Button color='black' buttonClassName='text-white' onClick={handleClick} isLoading={false}>
              Next
            </Button>
          </div>
          {/* <div className='forgot-pwd-button'>
            <div className='fg-button'>
              <div className='text'>Forgot password?</div>
            </div>
          </div> */}
          <div className='mx-auto mt-5 w-full max-w-[256px]'>
            <Button color='white' buttonClassName='text-black' onClick={handleClick} isLoading={false}>
              Forgot password?
            </Button>
          </div>
          {/* <div className='login-wrapper'>
            <div className='login-text'>
              Dont have an account ? <Link href='/signup'>Sign up</Link>
            </div>
          </div> */}
          <div className='mx-auto pt-3'>
            <div>
              Dont have an account?{' '}
              <Link href='/signup' className='text-sm  text-blue-500  hover:underline'>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default login;
