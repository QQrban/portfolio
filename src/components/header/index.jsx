import { styled } from 'styled-components';

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useMediaQuery from '../../shared/hooks/useMediaQuery';
import BurgerButton from './mobileMenu/BurgerButton';
import MobileNav from './mobileMenu/MobileNav';

export default function Header() {
  const matches = useMediaQuery('(min-width: 900px)');
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      {matches ? (
        <AppBar>
          <LeftBar>
            <LinkTo to="#">kurban_ramazanov</LinkTo>
            <NavLinkTo to="/home">home.jsx</NavLinkTo>
            <NavLinkTo to="/about">about.jsx</NavLinkTo>
            <NavLinkTo to="/projects">projects.jsx</NavLinkTo>
          </LeftBar>
          <NavLinkTo style={{ borderLeft: '1px solid #1e2d3d' }} to="/contact">
            contact.jsx
          </NavLinkTo>
        </AppBar>
      ) : (
        <>
          <BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
          {openMenu && (
            <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          )}
        </>
      )}
    </header>
  );
}

const AppBar = styled.nav`
  color: #607b96;
  z-index: 659;
  position: relative;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e2d3d;
`;

const LeftBar = styled.div`
  display: flex;
`;

const NavLinkTo = styled(NavLink)`
  padding: 17px 31px;
  border-right: 1px solid #1e2d3d;
  &:first-child {
    padding-right: 150px;
    @media (max-width: 1000px) {
      padding-right: 50px;
    }
  }
  &:hover {
    color: white;
  }
  &.active {
    border-bottom: 3px solid #fea55f;
    color: white;
  }
`;

const LinkTo = styled(Link)`
  padding: 17px 31px;
  border-right: 1px solid #1e2d3d;
  &:first-child {
    padding-right: 88px;
    @media (max-width: 1000px) {
      padding-right: 50px;
    }
  }
`;
