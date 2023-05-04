'use client'

import { motion, MotionProps } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type Props = MotionProps & {
	color?: string
	onClick?: () => void
	size?: 'small' | 'medium' | 'large'
	isLoading?: boolean
	isDisabled?: boolean
	children: ReactNode
	buttonClassName?: string
	type?: 'submit' | 'button' | 'reset'
	id?: string
	preStyled?: string
	Icon?: IconType
}

export default function Button({
	color = 'twitterBlue',
	onClick,
	size = 'medium',
	children,
	isLoading = false,
	isDisabled = false,
	buttonClassName = 'text-white uppercase',
	type = 'submit',
	id,
	preStyled,
	Icon,
	...rest
}: Props) {
	const sizes = {
		small: 'py-1 px-2 text-sm',
		medium: 'py-2 px-5 text-md',
		large: 'py-3 px-6 text-lg',
	}

	type Colors = {
		[key: string]: string
	}

	const colors: Colors = {
		blue: 'bg-blue-500 hover:bg-blue-700 active:bg-blue-800',
		red: 'bg-red-500 hover:bg-red-700 text-white',
		green: 'bg-green-500 hover:bg-green-700 active:bg-green-800',
		black: 'bg-black',
		slate: 'bg-slate-600 hover:bg-slate-700 active:bg-slate-800',
		white: 'bg-white  border border-gray-300',
		gray: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
		twitterBlue:
			'bg-twitterBlue-500 hover:bg-twitterBlue-700 active:bg-twitterBlue-800',
	}

	// add disabled and loading states to button
	const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : ''
	const loadingClass = isLoading ? 'animate-pulse' : ''

	return (
		<motion.button
			id={id}
			type={type}
			onClick={onClick}
			disabled={isDisabled}
			className={`${
				preStyled
					? preStyled
					: 'flex w-full items-center justify-center rounded-full shadow transition duration-100 hover:shadow-lg cursor-pointer'
			}   ${!preStyled && sizes[size]} ${
				!preStyled && colors[color]
			} ${disabledClass} ${loadingClass} ${!preStyled && buttonClassName}`}
			{...rest}>
			{Icon ? <Icon className="mr-4 text-2xl font-bold" /> : null}

			{isLoading ? (
				<div>
					<Image
						src="/images/svg/Spinner-1s-200px.svg"
						alt="Loading"
						width={30}
						height={30}
					/>
				</div>
			) : (
				children
			)}
		</motion.button>
	)
}
