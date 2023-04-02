/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaHeart, FaComment, FaRetweet, FaEye, FaShare } from 'react-icons/fa';
import { TweetT } from '../types';

type Props = {
  tweet: TweetT;
};

export default function Tweet({ tweet }: Props) {
  const { user, content, media, timestamp, likes, comments, retweets, views, shares } = tweet;

  return (
    <div className='border-b border-gray-200 p-4 transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'>
      <div className='flex items-start space-x-4'>
        <img src={user.avatar} alt={`${user.username}'s avatar`} className='h-12 w-12 rounded-full' />
        <div className='flex flex-1 flex-col space-y-2'>
          <div className='flex items-center space-x-2'>
            <h2 className='font-bold'>{user.name}</h2>
            <span className='text-gray-500'>@{user.username}</span>
            <span className='text-gray-500'>·</span>
            <span className='text-gray-500'>{timestamp}</span>
          </div>
          <p className='mt-1 dark:text-gray-300'>{content}</p>
          {media && (
            <div className='flex items-center space-x-3'>
              {media.map((item, index) =>
                item.type === 'image' && index < 2 ? (
                  <img
                    key={index}
                    src={item.url}
                    alt={`Media ${index}`}
                    className='h-40 w-full rounded-md object-cover'
                  />
                ) : null,
              )}
            </div>
          )}

          {media && (
            <div className='flex items-center space-x-3'>
              {media.map((t, index) =>
                t.type === 'video' ? (
                  <iframe
                    key={t.type}
                    width='100%'
                    height='250'
                    src={t.url || 'https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                ) : null,
              )}
            </div>
          )}
          <div className='mt-2 flex items-center justify-between text-gray-500 dark:text-gray-300'>
            <div className='group flex items-center space-x-2'>
              <FaHeart className='h-4 w-4 text-red-500 group-hover:text-red-500' />
              <span className=' group-hover:text-red-500'>{likes.length}</span>
            </div>
            <div className='group flex items-center space-x-2'>
              <FaComment className='h-4 w-4 group-hover:text-red-500' />
              <span>{comments.length}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <FaRetweet className='h-4 w-4' />
              <span>{retweets.length}</span>
            </div>
            <div className='group flex items-center space-x-2'>
              <FaEye className='h-4 w-4' />
              <span>{views.length}</span>
            </div>
            <div className='group flex items-center space-x-2'>
              <FaShare className='h-4 w-4' />
              <span>{shares.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className='m-4 mb-4 rounded-md border border-gray-200'>
      <div className='mb-2 flex  space-x-3'>
        <img src={user.avatar} alt={`${user.username}'s avatar`} className='h-12 w-12 rounded-full' />
        <div>
          <p className='font-bold'>{tweet.user.name}</p>
          <p className='text-gray-600'>@{tweet.user.username}</p>
        </div>
        <p>
          <span className='text-gray-500'>{timestamp}</span>
        </p>
      </div>
      <p className='mb-4'>{tweet.content}</p>
      <div className='mb-4'>
        {tweet.media.map((item: { type: string; url: string | undefined }, index: React.Key | null | undefined) => (
          <div key={index} className='mb-2'>
            {item.type === 'image' ? (
              <img src={item.url} className='w-full rounded-lg' alt='' />
            ) : (
              <iframe
                width='100%'
                height='250'
                src='https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-between  p-2'>
        <div className='flex items-center'>
          <FaHeart className='mr-1 text-red-500' />
          <p>{tweet.likes.length}</p>
        </div>
        <div className='flex items-center'>
          <p className='mr-2'>{tweet.comments.length}</p>
          <p className='mr-2'>{tweet.retweets.length}</p>
          <p>{tweet.shares.length}</p>
        </div>
      </div>
    </div>
  );
}
