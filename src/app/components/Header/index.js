import React, { PureComponent } from 'react';
import styled from 'styled-components';
import images from 'utils/images';
import {
  Container,
} from 'components/Helpers/General';
import { Link } from 'src/routes';

const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  padding: 16px 0;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavigation = styled.nav``;

const HeaderLogo = styled.h1`
  img {
    width: 80px;
  }
`;

const HeaderLink = styled.a`
  margin: 0 8px;
  display: inline-block;
  font-size: 14px;
  color: #3C3C3C;
  text-transform: uppercase;
`;

export class Header extends PureComponent {
  render() {
    return (
      <Container>
        <HeaderContainer>
          <HeaderLogo>
            <img src={images.logo.vector} />
          </HeaderLogo>
          <HeaderNavigation>
            <Link route='home' passHref>
              <HeaderLink>Home</HeaderLink>
            </Link>
            <Link route='about' passHref>
              <HeaderLink>About</HeaderLink>
            </Link>
            <Link route='aboutProfile' params={{id: '12341'}} passHref>
              <HeaderLink>About with ID</HeaderLink>
            </Link>
            <Link route='list' passHref>
              <HeaderLink>List</HeaderLink>
            </Link>
          </HeaderNavigation>
        </HeaderContainer>
      </Container>
    );
  }
}

export default Header;
