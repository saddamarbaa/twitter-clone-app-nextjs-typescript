import { Inter } from 'next/font/google';
import Tweets from './components/Tweeets';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='h-full w-full overflow-y-auto'>
      <h2>Feed</h2>
      <Tweets />
    </div>
  );
}
