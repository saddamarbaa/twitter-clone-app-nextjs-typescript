import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import Auth0Provider from 'next-auth/providers/auth0'
import AppleProvider from 'next-auth/providers/apple'
import EmailProvider from 'next-auth/providers/email'

export const authOptions: NextAuthOptions = {
	providers: [
		// EmailProvider({
		// 	server: process.env.EMAIL_SERVER,
		// 	from: process.env.EMAIL_FROM,
		// }),
		// AppleProvider({
		//   clientId: process.env.APPLE_ID!,
		//   clientSecret: {
		//     appleId: process.env.APPLE_ID!,
		//     teamId: process.env.APPLE_TEAM_ID!,
		//     privateKey: process.env.APPLE_PRIVATE_KEY!,
		//     keyId: process.env.APPLE_KEY_ID!,
		//   },
		// }),

		// FacebookProvider({
		// 	clientId: process.env.FACEBOOK_ID!,
		// 	clientSecret: process.env.FACEBOOK_SECRET!,
		// }),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID!,
			clientSecret: process.env.TWITTER_SECRET!,
		}),
		// Auth0Provider({
		// 	clientId: process.env.AUTH0_ID!,
		// 	clientSecret: process.env.AUTH0_SECRET!,
		// 	issuer: process.env.AUTH0_ISSUER,
		// }),
	],
	theme: {
		colorScheme: 'light',
	},
	callbacks: {
		async jwt({ token }) {
			token.userRole = 'admin'
			return token
		},
	},
}

export default NextAuth(authOptions)

// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import GithubProvider from 'next-auth/providers/github'

// export const authOptions = {
// 	providers: [
// 		GoogleProvider({
// 			clientId: process.env.FIREBASE_GOOGLE_WEB_CLIENT_ID!,
// 			clientSecret: process.env.FIREBASE_GOOGLE_WEB_CLIENT_SECRET!,
// 		}),
// 		GithubProvider({
// 			clientId: process.env.GITHUB_CLIENT_ID!,
// 			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
// 		}),
// 	],
// 	secret: process.env.NEXT_AUTH_SECRET,
// 	jwt: {
// 		secret: process.env.NEXT_AUTH_SECRET,
// 	},
// 	callbackUrl: process.env.NEXT_AUTH_URL + '/api/auth/callback',
// }

// export default NextAuth(authOptions)
