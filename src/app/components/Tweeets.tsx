import React from 'react';

import { mockedTweets } from '../utils/mockedData';
import Tweet from './Tweet';

export default function Tweeets() {
  return (
    <div className='mb-80 flex flex-col gap-4'>
      {mockedTweets?.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}
