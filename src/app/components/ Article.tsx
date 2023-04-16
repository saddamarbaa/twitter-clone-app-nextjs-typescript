'use client';

import Link from 'next/link';
import { ArticleT } from '../types/news';

type Props = {
  article: ArticleT;
};

export default function Article({ article }: Props) {
  return (
    <Link
      href={article.url}
      key={article.url}
      className='flex  justify-between space-x-1 px-4 py-2 text-sm transition  duration-500  ease-out hover:bg-gray-200 dark:hover:bg-gray-700'
    >
      <div className='space-y-0.5'>
        <h6 className='line-clamp-3 text-sm font-bold dark:text-gray-300'>{article.title}</h6>
        <p className='text-xs font-medium text-gray-400'>{article.source.name}</p>
      </div>
      <img className='h-14 w-24 rounded-xl' width='70' src={article.urlToImage} alt='' />
    </Link>
  );
}
