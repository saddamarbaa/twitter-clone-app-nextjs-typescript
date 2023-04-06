/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from './Button';

type Props = {
  avatar: string;
  name: string;
  username: string;
  flowedMe?: boolean;
};

export default function WhoToFollow({ flowedMe, username, avatar, name }: Props) {
  return (
    <div className='duration relative flex  w-full cursor-pointer  space-x-2 space-y-1  rounded p-2 text-sm  transition ease-in-out hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700'>
      <img src={avatar} alt={`${name}'s avatar`} className='h-9 w-9 rounded-full' />
      <div className='flex-1'>
        <h2 className='text-sm font-semibold dark:text-white'>{name}</h2>
        <div>
          <span className='text-gray-500'>@{username}</span>
          {flowedMe && <span className='pl-3 text-gray-500'>Follows you</span>}
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
