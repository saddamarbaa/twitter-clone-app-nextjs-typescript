import { Inter } from 'next/font/google';
import TweetInput from '../components/TweetInput';
import Tweets from '../components/Tweets';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <TweetInput />
      <Tweets />
    </>
  );
}
