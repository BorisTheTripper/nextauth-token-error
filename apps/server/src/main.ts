import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

import { authOptions, ExpressAuth } from '@app/my-api';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.enable('trust proxy');

app.use('/auth/*', (req, res, next) => {
  console.log('🔎🔎🔎🔎🔎🔎🔎🔎');
  console.log('👀👀👀 METHOD:');
  console.log(req.method);
  console.log('👀👀👀 BASE URL:');
  console.log(req.baseUrl);
  console.log('👀👀👀 URL:');
  console.log(req.url);
  console.log('👀👀👀 PATH:');
  console.log(req.path);
  console.log('👀👀👀 HEADERS:');
  console.log(req.headers);
  console.log('👀👀👀 BODY:');
  console.log(req.body);
  console.log('👀👀👀 PARAMS:');
  console.log(req.params);
  // @ts-ignore
  ExpressAuth(authOptions)(req, res, next);
});

app.listen(4000, () => {
  console.log(`🚀🚀🚀🚀🚀🚀🚀 Server ready at http://localhost:4000`);
});
