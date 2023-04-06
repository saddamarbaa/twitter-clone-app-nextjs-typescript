/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from './Button';
import { MdOutlineLocalSee } from 'react-icons/md';
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai';
import { BsEmojiNeutral } from 'react-icons/bs';
import { RiMapPinLine } from 'react-icons/ri';
import { BiPoll } from 'react-icons/bi';

export default function TweetInput() {
  return (
    <div className='border-b border-gray-200 p-4 pb-0 transition duration-300 ease-in-out  dark:border-gray-700 '>
      <div className='flex items-start space-x-4'>
        <img src='/images/saddam.jpg' className='h-12 w-12 rounded-full' />
        <div className='flex flex-1 flex-col space-y-2 p-2'>
          <input
            type='text'
            className='w-full bg-transparent p-1 text-lg outline-none'
            placeholder="What's Happening?"
          />
        </div>
      </div>

      <div className='flex items-end space-x-3 px-2'>
        <div className='h-12 w-12 rounded-full'></div>
        <div className='flex flex-1 flex-col'>
          <div className='flex w-full items-center justify-between space-x-3'>
            <div className='flex items-center space-x-3'>
              <MdOutlineLocalSee className='cursor-pointer text-xl text-twitterBlue-500' />
              <AiOutlineFileGif className='cursor-pointer text-xl text-twitterBlue-500' />
              <BiPoll className='hidden cursor-pointer text-xl text-twitterBlue-500 md:flex' />
              <BsEmojiNeutral className='hidden cursor-pointer text-xl text-twitterBlue-500 md:flex' />
              <AiOutlineSchedule className='cursor-pointer text-xl text-twitterBlue-500' />
              <RiMapPinLine className='cursor-pointer text-xl text-twitterBlue-500' />
            </div>
            <div className='mb-2 w-fit min-w-[100px]'>
              <Button buttonClassName='text-white p-8' isDisabled>
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
