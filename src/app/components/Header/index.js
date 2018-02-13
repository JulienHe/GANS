import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import images from 'utils/images';
import {
  Container,
} from 'components/Helpers/General';

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

function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo>
          <img src={images.logo.vector} />
        </HeaderLogo>
        <HeaderNavigation>
          <Link href='/' passHref>
            <HeaderLink>Home</HeaderLink>
          </Link>
          <Link href='/about' passHref>
            <HeaderLink>About</HeaderLink>
          </Link>
          <Link href='/list' passHref>
            <HeaderLink>List</HeaderLink>
          </Link>
        </HeaderNavigation>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
