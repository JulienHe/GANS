# GANS
Create applications with [GraphQL](http://graphql.org/) 🌁, [Apollo](https://www.apollographql.com/) 👩‍🚀, [Next.js](https://github.com/zeit/next.js/) 👉 and [Styled-components](https://www.styled-components.com/) 💅.
All on firebase 🔥

## Why?

Simple, I like all the technology which was involved in this repository. I wanted to use GraphQ for a while and Apollo is a good way to work with GraphQL.
Also, I use React at my office so it was natural that I used something that I can understand (mostly) and manage.
Next.js is for the SSR (Server side rendering) part, I want to have a SEO ready app but also to load the app as fast as possible!
Styled-components is a personal choice, I like how it works.

I should write something more interesting than that... Hey I'm not a writer :D.

## Installation

```bash
clone the repo
yarn install
```

## Graphcool
GANS is using GraphQL to make it easier, and also because I love the service, GANS is using [Graphcool](https://www.graph.cool/).
Graphcool develops and deploys production-ready serverless GraphQL backends. Including GraphQL database mapping, real-time subscriptions & flexible permission system.
The [documentation](https://www.graph.cool/docs) is really great and the support is top notch!

To use Graphcool with GANS, please register on the website.

```bash
cd server
graphchool deploy
```

## Next.js Development

Standard Next.js development with Hot-module Reloading etc

```bash
yarn dev
```
You can see the local development on [http://localhost:3000/](http://localhost:3000/)

## Deploy to Firebase

You will need to connect the project to your Firebase project. Edit the name in .firebaserc or run `firebase init` and choose not to override any files.

### Deploy Hosting resources and the rewrite Cloud Function

```bash
yarn deploy-app
```

### Deploy functions not used for the SSR

Deploy all functions specified in the function group. Edit this script to add more function groups. - see [Partial deploys docs](https://firebase.google.com/docs/cli/#partial_deploys) for how to use function groups.

```bash
yarn deploy-funcs
```

### Deploy everything to Firebase

```bash
yarn deploy-all
```

## Clean `dist` Folder

```bash
yarn clean
```

## Thanks!
Special shoutout to [@jthegedus](https://github.com/jthegedus), you kill it!
