import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          <title>GANS</title>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:url' content='https://gans-julienhe.firebaseapp.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='GANS' />
          <meta name='description' content='Yes, another server side rendering boilerplate.' />
          <meta property='og:image' content='https://gans-julienhe.firebaseapp.com/public/social/fb/og.png' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
