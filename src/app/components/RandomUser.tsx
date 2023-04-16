import React from 'react';
import Button from './Button';
import { RandomUserT } from '../types/randomUser';

type Props = {
  user: RandomUserT;
};

export default function RandomUser({ user }: Props) {
  return (
    <div
      key={user.phone}
      className='duration relative flex  w-full cursor-pointer  space-x-2 space-y-1  rounded  p-2 px-3 text-sm transition ease-in-out hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'
    >
      <img src={user.picture.thumbnail} alt={`${user.name}'s avatar`} className='h-9 w-9 rounded-full' />
      <div className='flex-1'>
        <h2 className='text-sm font-semibold dark:text-white'>{user.login.username}</h2>
        <div>
          <span className='text-gray-500'>@{user.login.username}</span>
          {/* {flowedMe && <span className='pl-3 text-gray-500'>Follows you</span>} */}
        </div>
      </div>
      <div>
        <Button color='white' buttonClassName='text-black' isLoading={false} size='small'>
          Follow
        </Button>
      </div>
    </div>
  );
}
