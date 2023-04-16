'use client';

import React, { useState } from 'react';
import { ArticleT } from '../types/news';
import Article from './ Article';
import Button from './Button';

type Props = {
  initialResult: ArticleT[];
};

export default function News({ initialResult }: Props) {
  const [articlesNumber, setArticlesNumber] = useState(3);

  return initialResult?.length ? (
    <div className='flex w-full flex-col rounded bg-gray-50 py-1  text-gray-900 shadow transition duration-150 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400 '>
      <div className='flex w-full flex-col space-y-2'>
        <p className='w-full cursor-pointer px-3 pt-1 text-base font-semibold md:text-lg '>Whats happening</p>

        {initialResult.slice(0, articlesNumber).map((article) => (
          <Article key={article.url} article={article} />
        ))}
      </div>

      <Button
        preStyled='cursor-pointer p-2 text-sm text-twitterBlue-500  hover:text-twitterBlue-700 w-fit disabled:cursor-not-allowed'
        onClick={() => {
          setArticlesNumber((prev) => (articlesNumber > initialResult.length ? 3 : prev + 3));
        }}
      >
        {`${articlesNumber < initialResult.length ? 'See More' : 'Show less'} `}
      </Button>
    </div>
  ) : (
    <div></div>
  );
}
