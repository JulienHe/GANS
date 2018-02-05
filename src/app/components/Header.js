import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const Navigation = styled.header`
  background: red;
`;

function Header(pathname) {
  return (
    <Navigation>
      <Link href='/'>
        <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
      </Link>{' '}
      <Link href='/about'>
        <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
      </Link>
      <Link href='/list'>
        <a className={pathname === '/list' ? 'is-active' : ''}>List</a>
      </Link>
    </Navigation>
  );
}

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
