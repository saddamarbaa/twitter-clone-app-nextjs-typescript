import { Inter } from 'next/font/google';
import TweetInput from './components/TweetInput';
import Tweets from './components/Tweets';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='sticky top-0  z-50  border-b border-gray-200  transition duration-300  ease-in-out dark:border-gray-700'>
        <p className='w-full cursor-pointer p-4 text-base font-semibold md:text-lg'>Home</p>
        <div className='flex items-center justify-around'>
          <p className='w-full cursor-pointer p-3 text-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white'>
            <span className='border-b-4 border-b-twitterBlue-500 p-3'>For you</span>
          </p>
          <p className='w-full cursor-pointer p-3 text-center transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800'>
            <span className='p-3 text-gray-500 transition duration-300 ease-in-out hover:border-b-4   hover:border-b-twitterBlue-500 hover:text-black dark:hover:text-white'>
              Following
            </span>
          </p>
        </div>
      </div>
      <TweetInput />
      <Tweets />
    </>
  );
}
