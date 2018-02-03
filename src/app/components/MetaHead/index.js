import React, { PropTypes, PureComponent } from 'react';
import Head from 'next/head'

export class MetaHead extends PureComponent {
  render() {
    return(
      <Head>
        <meta property="og:url" content="https://medium.com/" />
      </Head>
    )
  }
}

MetaHead.propTypes = {
};

export default MetaHead;
