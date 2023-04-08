import React from 'react';
import { IoIosMore } from 'react-icons/io';

type Props = {
  title: string;
  hasTag: string;
  tweets: string;
};

export default function Trend({ tweets, hasTag, title }: Props) {
  return (
    <div className='duration relative flex w-full cursor-pointer flex-col  space-y-1 rounded p-2 px-3  text-sm transition ease-in-out hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'>
      <div className='flex items-center justify-between'>
        <span className='text-gray-400'>{title}</span>
        <IoIosMore className='dark:text-white' />
      </div>
      <p className='font-semibold dark:text-white'>{hasTag}</p>
      <span className='text-gray-400'>{tweets}Tweets</span>
    </div>
  );
}
