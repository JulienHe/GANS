import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.header`
  text-align: center;
  padding: 16px;
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
    <Navigation>
      <Link href='/' passHref>
        <HeaderLink>Home</HeaderLink>
      </Link>
      <Link href='/about' passHref>
        <HeaderLink>About</HeaderLink>
      </Link>
      <Link href='/list' passHref>
        <HeaderLink>List</HeaderLink>
      </Link>
    </Navigation>
  );
}

export default Header;
