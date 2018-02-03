import React, { PureComponent } from 'react';
import Head from 'next/head';
import PostList from 'components/PostList';
import App from 'components/App';
import withData from 'lib/withData';

export class List extends PureComponent {
  render() {
    return(
      <App>
        <Head>
          <title>List</title>
          <meta name='description' content='Bob is there' />
          <meta property='og:url' content='https://www.facebook.com/chapelsixteen/' />
        </Head>
        <PostList />
      </App>
    );
  }
}

export default withData(List);
