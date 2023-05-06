'use client'

import React from 'react'
import { MdKeyboardDoubleArrowUp, MdOutlineAttachEmail } from 'react-icons/md'
import {  useSession } from 'next-auth/react'

export default function Messages() {
  const { data: session } = useSession()
	return null
	return session?(
		<div
			className="fixed bottom-4 right-0 z-40 hidden w-full md:flex"
			style={{ bottom: '-0.3rem' }}>
			<div className="relative mx-auto flex  w-full max-w-10xl flex-row justify-end">
				<div
					className="flex  w-full max-w-sm cursor-pointer items-center rounded-md border border-gray-400 bg-gray-50 p-3 py-4  text-gray-900 shadow-xl transition duration-150 hover:border-gray-500 dark:border  dark:bg-black dark:text-white
               dark:placeholder-gray-400 dark:hover:bg-[#202327]">
					<input
						className="dark:placeholder-font-bold flex-1 bg-transparent outline-none  dark:placeholder-white"
						type="text"
						placeholder="Messages"
					/>
					<MdOutlineAttachEmail className="cursor-pointer text-xl text-gray-400 dark:text-white" />
					<MdKeyboardDoubleArrowUp className="ml-2 cursor-pointer text-3xl text-gray-400 dark:text-white" />
				</div>
			</div>
		</div>
	):null
}
