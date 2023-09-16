import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { authOptions, NextAuth as _NextAuth } from '@app/my-api';

// @ts-ignore
const NextAuth: typeof _NextAuth = _NextAuth.default;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const authBaseUrl = '/auth/';

app.use((req, res, next) => {
  console.log('🔑🔑🔑 naxtauth mw...');

  if (!req.url.startsWith(authBaseUrl)) {
    console.log('😐😐😐 skipping nextauth mw...');
    return next();
  }

  req.query.nextauth = req.url
    .slice(authBaseUrl.length)
    .replace(/\?.*/, '')
    .split('/');

  console.log('req.url', req.url);
  console.log('req.query', req.query);
  console.log('');

  // @ts-ignore
  NextAuth(req, res, authOptions);
});

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000`);
});
