import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.header`
  background: red;
`;

const HeaderLink = styled.a`
  margin: 0 8px;
  display: inline-block;
`;

function Header(pathname) {
  return (
    <Navigation>
      <Link href='/' passHref>
        <HeaderLink className={pathname === '/' ? 'is-active' : ''}>Home</HeaderLink>
      </Link>
      <Link href='/about' passHref>
        <HeaderLink className={pathname === '/about' ? 'is-active' : ''}>About</HeaderLink>
      </Link>
      <Link href='/list' passHref>
        <HeaderLink className={pathname === '/list' ? 'is-active' : ''}>List</HeaderLink>
      </Link>
    </Navigation>
  );
}

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
