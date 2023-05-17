import { CommentT } from '@/types/tweets'
import React from 'react'
import { motion } from 'framer-motion'
import Moment from 'moment'

type Props = {
	comment: CommentT
	hideBorder: boolean
}

const itemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
}

export default function Comment({ comment, hideBorder }: Props) {
	return (
		<div
			key={comment.timestamp?.nanoseconds}
			className="relative flex space-x-2">
			{!hideBorder && (
				<hr className="border-twitter/30 absolute left-5 top-10 h-8 border-x dark:border-white/30" />
			)}

			<motion.img
				variants={itemVariants}
				initial="hidden"
				animate="visible"
				src={comment.user.image}
				alt={`${comment.user.name}'s avatar`}
				className="h-8 w-8 cursor-pointer rounded-full"
			/>
			<div>
				<div className="flex items-center space-x-1">
					<p className="mr-1 font-bold">{comment.user.name}</p>
					<p className="hidden text-sm text-gray-500 lg:inline">
						@{comment.user.name?.toLowerCase()}·
					</p>

					{comment.timestamp?.seconds && (
						<span className="hidden text-gray-500 md:flex">
							{Moment.unix(comment.timestamp.seconds).fromNow()}
						</span>
					)}
				</div>
				<p>{comment.text}</p>
			</div>
		</div>
	)
}
