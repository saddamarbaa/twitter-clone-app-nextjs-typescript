'use client';

import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../components/Button';

function Signup() {
  const router = useRouter();

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
  const switchToLogin = () => {
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
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <div className='modalWrapper flex flex-col text-black'>
          <div className='header flex flex-row'>
            <button onClick={() => setIsOpen(false)}> X</button>
            <div className='image'>
              <Image src='/images/Twitter-logo.svg.png' alt='Twitter-Logo' width={30} height={24} />
            </div>
          </div>
          <div className='main-title'>
            <h3>Join Twitter today</h3>
          </div>
          <div className='mx-auto w-full max-w-[256px]'>
            <Button color='white' buttonClassName='text-black' onClick={handleClick} isLoading={false} Icon={FcGoogle}>
              Sign Up with Google
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
              Sign Up with Apple
            </Button>
          </div>

          <div className='break-line'>
            <div className='wrapper-break'>
              <div className='line-div'></div>
              <div className='break-text'>or</div>
              <div className='line-div'></div>
            </div>
          </div>

          <div className='mx-auto w-full max-w-[256px]'>
            <Button color='black' buttonClassName='text-white' onClick={handleClick} isLoading={false}>
              Create account
            </Button>
          </div>

          <div className='mb-30 mx-auto flex w-full max-w-[256px] items-center justify-center'>
            <div className='text-sm'>
              By signing up, you agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>,
              including <a href='#'>Cookie Use.</a>
            </div>
          </div>

          <div className='mx-auto'>
            <div>
              Have an account already?{' '}
              <Link href='/login' className='text-sm  text-blue-500  hover:underline'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Signup;
