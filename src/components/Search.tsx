'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Search() {
  const { data: session } = useSession()
 return session ? (
		<div className="sticky top-0 z-50 flex w-full items-center space-x-3 rounded-full border border-gray-300 bg-gray-50  p-3 text-gray-900 transition duration-150 hover:border-gray-400 dark:border-gray-700  dark:bg-[#202327]  dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-700">
				<AiOutlineSearch className="h-5 w-5 flex-shrink-0 text-gray-400" />
				<input
					className="bg-transparent outline-none"
					type="text"
					placeholder="Search Twitter"
				/>
			</div>
	) : (
		null
	)
}
