import React from 'react'

import WhoToFollow from './WhoToFollow'
import News from './News'
import { ArticleT } from '../types/news'
import Trending from './Trending'
import { RandomUserT } from '../types/randomUser'
import Search from './Search'

type Props = {
	initialNewsResult: ArticleT[]
	randomUsers: RandomUserT[]
}

export default function Widget({ initialNewsResult, randomUsers }: Props) {
	return (
		<div className="hidden min-h-screen w-1/4 min-w-[4rem]  max-w-sm flex-1 flex-col items-center space-y-4 px-5 lg:flex">
			{/* Search */}
			<Search />

			{/* Whats happening Session */}
			<News initialResult={initialNewsResult} />

			<div className="sticky top-16 flex w-full flex-col space-y-4">
				{/* Who to follow session */}
				<WhoToFollow initialResult={randomUsers} />

				{/* Trending session */}
				<Trending />

				<p className="p-4 text-xs text-gray-400">
					Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
					More © 2023 Twitter, Inc.
				</p>
			</div>
		</div>
	)
}
