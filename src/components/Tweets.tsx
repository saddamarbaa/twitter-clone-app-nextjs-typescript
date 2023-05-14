'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Tweet from './Tweet'
import { db } from '@/config/firebase'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
	where,
} from 'firebase/firestore'
import { toast } from 'react-hot-toast'
import { TweetT } from '@/types/tweets'

const adminRef = process.env.NEXT_PUBLIC_ADMIN_REF

export default function Tweets({
	fetchUser,
	isAdminRef = true,
}: {
	fetchUser?: boolean
	isAdminRef?: boolean
}) {
	const [tweets, setTweets] = useState<TweetT[]>([])
	const [loading, setLoading] = useState(false)
	const { data: session, status } = useSession()
	const [adminTweets, setAdminTweets] = useState<TweetT[]>([])

	useEffect(() => {
		if (
			(!fetchUser && isAdminRef) ||
			(isAdminRef && fetchUser && session?.user?.email === adminRef)
		) {
			setLoading(true)
			const tweetsRef = collection(db, 'tweets')
			const unsubscribe = onSnapshot(
				query(
					tweetsRef,
					where('userRef', '==', adminRef),
					orderBy('timestamp', 'desc'),
				),
				(querySnapshot) => {
					const fetchedTweets = querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})) as TweetT[]
					setAdminTweets(fetchedTweets)
					setLoading(false)
					toast.dismiss()
					toast.success('Admin tweets fetched successfully!')
				},
				(error) => {
					console.error('Error fetching admin tweets:', error)
					setLoading(false)
					toast.dismiss()
					toast.error('Failed to fetch admin tweets.')
				},
			)
			return unsubscribe
		}
	}, [isAdminRef, fetchUser, session])

	useEffect(() => {
		const fetchUserTweets = async () => {
			try {
				setLoading(true)
				const userRef = session?.user?.email || session?.user?.name
				const tweetsRef = collection(db, 'tweets')
				const q = query(
					tweetsRef,
					where('userRef', '==', userRef),
					orderBy('timestamp', 'desc'),
				)
				const querySnap = await getDocs(q)
				const fetchedTweets = querySnap.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					}
				}) as TweetT[]
				setTweets(fetchedTweets)
				setLoading(false)
				toast.dismiss()
				toast.success('Tweets fetched successfully!')
			} catch (error) {
				console.error('Error fetching user tweets:', error)
				setLoading(false)
				toast.dismiss()
				toast.error('Failed to fetch user tweets.')
			}
		}
		if (fetchUser && session?.user?.email !== adminRef) {
			fetchUserTweets()
		} else if (!fetchUser) {
			setLoading(true)
			const unsubscribe = onSnapshot(
				query(
					collection(db, 'tweets'),
					where('userRef', '!=', adminRef),
					orderBy('userRef'),
					orderBy('timestamp', 'desc'),
					limit(2),
				),
				(querySnapshot) => {
					const fetchedTweets = querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})) as TweetT[]
					setTweets(fetchedTweets)
					setLoading(false)
					toast.dismiss()
					toast.success('Tweets fetched successfully!')
				},
				(error) => {
					console.error('Error fetching tweets:', error)
					setLoading(false)
					toast.dismiss()
					toast.error('Failed to fetch tweets.')
				},
			)
			return unsubscribe
		}
	}, [fetchUser, session?.user?.email, session?.user?.name])

	if (loading && !adminTweets?.length && !tweets?.length) {
		return (
			<div className="overflow-hidden border-b border-gray-200 p-4 transition duration-300 ease-in-out hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
				<p className="mt-1 p-2 text-center dark:text-gray-300">Loading...</p>
			</div>
		)
	}

	if (!loading && !adminTweets?.length && !tweets?.length) {
		return (
			<div className="overflow-hidden border-b border-gray-200 p-4 transition duration-300 ease-in-out hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
				<p className="mt-1 p-2 text-center dark:text-gray-300">
					No tweets found
				</p>
			</div>
		)
	}

	return (
		<div className="mb-80 flex flex-col gap-4">
			<AnimatePresence>
				{(tweets?.length > 0 || adminTweets?.length > 0) && (
					<>
						{tweets
							.filter(
								(tweet) => tweet?.userRef !== process.env.NEXT_PUBLIC_ADMIN_REF,
							)
							.map((tweet) => (
								<motion.div
									key={tweet.id}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -50 }}>
									<Tweet tweet={tweet} />
								</motion.div>
							))}
						{isAdminRef && adminTweets?.length > 0 && (
							<>
								{/* <h3 className="mb-2 text-lg font-semibold">Admin tweets</h3> */}
								{adminTweets.map((tweet) => (
									<motion.div
										key={tweet.id}
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -50 }}>
										<Tweet tweet={tweet} />
									</motion.div>
								))}
							</>
						)}
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
