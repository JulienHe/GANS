import * as functions from 'firebase-functions';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handler = app.getRequestHandler();

const nextApp = functions.https.onRequest((request, response) => {
  console.log('File: ' + request.originalUrl); // eslint-disable-line no-console
  return app.prepare().then(() => handler(request, response));
});

export { nextApp };
