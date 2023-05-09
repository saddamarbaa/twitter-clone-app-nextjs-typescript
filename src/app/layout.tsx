import { getServerSession } from 'next-auth';

import '../styles/globals.css';
import Auth from '../components/Auth';
import Sidebar from '../components/Sidebar';
import Widget from '../components/Widget';
import Providers from './Providers';
import Messages from '../components/Messages';
import { ArticleT, NewsApiResponse } from '../types/news';
import { RandomUserT, RandomUserApiResponse } from '../types/randomUser';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Twitter Clone app',
  description: 'Twitter Clone build with + Typescript .',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  //  https:saurav.tech/NewsAPI/top-headlines/category/health/in.json
  const newsUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json';
  const randomUserUrl = 'https://randomuser.me/api/?results=30&inc=name,login,picture';
  const res = await fetch(newsUrl, { next: { revalidate: 10000 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data: NewsApiResponse = await res.json();
  const articles = data.articles || ([] as ArticleT[]);

  const randomUserResponse = await fetch(randomUserUrl, { next: { revalidate: 10000 } });
  const randomUserResult: RandomUserApiResponse = await randomUserResponse.json();
  const randomUsers = randomUserResult.results || ([] as RandomUserT[]);

  const session = await getServerSession(authOptions);

  console.log(' session', session);

  return (
    <html lang='en'>
      <body className='relative flex min-h-screen flex-col'>
        <Providers session={session}>
          <div className='mx-auto flex min-h-full w-full max-w-7xl flex-row pr-4 md:px-0 md:pr-0'>
            {/*  Sidebar */}
            <Sidebar />

            <div className='relative flex h-full min-h-screen w-full flex-1 flex-col border border-b-0 dark:border-twitterGray-999 md:w-1/2'>
              {/* <Feeds /> */}

              {children}
            </div>

            {/* <Widget /> */}
            <Widget initialNewsResult={articles} randomUsers={randomUsers} />
          </div>
          <Auth />
          <Messages />
        </Providers>
      </body>
    </html>
  );
}
