import { CommentT } from '@/types/tweets'
import React from 'react'
import Comment from './Comment'

type Props = {
	comments: CommentT[]
}

export default function Comments({ comments }: Props) {
	return (
		<div className="my-2 mt-5 max-h-52 space-y-5 overflow-y-scroll border-t border-gray-100 p-5 px-8 dark:border-gray-800">
			{comments.map((comment, index) => (
				<Comment
					comment={comment}
					key={comment.timestamp?.nanoseconds}
					hideBorder={index === comments?.length - 1}
				/>
			))}
		</div>
	)
}
