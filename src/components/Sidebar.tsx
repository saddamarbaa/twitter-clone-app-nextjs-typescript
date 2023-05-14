'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { FaTwitter, FaHome, FaCog, FaUserPlus } from 'react-icons/fa'
import { MdNotificationsActive } from 'react-icons/md'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import { IoBookmarkSharp } from 'react-icons/io5'
import { BiHash } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'
import { TiBook } from 'react-icons/ti'
import { IoIosMore } from 'react-icons/io'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import DarkModSwitch from './DarkModSwitch'
import SideBarOption from './SideBarOption'
import Button from './Button'

export default function Sidebar() {
	const router = useRouter()
	const { data: session } = useSession()

	const handleSignOut = async () => {
		const data = await signOut({
			redirect: false,
			// callbackUrl: '/some'
		})
		// push(data.url)
		console.log(data.url)
	}

	const handleClick = (isLogOut?: boolean) => {
		if (!session) {
			console.log(session)
			router.push(`/sign-in`)
		} else if (session && isLogOut) {
			handleSignOut()
		}
	}

	return (
		<div className="min-h-full w-1/4 min-w-[4rem] max-w-ss md:w-full">
			<div
				id="fixed-position"
				className="fixed  flex h-full w-full min-w-[4rem] max-w-ss flex-col space-y-3 p-4">
				<div className="relative flex flex-1 flex-col space-y-4 overflow-y-auto">
					<Link href={'/'}>
						<SideBarOption Icon={FaTwitter} handleClick={handleClick} isLogo />
					</Link>
					<Link href={'/'}>
						<SideBarOption
							Icon={FaHome}
							title="Home"
							handleClick={handleClick}
						/>
					</Link>
					<SideBarOption
						Icon={BiHash}
						title="Explore"
						handleClick={handleClick}
					/>
					<SideBarOption
						Icon={MdNotificationsActive}
						title="Notifications"
						handleClick={handleClick}
						notification={8}
					/>
					<SideBarOption
						Icon={FaHome}
						title="Messages"
						handleClick={handleClick}
						notification={5}
					/>
					<SideBarOption
						Icon={IoBookmarkSharp}
						title="Bookmarks"
						handleClick={handleClick}
					/>
					<SideBarOption
						Icon={TiBook}
						title="Twitter Blue"
						handleClick={handleClick}
					/>
					{session ? (
						<SideBarOption
							Icon={FaUserPlus}
							title="Profile"
							handleClick={() => {
								const email = session?.user?.email || session?.user?.name
								const username =
									(email && email.substring(0, email.indexOf('@'))) ||
									session?.user?.name
								router.push(`/${username}`)
							}}
						/>
					) : null}
					<DarkModSwitch />
					<SideBarOption
						Icon={FaCog}
						title="Settings"
						handleClick={handleClick}
					/>
					{session ? (
						<SideBarOption
							Icon={MdLogout}
							title="Log out"
							handleClick={handleClick}
						/>
					) : null}
					<SideBarOption
						Icon={HiDotsCircleHorizontal}
						title="More"
						handleClick={handleClick}
					/>
					{session ? (
						<div className="mt-8 hidden md:inline">
							<Button size="large" buttonClassName="text-white">
								Tweet
							</Button>
						</div>
					) : null}
					<div className="h-16"></div>{' '}
					{/* Add a placeholder for the profile section */}
				</div>

				{session ? (
					<div
						className="duration dark:cursor-pinter  absolute bottom-0 left-0 z-50 flex  w-full  cursor-pointer items-center  space-x-3 rounded p-3 transition ease-in-out"
						onClick={handleSignOut}>
						<Image
							src={session?.user?.image || '/images/saddam.jpg'}
							alt="profile image"
							width={50}
							height={50}
							className="transform cursor-pointer rounded-full transition duration-200 hover:cursor-pointer dark:cursor-pointer"
						/>

						<div className="hidden w-full cursor-pointer  md:block">
							<div className="flex cursor-pointer items-center justify-between">
								<p className="line-clamp-1">{session?.user?.name}</p>
								<IoIosMore className="cursor-pointer dark:text-white" />
							</div>
							<p className="line-clamp-1 text-sm text-gray-400">
								@{session?.user?.name}
							</p>
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}
