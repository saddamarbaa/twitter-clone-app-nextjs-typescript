"use client"
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { mockedTweets } from '../utils/mockedData';
import Tweet from './Tweet';

export default function Tweets() {
  return (
    <div className='mb-80 flex flex-col gap-4'>
      <AnimatePresence>
        {mockedTweets.map((tweet) => (
          <motion.div
            key={tweet.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Tweet key={tweet.id} tweet={tweet} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
