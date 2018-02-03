import Head from 'next/head'
import PostList from 'components/PostList';
import App from "components/App"
import withData from '../lib/apollo';

export default withData(props => (
  <App>
    <Head>
      <title>List</title>
      <meta name="description" content="Bob is there" />
      <meta property="og:url" content="https://www.facebook.com/chapelsixteen/" />
    </Head>
    <a href="https://www.facebook.com/aroe.medium/">Read more here</a>
    <PostList />
  </App>
))
