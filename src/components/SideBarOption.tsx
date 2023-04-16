'use client';

import { IconType } from 'react-icons';

type Props = {
  title?: string;
  Icon: IconType;
  handleClick?: () => void;
  isLogo?: boolean;
  notification?: number;
};

export default function SideBarOption({ notification, title, handleClick, Icon, isLogo = false }: Props) {
  const handleClickOption = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <div
      className={`duration relative flex cursor-pointer items-center space-x-3 rounded p-3 transition ease-in-out  ${
        !isLogo && 'hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
      onClick={handleClickOption}
    >
      <div className='relative'>
        <Icon className='cursor-pointer text-xl md:text-2xl' role='button' />
        {notification ? (
          <span
            className={`absolute -top-5 right-0 flex h-5 w-5 items-center  justify-center rounded-full ${
              notification && title === 'Messages' ? 'bg-red-500' : 'bg-twitterBlue-500'
            } text-center text-sm text-white`}
          >
            {notification}
          </span>
        ) : null}

        {title === 'Home' ? (
          <span
            className={`absolute -top-2 right-0 flex h-2 w-2 items-center  justify-center rounded-full bg-twitterBlue-500`}
          >
            {notification}
          </span>
        ) : null}
      </div>
      <span className='hidden md:inline'>{title}</span>
    </div>
  );
}
