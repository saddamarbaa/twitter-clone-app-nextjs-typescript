export interface TweetTemp {
	id: number
	user: {
		username: string
		name: string
		avatar: string
	}
	title: string
	content: string
	media: {
		type: 'image' | 'video'
		url: string
	}[]
	timestamp: string
	likes: {
		user: {
			username: string
			name: string
			avatar: string
		}
		timestamp: string
	}[]
	comments: {
		user: {
			username: string
			name: string
			avatar: string
		}
		content: string
		timestamp: string
	}[]
	retweets: {
		user: {
			username: string
			name: string
			avatar: string
		}
		timestamp: string
	}[]
	views: {
		user: {
			username: string
			name: string
			avatar: string
		}
		timestamp: string
	}[]
	shares: {
		user: {
			username: string
			name: string
			avatar: string
		}
		timestamp: string
	}[]
}

export interface UserT {
	email?: string
	name?: string
	image: string
}

export interface TimestampT {
	seconds: number
	nanoseconds: number
}

export interface CommentT {
	text: string
	user: UserT
	timestamp: TimestampT
}

export interface TweetT {
	id: string
	title: string
	user: UserT
	content: string
	timestamp: TimestampT
	userRef: string
	images: string[]
	likes?: UserT[]
	comments?: CommentT[]
}
