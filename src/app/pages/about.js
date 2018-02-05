import React from 'react';
import Head from 'next/head';
import App from 'components/App';

function About() {
  return (
    <App>
      <Head>
        <meta property='og:url' content='https://medium.com/' />
      </Head>
      <article>
        About this page
      </article>
    </App>
  );
}

export default About;
