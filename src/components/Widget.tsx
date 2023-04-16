import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import WhoToFollow from './WhoToFollow';
import News from './News';
import { ArticleT } from '../types/news';
import Trending from './Trending';
import { RandomUserT } from '../types/randomUser';

type Props = {
  initialNewsResult: ArticleT[];
  randomUsers: RandomUserT[];
};

export default function Widget({ initialNewsResult, randomUsers }: Props) {
  return (
    <div className='hidden min-h-screen w-1/4 min-w-[4rem]  max-w-sm flex-1 flex-col items-center space-y-4 px-5 lg:flex'>
      {/* Search */}
      <div className='sticky top-0 z-50 flex w-full items-center space-x-3 rounded-full border border-gray-300 bg-gray-50  p-3 text-gray-900 transition duration-150 hover:border-gray-400 dark:border-gray-700  dark:bg-[#202327]  dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-700'>
        <AiOutlineSearch className='h-5 w-5 flex-shrink-0 text-gray-400' />
        <input className='bg-transparent outline-none' type='text' placeholder='Search Twitter' />
      </div>

      {/* Whats happening Session */}
      <News initialResult={initialNewsResult} />

      <div className='sticky top-16 flex w-full flex-col space-y-4'>
          {/* Who to follow session */}
        <WhoToFollow initialResult={randomUsers} />
          
        {/* Trending session */}
        <Trending />

        <p className='p-4 text-xs text-gray-400'>
          Terms of Service Privacy Policy Cookie Policy Accessibility Ads info More © 2023 Twitter, Inc.
        </p>
      </div>
    </div>
  );
}
