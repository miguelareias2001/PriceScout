import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      console.log('JWT Token:', token); // Debugging log
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      console.log('Session:', session); // Debugging log
      return session;
    },
  },
  debug: true, // Enable debug mode to log errors
};

export default function handler(req, res) {
  return NextAuth(req, res, authOptions);
}