import React from 'react';
import Head from 'next/head';
import App from 'components/App';
import {
  Container,
  Title,
} from 'components/Helpers/General';

function About() {
  return (
    <App>
      <Head>
        <meta property='og:url' content='https://medium.com/' />
      </Head>
      <Container>
        <Title>About</Title>
      </Container>
    </App>
  );
}

export default About;
