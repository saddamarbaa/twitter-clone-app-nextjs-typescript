'use client';

import React from 'react';
import { FaTwitter, FaHome, FaCog, FaUserPlus } from 'react-icons/fa';
import { MdNotificationsActive } from 'react-icons/md';
import { HiDotsCircleHorizontal, HiOutlineBookmark } from 'react-icons/hi';
import { IoBookmarkSharp } from 'react-icons/io5';
import { BiHash } from 'react-icons/bi';
import { TiBook } from 'react-icons/ti';

import DarkModSwitch from './DarkModSwitch';
import SideBarOption from './SideBarOption';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
export default function Sidebar() {
  const handleClick = () => {
    console.log('Been clicked');
  };

  return (
    <div className='relative flex  h-screen w-1/4  min-w-[4rem]  max-w-ss flex-col space-y-3 overflow-y-auto  p-4 md:w-full '>
      <div className='flex flex-1 flex-col space-y-4'>
        <Link href={'/'}>
          <SideBarOption Icon={FaTwitter} handleClick={handleClick} isLogo />
        </Link>
        <SideBarOption Icon={FaHome} title='Home' handleClick={handleClick} />
        <SideBarOption Icon={BiHash} title='Explore' handleClick={handleClick} />
        <SideBarOption Icon={MdNotificationsActive} title='Notifications' handleClick={handleClick} notification={20} />
        <SideBarOption Icon={FaHome} title='Messages' handleClick={handleClick} />
        <SideBarOption Icon={IoBookmarkSharp} title='Bookmarks' handleClick={handleClick} />
        <SideBarOption Icon={TiBook} title='Twitter Blue' handleClick={handleClick} />
        <SideBarOption Icon={FaUserPlus} title='Profile' handleClick={handleClick} />
        <DarkModSwitch />
        <SideBarOption Icon={FaCog} title='Settings' handleClick={handleClick} />
        <SideBarOption Icon={HiDotsCircleHorizontal} title='More' handleClick={handleClick} />
        <div className='mt-8 hidden md:inline'>
          <Button size='large' buttonClassName='text-white'>
            Tweet
          </Button>
        </div>
      </div>

      <div className='flex items-center space-x-5'>
        <Image
          src={'/images/saddam.jpg'}
          alt='profile image'
          width={50}
          height={50}
          className='transform cursor-pointer rounded-full transition duration-200  '
        />
        <div className='cursor-pointer'>
          <p>Web Dev</p>
          <p className='text-sm'>@Saddamarbaa</p>
        </div>
      </div>
    </div>
  );
}
