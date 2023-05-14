import { TweetT, TweetTemp } from '../types/tweets';

export const mockedTweets: TweetTemp[] = [
  {
    id: 1,
    title: 'React and TypeScript',
    user: {
      username: 'Saddam-dev',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    content: 'Just tried out Vite with React and TypeScript and it is amazing! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://pbs.twimg.com/media/Fs9KGdLXwAIyR0c?format=png&name=900x900',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },{
    id: 1,
    title: 'Next.js 13: The Latest Features and Improvements',
    user: {
      username: 'Tester now, aspiring Fullstack',
      name: 'Naveen Kolambage',
      avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    },
    content: 'TypeScript Course for Beginners - Learn TypeScript from Scratch!',
    media: [
      {
        type: 'image',
        url: 'https://i.ytimg.com/vi/XShQO3BvOyM/maxresdefault.jpg',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/BwuLxPH8IDs?autoplay=1&mute=1',
      },

      
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    user: {
      username: 'code-with-saddam',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    title: 'Free Code Camp',
    content:
      "Just discovered Free Code Camp and I'm loving it! It's a great resource for learning to code and it's completely free! #freecodecamp #codingeducation #learntocode",

    media: [
      {
        type: 'image',
        url: 'http://www.goodworklabs.com/wp-content/uploads/2016/10/reactjs.png',
      },
      {
        type: 'image',
        url: 'https://s3.amazonaws.com/coursesity-blog/2020/07/React_Js.png',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/1WmNXEVia8I?autoplay=1&mute=1',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1',
      },
    ],
    timestamp: '2023-03-31T12:30:00Z',
    likes: [
      {
        user: {
          username: 'janedoe',
          name: 'Jane Doe',
          avatar: 'https://avatar.com/janedoe',
        },
        timestamp: '2023-03-31T13:00:00Z',
      },
      {
        user: {
          username: 'bobsmith',
          name: 'Bob Smith',
          avatar: 'https://avatar.com/bobsmith',
        },
        timestamp: '2023-03-31T14:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'janedoe',
          name: 'Jane Doe',
          avatar: 'https://avatar.com/janedoe',
        },
        content: 'That sounds amazing! Where did you get it?',
        timestamp: '2023-03-31T13:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'janedoe',
          name: 'Jane Doe',
          avatar: 'https://avatar.com/janedoe',
        },
        timestamp: '2023-03-31T13:30:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'janedoe',
          name: 'Jane Doe',
          avatar: 'https://avatar.com/janedoe',
        },
        timestamp: '2023-03-31T13:00:00Z',
      },
      {
        user: {
          username: 'bobsmith',
          name: 'Bob Smith',
          avatar: 'https://avatar.com/bobsmith',
        },
        timestamp: '2023-03-31T14:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'janedoe',
          name: 'Jane Doe',
          avatar: 'https://avatar.com/janedoe',
        },
        timestamp: '2023-03-31T13:30:00Z',
      },
      {
        user: {
          username: 'bobsmith',
          name: 'Bob Smith',
          avatar: 'https://avatar.com/bobsmith',
        },
        timestamp: '2023-03-31T14:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'Modern JavaScript',
    user: {
      username: 'Tester now, aspiring Fullstack',
      name: 'Naveen Kolambage',
      avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    },
    content: 'Dividing an array into subarrays dynamically — using slice()',
    media: [
      {
        type: 'image',
        url: 'https://miro.medium.com/v2/resize:fit:1400/1*EpU3JfnGq0iIDL2bIeDijQ.jpeg',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    title: 'Tailwind CSS',
    id: 1,
    user: {
      username: 'tailwindfan',
      name: 'Tailwind Fan',
      avatar:
        'https://images.unsplash.com/profile-1623795199834-f8109281554dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
    },
    content: 'I just discovered Tailwind CSS and it makes styling so easy! 😍 #tailwindcss #react',
    media: [
      {
        type: 'image',
        url: 'https://i.pinimg.com/originals/9d/69/fd/9d69fd497059b8c9f3942806acda6bed.png',
      },
      {
        type: 'image',
        url: 'https://res.infoq.com/news/2020/12/tailwind-css-v2/en/headerimage/header+(1)-1608368148194.jpg',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 8,
    title: 'Building a Node.js API with Express, Mongoose, and TypeScript',
    user: {
      username: 'code-with-saddam',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    content:
      'In this article, we will walk through the process of building a Node.js API using the popular Express framework, MongoDB with Mongoose, and TypeScript. We will cover everything from setting up the project, to defining the endpoints, to handling errors and validating data. Whether you are new to Node.js or an experienced developer, this guide will help you build a robust and scalable API with ease.',
    media: [
      {
        type: 'image',
        url: 'https://codersera.com/blog/wp-content/uploads/2019/10/nodejs-thumb.jpg',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/Oe421EPjeBE?autoplay=1&mute=1',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'React and TypeScript',
    user: {
      username: 'Tester now, aspiring Fullstack',
      name: 'Naveen Kolambage',
      avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    },
    content: 'Just tried out Vite with React and TypeScript and it is amazing! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://tse3.mm.bing.net/th?id=OIP.KJSD0dmEYMVYXqlRISNJUAHaD_&pid=Api&P=0',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'Next.js and GraphQL',
    user: {
      username: 'Saddam-dev',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    content: 'Next.js and GraphQL! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://www.apollographql.com/blog/static/49-1-0d86b359ff07c6fbf68b5f5de87ac40b.png',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    title: 'Tailwind CSS',
    id: 1,
    user: {
      username: 'tailwindfan',
      name: 'Tailwind Fan',
      avatar:
        'https://images.unsplash.com/profile-1623795199834-f8109281554dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
    },
    content: 'I just discovered Tailwind CSS and it makes styling so easy! 😍 #tailwindcss #react',
    media: [
      {
        type: 'image',
        url: 'https://i.pinimg.com/originals/9d/69/fd/9d69fd497059b8c9f3942806acda6bed.png',
      },
      {
        type: 'image',
        url: 'https://res.infoq.com/news/2020/12/tailwind-css-v2/en/headerimage/header+(1)-1608368148194.jpg',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 8,
    title: 'Building a Node.js API with Express, Mongoose, and TypeScript',
    user: {
      username: 'code-with-saddam',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    content:
      'In this article, we will walk through the process of building a Node.js API using the popular Express framework, MongoDB with Mongoose, and TypeScript. We will cover everything from setting up the project, to defining the endpoints, to handling errors and validating data. Whether you are new to Node.js or an experienced developer, this guide will help you build a robust and scalable API with ease.',
    media: [
      {
        type: 'image',
        url: 'https://codersera.com/blog/wp-content/uploads/2019/10/nodejs-thumb.jpg',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/Oe421EPjeBE?autoplay=1&mute=1',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'React and TypeScript',
    user: {
      username: 'Tester now, aspiring Fullstack',
      name: 'Naveen Kolambage',
      avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    },
    content: 'Just tried out Vite with React and TypeScript and it is amazing! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://tse3.mm.bing.net/th?id=OIP.KJSD0dmEYMVYXqlRISNJUAHaD_&pid=Api&P=0',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'Next.js 13: The Latest Features and Improvements',
    user: {
      username: 'Tester now, aspiring Fullstack',
      name: 'Naveen Kolambage',
      avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    },
    content: 'Just tried out Vite with React and TypeScript and it is amazing! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://i.ytimg.com/vi/XShQO3BvOyM/maxresdefault.jpg',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
  {
    id: 1,
    title: 'Next.js and GraphQL',
    user: {
      username: 'Saddam-dev',
      name: 'Saddam Arbaa',
      avatar: 'https://avatars.githubusercontent.com/u/51326421?v=4',
    },
    content: 'Next.js and GraphQL! 🚀🔥 #reactjs #typescript #vite',
    media: [
      {
        type: 'image',
        url: 'https://tse2.mm.bing.net/th?id=OIP.ZxDw0j3ANBxpatoCdNW8JQHaEK&pid=Api&P=0',
      },
    ],
    timestamp: '2023-04-01T09:30:00Z',
    likes: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    comments: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        content: "I know right? I started using it recently too and it's a game changer!",
        timestamp: '2023-04-01T10:30:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        content: "Yes, I couldn't agree more. It has saved me so much time on styling.",
        timestamp: '2023-04-01T11:30:00Z',
      },
    ],
    retweets: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T13:00:00Z',
      },
    ],
    views: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T10:00:00Z',
      },
      {
        user: {
          username: 'tailwindlover',
          name: 'Tailwind Lover',
          avatar: 'https://avatar.com/tailwindlover',
        },
        timestamp: '2023-04-01T11:00:00Z',
      },
    ],
    shares: [
      {
        user: {
          username: 'reactdev',
          name: 'React Dev',
          avatar: 'https://avatar.com/reactdev',
        },
        timestamp: '2023-04-01T12:30:00Z',
      },
    ],
  },
];

export const mockedTrending = [
  {
    title: 'Trending in Coding',
    hasTag: '#coding',
    tweets: '62.6K',
    id: '8uu',
  },
  {
    title: 'Trending in Vanilla JS',
    hasTag: '#JavaScript',
    tweets: '806.6K Tweets',
    id: '875',
  },
  {
    title: 'Trending in 100daysofcode',
    hasTag: '#100daysofcode',
    tweets: '12752.6K',
    id: '88',
  },
  {
    title: 'COVID-19',
    hasTag: '#News',
    tweets: '127528.6K',
    id: '888',
  },
];

export const mockedSuggestUser = [
  {
    id: 1,
    username: 'elon-m',
    name: 'Elon Musk',
    avatar:
      'https://www.businessinsider.in/photo/77782500/elon-musk-is-now-worth-100-billion-half-of-jeff-bezos.jpg?imgsize=241963',
    flowedMe: true,
  },
  {
    id: 1,
    username: 'susan',
    name: 'CEO of YouTube',
    avatar:
      'http://static5.businessinsider.com/image/541b179c6da8116e1dbb3e12/https://variety.com/wp-content/uploads/2015/10/susan-wojcicki-power-of-women-youtube.jpg?w=1000',
    flowedMe: true,
  },
  {
    id: 1,
    username: 'Naveen',
    name: 'Naveen Kolambage',
    avatar: 'https://pbs.twimg.com/profile_images/1560233396403507200/5hKYoyz1_400x400.jpg',
    flowedMe: true,
  },
];
