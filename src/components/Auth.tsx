'use client'

import React from 'react'
import Link from 'next/link'
import Button from './Button'
import { useSession } from 'next-auth/react'

export default function Auth() {
	const { data: session } = useSession()

	if (session) {
		return null
	} else {
		return (
			<div className="fixed bottom-0 z-50 mt-10 flex w-full items-center justify-between bg-twitterBlue-500 p-4 text-base text-white dark:text-white">
				<div className="mx-auto flex w-full  max-w-7xl flex-1 flex-wrap md:flex-nowrap">
					<div className="relative hidden w-1/4 min-w-[4rem] max-w-ss  flex-col  space-y-3 p-4 md:inline md:w-full"></div>
					<div className="min-w-md min-w-ss hidden w-full  flex-grow px-4  md:inline md:w-1/2">
						<p className="text-2xl font-bold">Don’t miss what’s happening</p>
						<p>People on Twitter are the first to know.</p>
					</div>
					<div className="sm:min-w-sm  w-full  px-4 md:inline md:w-1/4">
						<div className="flex items-center space-x-5 p-4">
							<Link href="/sign-in" className="w-full">
								<Button
									preStyled="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex w-full items-center justify-center rounded-full shadow transition duration-100 hover:shadow-lg text-black p-2"
									type="button">
									Log in
								</Button>
							</Link>
							<Link href="/sign-up" className="w-full">
								<Button
									preStyled="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex w-full items-center justify-center rounded-full shadow transition duration-100 hover:shadow-lg text-black p-2"
									type="button">
									Sign up
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
