import React from 'react';
import App from 'components/App';
import styled from 'styled-components';
//Project
import {
  Container
} from 'components/Helpers/General';
import images from 'utils/images';

const Logo = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

function Index() {
  return (
    <App>
      <Container>
        <Logo>
          <img src={images.logo.colorful} width="450"/>
        </Logo>
      </Container>
    </App>
  );
}

export default Index;
