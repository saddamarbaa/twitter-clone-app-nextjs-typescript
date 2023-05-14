'use client'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Button from './Button'
import { MdOutlineLocalSee } from 'react-icons/md'
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai'
import { BsEmojiNeutral } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { RiMapPinLine } from 'react-icons/ri'
import { BiPoll } from 'react-icons/bi'
import { AiFillSetting } from 'react-icons/ai'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

import { db } from '@/config/firebase'
import { FaTrash } from 'react-icons/fa'

export default function TweetInput() {
	const { data: session } = useSession()

	const [tweet, setTweet] = useState('')
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [imageFiles, setImageFiles] = useState<File[]>([])
	const [imagePreviews, setImagePreviews] = useState<string[]>([])
	const [loading, setLoading] = useState(false)

	const removeImage = (index: number) => {
		const newFiles = [...imageFiles]
		const newPreviews = [...imagePreviews]
		newFiles.splice(index, 1)
		newPreviews.splice(index, 1)
		setImageFiles(newFiles)
		setImagePreviews(newPreviews)
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target
		if (files) {
			// @ts-ignore
			setImageFiles([...files])
			const fileArray = Array.from(files)
			const previewArray = fileArray.map((file) => URL.createObjectURL(file))
			setImagePreviews((prev) => [...prev, ...previewArray])
		}
	}

	async function storeImage(image: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const storage = getStorage()
			const filename = `${uuidv4()}`
			const storageRef = ref(storage, filename)
			const uploadTask = uploadBytesResumable(storageRef, image)

			// Register three observers:
			// 1. 'state_changed' observer, called any time the state changes
			// 2. Error observer, called on failure
			// 3. Completion observer, called on successful completion
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log(`Upload is ${progress}% done`)
					// hide the loading toast and show a success toast after the upload is complete
					toast.dismiss()
					toast.success(`Upload is ${Math.round(progress)}% done`)
					// eslint-disable-next-line default-case
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
					}
				},
				(error) => {
					// Handle unsuccessful uploads
					console.log('Upload failed')
					// hide the loading toast and show an error toast if the upload fails
					toast.dismiss()
					toast.error('Upload failed')
					reject(error)
				},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						resolve(downloadURL)
					})
				},
			)
		})
	}

	const resetForm = () => {
		setTweet('')
		setImageFiles([])
		setImagePreviews([])
		setLoading(false)
	}

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
	) => {
		e.preventDefault()

		if (tweet.trim() === '' && imageFiles.length === 0) {
			toast.error('Tweet cannot be empty')
			return
		}

		try {
			setLoading(true)

			let imgUrls: string[] = []

			if (imageFiles.length > 0) {
				imgUrls = await Promise.all(
					[...imageFiles].map((image) => storeImage(image)),
				).catch((error) => {
					toast.dismiss()
					toast.error('Images not uploaded')
					throw error
				})
			}

			const formData = {
				title: '',
				user: session?.user,
				content: tweet,
				timestamp: serverTimestamp(),
				userRef: session?.user?.email || session?.user?.name,
				images: imgUrls,
			}

			await addDoc(collection(db, 'tweets'), formData)
			toast.dismiss()
			toast.success('Tweet created successfully')
			resetForm() // Reset all form states
		} catch (error) {
			console.error('Error creating tweet:', error)
			toast.error('Error creating tweet')
			setLoading(false)
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTweet(e.target.value)
	}

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit(e)
		}
	}

	const handleIconHover = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

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

			<form
				onSubmit={handleSubmit}
				className="w-full border-b border-gray-200 p-8 pb-0 transition duration-300  ease-in-out  dark:border-gray-700">
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
							value={tweet}
							onChange={handleChange}
						/>
						<div className="flex flex-wrap">
							{imagePreviews.map((preview, index) => (
								<div key={preview} className="relative m-2">
									<Image
										src={preview}
										alt="uploaded preview"
										className="h-32 w-32 rounded-lg object-cover"
										width={200}
										height={200}
									/>
									<button
										type="button"
										className="absolute right-2 top-2 text-red-600 hover:text-red-500"
										onClick={() => removeImage(index)}>
										<FaTrash />
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex items-end space-x-3 px-2">
					<div className="h-12 w-12 rounded-full"></div>
					<div className="flex flex-1 flex-col">
						<div className="flex w-full items-center justify-between space-x-3">
							<div className="flex items-center space-x-3 ">
								<input
									disabled={imagePreviews && imagePreviews.length === 3}
									className="hidden"
									type="file"
									id="images"
									onChange={handleImageChange}
									multiple
									// required
									max="3"
									accept=".jpg,.png,.jpeg,.webp"
									ref={fileInputRef}
								/>
								<MdOutlineLocalSee
									className="cursor-pointer text-xl text-twitterBlue-500"
									onMouseOver={handleIconHover}
									onClick={handleIconHover}
								/>
								<AiOutlineFileGif className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<BiPoll className="hidden cursor-pointer text-xl text-twitterBlue-500 md:flex" />
								<BsEmojiNeutral className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<AiOutlineSchedule className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
								<RiMapPinLine className="hidden cursor-pointer text-xl text-twitterBlue-500 sm:flex" />
							</div>
							<div className="mb-2 w-fit min-w-[100px]">
								<Button
									buttonClassName="text-white p-8"
									isDisabled={
										(tweet.trim() === '' && imageFiles.length === 0) || loading
									}>
									Tweet
								</Button>
							</div>
						</div>
					</div>
				</div>
			</form>
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
