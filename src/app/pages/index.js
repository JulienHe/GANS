import React from 'react';
import App from 'components/App';
import images from '../utils/images';

function Index() {
  return (
    <App>
      <p>Index Page</p>
      <img src={images.logo} />
    </App>
  );
}

export default Index;
