/* eslint-disable @next/next/no-img-element */
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import Button from './Button';
import { mockedTrending } from '../utils/mockedData';
import Trend from './Trend';

export default function Trending() {
  const [number, setNumber] = useState(2);

  return mockedTrending?.length ? (
    <div className='flex w-full flex-col rounded bg-gray-50 py-1  text-gray-900 shadow transition duration-150 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400 '>
      <div className='flex w-full flex-col space-y-2'>
        <p className='w-full cursor-pointer px-3 pt-1 text-base font-semibold md:text-lg '>Trends for you</p>
        <AnimatePresence>
          {mockedTrending.slice(0, number).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Trend key={item.id} title={item.title} hasTag={item.hasTag} tweets={item.tweets} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Button
        preStyled='cursor-pointer p-2 text-sm text-twitterBlue-500  hover:text-twitterBlue-700 w-fit disabled:cursor-not-allowed'
        onClick={() => {
          setNumber((prev) => (prev > mockedTrending.length ? 3 : prev + 3));
        }}
      >
        {`${number < mockedTrending.length ? 'See More' : 'Show less'} `}
      </Button>
    </div>
  ) : (
    <div></div>
  );
}
