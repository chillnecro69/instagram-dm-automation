import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "instagram",
      name: "Instagram",
      type: "oauth",
      authorization: {
        url: "https://api.instagram.com/oauth/authorize",
        params: {
          scope: "user_profile,user_media",
          response_type: "code",
        },
      },
      token: "https://api.instagram.com/oauth/access_token",
      userinfo: {
        url: "https://graph.instagram.com/me",
        params: {
          fields: "id,username,account_type,media_count",
        },
      },
      clientId: process.env.INSTAGRAM_APP_ID!,
      clientSecret: process.env.INSTAGRAM_APP_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.username,
          email: null, // Instagram doesn't provide email
          image: null,
        }
      },
    },
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "instagram") {
        // Store Instagram account data
        try {
          await prisma.instagramAccount.upsert({
            where: {
              instagramUserId: profile?.id as string,
            },
            update: {
              accessToken: account.access_token!,
              username: profile?.username as string,
              isActive: true,
            },
            create: {
              userId: user.id,
              instagramUserId: profile?.id as string,
              username: profile?.username as string,
              accessToken: account.access_token!,
              isBusinessAccount: profile?.account_type === "BUSINESS",
              isActive: true,
            },
          })
        } catch (error) {
          console.error("Error storing Instagram account:", error)
          return false
        }
      }
      return true
    },
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id
        
        // Add Instagram account info to session
        const instagramAccount = await prisma.instagramAccount.findFirst({
          where: { userId: user.id, isActive: true },
        })
        
        if (instagramAccount) {
          session.instagramConnected = true
          session.instagramUsername = instagramAccount.username
        } else {
          session.instagramConnected = false
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    signUp: '/signup',
    error: '/auth/error',
  },
  session: {
    strategy: 'database',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
