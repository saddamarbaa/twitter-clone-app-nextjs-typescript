import React from 'react'
import { FaHeart, FaComment, FaRetweet, FaEye, FaShare } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { TweetT } from '../types/tweets'
import Moment from 'moment'
import { getRandomIntNumberBetween } from '@/utils/helpers'

type Props = {
	tweet: TweetT
}

export default function Tweet({ tweet }: Props) {
	const { user, content, id, timestamp, title, images } = tweet

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
	}

	const media = [
		{
			type: 'image',
			url: 'https://pbs.twimg.com/media/Fs9KGdLXwAIyR0c?format=png&name=900x900',
		},
	]

	// const images = media && media.filter((item) => item.type === 'image')
	const videos = media && media.filter((item) => item.type === 'video')

	return (
		<motion.div
			variants={itemVariants}
			initial="hidden"
			animate="visible"
			className="overflow-hidden border-b border-gray-200 p-4 transition duration-300 ease-in-out hover:bg-gray-200 dark:border-gray-700
     dark:hover:bg-gray-800">
			<div className="flex items-start space-x-4">
				<motion.img
					variants={itemVariants}
					initial="hidden"
					animate="visible"
					src={user.image}
					alt={`${user.name}'s avatar`}
					className="h-12 w-12 cursor-pointer rounded-full"
				/>
				<div className="flex flex-1 flex-col space-y-2">
					<div className="flex items-center space-x-2">
						<motion.h2
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							className="font-bold">
							{user.name}
						</motion.h2>
						<span className="text-gray-500">@{user.name}</span>
						<span className="text-gray-500">·</span>

						{timestamp?.seconds && (
							<span className="hidden text-gray-500 md:flex">
								{Moment.unix(timestamp?.seconds).fromNow()}
							</span>
						)}
					</div>
					<p className="mt-1 dark:text-gray-300">{content}</p>

					<div className="flex w-full flex-col space-y-7">
						{images && (
							<div
								className={`grid ${
									images.length > 1 ? 'grid-cols-2 gap-4' : 'grid-cols-1'
								}`}>
								{images.map((item, index) => (
									<motion.img
										key={index}
										variants={itemVariants}
										initial="hidden"
										animate="visible"
										src={item}
										alt={`Media ${index}`}
										className={`${
											images.length === 1
												? 'h-full w-full max-h-[500px]'
												: 'h-40 w-full'
										} transform cursor-pointer   rounded-md object-cover transition duration-300 ease-in-out hover:scale-105`}
									/>
								))}
							</div>
						)}

						{videos && (
							<div
								className={`hidden  sm:grid ${
									videos.length > 1 ? 'grid-cols-2 gap-4' : 'grid-cols-1'
								} `}>
								{videos.map((item, index) => (
									<div
										key={item.type}
										className="transform rounded-md   object-cover transition duration-300 ease-in-out hover:scale-105">
										<iframe
											width="100%"
											height="250"
											className="image w-full"
											src={
												item.url ||
												'https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1'
											}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen></iframe>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="mt-2 flex items-center justify-between text-gray-500 dark:text-gray-300">
						<div className="group flex items-center space-x-2">
							<FaHeart className="h-4 w-4 text-red-500 group-hover:text-red-500" />
							<span className=" group-hover:text-red-500">
								{getRandomIntNumberBetween(2, 33)}
							</span>
						</div>
						<div className="group flex items-center space-x-2">
							<FaComment className="h-4 w-4 group-hover:text-red-500" />
							<span>{getRandomIntNumberBetween(2, 33)}</span>
						</div>
						<div className="flex items-center space-x-2">
							<FaRetweet className="h-4 w-4" />
							<span>{getRandomIntNumberBetween(2, 33)}</span>
						</div>
						<div className="group flex items-center space-x-2">
							<FaEye className="h-4 w-4" />
							<span>{getRandomIntNumberBetween(2, 33)}</span>
						</div>
						<div className="group flex items-center space-x-2">
							<FaShare className="h-4 w-4" />
							<span>{getRandomIntNumberBetween(2, 33)}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
