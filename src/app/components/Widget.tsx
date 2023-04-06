import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Trend from './Trend';
import { mockedSuggestUser, mockedTrending } from '../utils/mockedData';
import WhoToFollow from './WhoToFollow';

export default function Widget() {
  return (
    <div className='hidden min-h-screen w-1/4 min-w-[4rem]   max-w-sm flex-1 flex-col items-center lg:flex'>
      <div id='fixed-position' className='fixed  flex h-full w-full min-w-[4rem] max-w-ss flex-col '>
        <div className='relative flex flex-1 flex-col space-y-4 overflow-y-auto'>
          {/* Search */}
          <div className='flex w-full items-center space-x-3 rounded-full border border-gray-300 bg-gray-50 p-3 text-gray-900 transition  duration-150 hover:border-gray-400 dark:border-gray-700 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400  dark:hover:bg-gray-700'>
            <AiOutlineSearch className='h-5 w-5 flex-shrink-0 text-gray-400' />
            <input className='bg-transparent outline-none' type='text' placeholder='Search Twitter' />
          </div>

          {mockedTrending?.length ? (
            <div className='flex w-full flex-col  space-x-3  bg-gray-50 text-gray-900 shadow  transition duration-150 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400'>
              <div className='flex w-full flex-col space-y-2'>
                <p className='w-full cursor-pointer px-2 pt-1 text-base font-semibold md:text-lg'>Trends for you</p>
                {mockedTrending?.map((item) => (
                  <Trend key={item.id} title={item.title} hasTag={item.hasTag} tweets={item.tweets} />
                ))}
              </div>
              <p className='p-2 text-sm text-twitterBlue-500'>See More</p>
            </div>
          ) : null}

          {mockedSuggestUser?.length ? (
            <div className='flex w-full flex-col  space-x-3  bg-gray-50 text-gray-900 shadow  transition duration-150 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400'>
              <div className='flex w-full flex-col space-y-2'>
                <p className='w-full cursor-pointer px-2 pt-1 text-base font-semibold md:text-lg'>Who to follow</p>
                {mockedSuggestUser?.map((item) => (
                  <WhoToFollow
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    username={item.username}
                    flowedMe={item.flowedMe}
                  />
                ))}
              </div>
              <p className='p-2 text-sm text-twitterBlue-500'>See More</p>
            </div>
          ) : null}

          <p className='p-4 text-xs text-gray-400'>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads info More © 2023 Twitter, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
