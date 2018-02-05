import React from "react";
import Link from "next/link";
import styled from 'styled-components';

const Header = styled.header`
  background: red;
`;

export default ({ pathname }) => (
  <Header>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>
    <Link href="/list">
      <a className={pathname === "/list" ? "is-active" : ""}>List</a>
    </Link>
  </Header>
)
