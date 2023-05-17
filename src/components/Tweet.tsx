import React, { useEffect, useState } from 'react'
import { FaHeart, FaComment, FaRetweet, FaEye, FaShare } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Moment from 'moment'
import { db } from '@/config/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { TweetT } from '../types/tweets'
import Button from './Button'
import Comments from './Comments'

type Props = {
	tweet: TweetT
}

const itemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
}
export default function Tweet({ tweet }: Props) {
	const { user, content, id, timestamp, title, images, likes } = tweet
	const { data: session } = useSession()
	const [commentText, setCommentText] = useState('')
	const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
	const [userAlreadyLiked, setUserAlreadyLiked] = useState<boolean>(false)

	useEffect(() => {
		if (session?.user?.email) {
			const userEmail = session.user.email
			const userAlreadyLiked = likes?.some((like) => like.email === userEmail)
			setUserAlreadyLiked(userAlreadyLiked as boolean)
		}
	}, [likes, session])

	const handleLike = async (tweet: TweetT) => {
		try {
			const tweetId = tweet.id as string
			const docRef = doc(db, 'tweets', tweetId)
			const docSnap = await getDoc(docRef)

			if (!docSnap.exists()) {
				console.log('Tweet document does not exist')
				toast.error('Tweet document does not exist')
				return
			}

			const existingData = docSnap.data()
			const likes = existingData.likes || []
			const userEmail = session?.user?.email

			const userAlreadyLiked = likes.some(
				(like: { email: string | null | undefined }) =>
					like.email === userEmail,
			)

			if (userAlreadyLiked) {
				// User has already liked the tweet, so unlike it
				const updatedLikes = likes.filter(
					(like: { email: string | null | undefined }) =>
						like.email !== userEmail,
				)
				const formDataCopy = {
					...existingData,
					likes: updatedLikes,
				}
				await updateDoc(docRef, formDataCopy)

				toast.dismiss()
				toast.success('Unliked the tweet!')
			} else if (!userAlreadyLiked) {
				// User has not liked the tweet, so like it
				const updatedLikes = [...likes, { email: userEmail }]
				const formDataCopy = {
					...existingData,
					likes: updatedLikes,
				}
				await updateDoc(docRef, formDataCopy)

				toast.dismiss()
				toast.success('Liked the tweet!')
			} else {
				// User has already liked the tweet or an unexpected condition occurred
				toast.error('You have already liked this tweet.')
			}
		} catch (error) {
			console.log('Error updating tweet likes:', error)

			toast.dismiss()
			toast.error('Failed to update the tweet. Please try again.')
		}
	}

	const handleCommentSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault()

		if (commentText.trim() === '') {
			return
		}

		try {
			const tweetId = tweet.id as string
			const docRef = doc(db, 'tweets', tweetId)
			const docSnap = await getDoc(docRef)

			if (!docSnap.exists()) {
				console.log('Tweet document does not exist')
				toast.error('Tweet document does not exist')
				return
			}

			const existingData = docSnap.data()
			const comments = existingData?.comments || []

			const commentData = {
				text: commentText.trim(),
				user: session?.user,
				timestamp: {
					seconds: Math.floor(Date.now() / 1000), // Get the current timestamp in seconds
					nanoseconds: 0,
				},
			}

			const updatedComments = [commentData, ...comments]
			const formDataCopy = {
				...existingData,
				comments: updatedComments,
			}

			await updateDoc(docRef, formDataCopy)

			setCommentText('')
			setCommentBoxVisible(false)

			toast.dismiss()
			toast.success('Comment submitted successfully!')
		} catch (error) {
			console.log('Error submitting comment:', error)

			toast.dismiss()
			toast.error('Failed to submit comment. Please try again.')
		}
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
			className="cursor-pointer overflow-hidden border-b border-gray-200  transition duration-300 ease-in-out hover:bg-gray-200
     dark:cursor-pointer dark:border-gray-700 dark:hover:bg-gray-800">
			<div className="w-full p-4">
				<div className="flex items-start space-x-4">
					<motion.img
						variants={itemVariants}
						initial="hidden"
						animate="visible"
						src={user.image}
						alt={`${user.name}'s avatar`}
						className="h-12 w-12 cursor-pointer rounded-full"
					/>
					<div className="flex flex-1 flex-col space-y-3">
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
													? 'h-full max-h-[500px] w-full'
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
								<FaHeart
									className={`h-4 w-4  cursor-pointer ${
										userAlreadyLiked
											? 'text-red-500 group-hover:text-red-500'
											: ''
									} `}
									onClick={() => {
										if (tweet.id && session) {
											handleLike(tweet)
										}
									}}
								/>
								<span className=" group-hover:text-red-500">
									{tweet?.likes && tweet?.likes?.length > 0
										? tweet?.likes.length
										: ''}
								</span>
							</div>
							<div
								className="group flex items-center space-x-2"
								onClick={(e) =>
									session && setCommentBoxVisible(!commentBoxVisible)
								}>
								<FaComment className="h-4 w-4 cursor-pointer group-hover:text-red-500" />
								<span>{tweet?.comments?.length || ''}</span>
							</div>
							<div className="flex items-center space-x-2">
								<FaRetweet className="h-4 w-4" />
								<span>87</span>
							</div>
							<div className="group flex items-center space-x-2">
								<FaEye className="h-4 w-4 cursor-pointer" />
								<span>77</span>
							</div>
							<div className="group flex items-center space-x-2">
								<FaShare className="h-4 w-4 cursor-pointer" />
								<span>234</span>
							</div>
						</div>

						{commentBoxVisible ? (
							<form
								style={{ marginTop: '1.3rem' }}
								className="flex w-full cursor-pointer space-x-3  transition duration-300 ease-in-out dark:border-gray-700"
								onSubmit={handleCommentSubmit}>
								<input
									value={commentText}
									onChange={(e) => setCommentText(e.target.value)}
									type="text"
									className="w-full  cursor-pointer rounded-full border border-gray-300  bg-gray-50 px-6 text-gray-900 outline-none transition duration-150  hover:border-gray-400  dark:cursor-pointer dark:border-gray-700 dark:bg-[#202327] dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-700"
									placeholder="Write a comment..."
								/>

								<div className="w-fit min-w-[100px]">
									<Button
										buttonClassName="text-white p-8"
										isDisabled={!commentText}>
										Post
									</Button>
								</div>
							</form>
						) : null}
					</div>
				</div>
			</div>

			{tweet?.comments && tweet?.comments?.length > 0 ? (
				<Comments comments={tweet?.comments} />
			) : null}
		</motion.div>
	)
}
