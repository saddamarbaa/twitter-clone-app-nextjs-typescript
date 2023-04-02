'use client';

import React, { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export default function DarkModSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className='relative flex cursor-pointer items-center space-x-3 rounded p-3 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700'
          onClick={() => setTheme('light' as const)}
        >
          <BsFillMoonFill className='cursor-pointer text-xl' role='button' />
          <p className='hidden md:inline'>Light mode</p>
        </div>
      );
    }

    return (
      <div
        className='relative flex cursor-pointer items-center space-x-3 rounded p-3 transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700'
        onClick={() => setTheme('dark' as const)}
      >
        <MdLightMode className='cursor-pointer text-xl hover:text-amber-500 md:text-2xl' />
        <p className='hidden md:inline'>Dark mode </p>
      </div>
    );
  };
  return <div>{renderThemeChanger()}</div>;
}
