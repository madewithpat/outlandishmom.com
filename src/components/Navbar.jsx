import React from 'react';
import styled from 'styled-components';
import NavLink from './navbar/NavLink';

const NavBar = styled.header.attrs({
  class: 'pa3 pa4-ns'
});

const Navbar = () => (
  <nav class="pa3 pa4-ns">
    <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">
      Site Name
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
      Home
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
      About
    </a>
    <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">
      Store
    </a>
    <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">
      Contact
    </a>
  </nav>
);

export default () => (
  <NavBar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/">Store</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </NavBar>
);
