import * as functions from "firebase-functions"
import next from "next"

import routes form './routes';
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf: { distDir: "next" } })
const handler = routes.getRequestHandler(app)

const nextApp = functions.https.onRequest((request, response) => {
  console.log("File: " + request.originalUrl)
  // log the page.js file or resource being requested

  return app.prepare().then(() => handler(request, response))
})

export { nextApp }
