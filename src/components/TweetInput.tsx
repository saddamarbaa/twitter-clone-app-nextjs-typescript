'use client'

import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { MdOutlineLocalSee } from 'react-icons/md'
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai'
import { BsEmojiNeutral } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { RiMapPinLine } from 'react-icons/ri'
import { BiPoll } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import Image from 'next/image'

export default function TweetInput() {
	const { data: session } = useSession()

	return session ? (
		<div>
			<div className="sticky top-0  z-50  border-b border-gray-200  transition duration-300  ease-in-out dark:border-gray-700">
				<p className="w-full cursor-pointer p-4 text-base font-semibold md:text-lg">
					Home
				</p>
				<div className="flex items-center justify-around">
					<p className="w-full cursor-pointer p-3 text-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">
						<span className="border-b-4 border-b-twitterBlue-500 p-3">
							For you
						</span>
					</p>
					<p className="w-full cursor-pointer p-3 text-center transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800">
						<span className="p-3 text-gray-500 transition duration-300 ease-in-out hover:border-b-4   hover:border-b-twitterBlue-500 hover:text-black dark:hover:text-white">
							Following
						</span>
					</p>
				</div>
			</div>
			<div className="w-full border-b border-gray-200 p-4 pb-0 transition duration-300  ease-in-out  dark:border-gray-700">
				<div className="flex items-start space-x-4">
					<Image
						src={session?.user?.image || '/images/saddam.jpg'}
						alt="profile image"
						width={45}
						height={45}
						className="transform cursor-pointer rounded-full transition duration-200 hover:cursor-pointer dark:cursor-pointer"
					/>
					<div className="flex flex-1 flex-col space-y-2 p-2">
						<input
							type="text"
							className="w-full bg-transparent p-1 text-lg outline-none"
							placeholder="What's Happening?"
						/>
					</div>
				</div>

				<div className="flex items-end space-x-3 px-2">
					<div className="h-12 w-12 rounded-full"></div>
					<div className="flex flex-1 flex-col">
						<div className="flex w-full items-center justify-between space-x-3">
							<div className="flex items-center space-x-3 ">
								<MdOutlineLocalSee className="cursor-pointer text-xl text-twitterBlue-500" />
								<AiOutlineFileGif className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<BiPoll className="hidden cursor-pointer text-xl text-twitterBlue-500 md:flex" />
								<BsEmojiNeutral className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<AiOutlineSchedule className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<RiMapPinLine className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
							</div>
							<div className="mb-2 w-fit min-w-[100px]">
								<Button buttonClassName="text-white p-8" isDisabled>
									Tweet
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="sticky top-0  z-50  flex items-center  justify-between border-b  border-gray-200 transition duration-300 ease-in-out dark:border-gray-700">
			<p className="w-full cursor-pointer p-4 text-base font-semibold md:text-lg">
				Explore
			</p>

			<Link href="/sign-in">
				<AiFillSetting
					className="mr-4 cursor-pointer text-xl md:text-2xl"
					role="button"
				/>
			</Link>
		</div>
	)
}
