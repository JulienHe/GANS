import React from "react"
import Head from "next/head"
import MetaHead from "components/MetaHead"
import App from "components/App"

export default () => (
  <App>
    <Head>
      <meta property="og:url" content="https://medium.com/" />
    </Head>
    <article>
      About this page
    </article>
  </App>
)
