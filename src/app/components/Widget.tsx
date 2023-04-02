'use client';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Widget() {
  return (
    <div className=' hidden h-screen w-1/4 min-w-[4rem] max-w-xs  flex-col overflow-y-auto px-4 md:inline md:w-full'>
      {/* Search */}
      <div className='sm:text-md flex w-full items-center space-x-3 rounded-full border border-gray-300 bg-gray-50 p-3 text-gray-900 transition  duration-150 hover:border-gray-400 dark:border-gray-700 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400  dark:hover:bg-gray-700 '>
        <AiOutlineSearch className='h-5 w-5 flex-shrink-0 text-gray-400' />
        <input className='bg-transparent outline-none' type='text' placeholder='Search Twitter' />
      </div>
    </div>
  );
}
