import * as dotenv from 'dotenv';
import { findEnv } from '@app/my-env';
dotenv.config({
  path: findEnv(),
});

import { NextAuthOptions } from 'next-auth';
// @ts-ignore
import _GitHubProvider from 'next-auth/providers/github';

// @ts-ignore
const GitHubProvider: typeof _GitHubProvider = _GitHubProvider.default;

console.log('🤔🤔🤔', process.env.GITHUB_CLIENT_ID!);
console.log('🤔🤔🤔', process.env.GITHUB_CLIENT_SECRET!);

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          redirect_uri: 'http://localhost:4000/auth/callback/github',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  events: {
    createUser({ user }) {
      console.log('-- USER CREATED --');
      console.log('user:', user);
    },
    updateUser({ user }) {
      console.log('-- USER UPDATED --');
      console.log('user:', user);
    },
    async linkAccount({ user, account }) {
      console.log('-- ACCOUNT LINKED --');
      console.log('user:', user);
      console.log('account:', account);
    },
    async session({ session }) {
      console.log('-- SESSION ACTIVE --');
      console.log('session:', session);
    },
  },
  callbacks: {
    signIn({ account, user, profile, email, credentials }) {
      console.log('--- SIGN IN CALLBACK ---');
      console.log('account:', account);
      console.log('user:', user);
      console.log('profile:', profile);
      console.log('email:', email);
      console.log('credentials:', credentials);
      return true;
    },
    async jwt({ token, account, user, session }) {
      console.log('--- JWT CALLBACK ---');
      console.log('token:', token);
      console.log('account:', account);
      console.log('user:', user);
      console.log('session:', session);
      return token;
    },
    session({ session, token, newSession, trigger, user }) {
      console.log('--- SESSION CALLBACK ---');
      console.log('sesssion:', session);
      console.log('token:', token);
      console.log('newSession:', newSession);
      console.log('trigger:', trigger);
      console.log('user:', user);

      // @ts-ignore
      session.user.id = user.id;
      return session;
    },
  },
};
