export interface TweetTemp {
  id: number;
  user: {
    username: string;
    name: string;
    avatar: string;
  };
  title: string;
  content: string;
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
  timestamp: string;
  likes: {
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    timestamp: string;
  }[];
  comments: {
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    content: string;
    timestamp: string;
  }[];
  retweets: {
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    timestamp: string;
  }[];
  views: {
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    timestamp: string;
  }[];
  shares: {
    user: {
      username: string;
      name: string;
      avatar: string;
    };
    timestamp: string;
  }[];
}


export interface TweetT {
	id: string
	title: string
	user: {
		email?: string
    name?: string
    image:string
	}
	content: string
	timestamp: {
    seconds: number;
    nanoseconds: number;
  };
	userRef: string
  images:string[]
}