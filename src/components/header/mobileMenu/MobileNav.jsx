import Offcanvas from 'react-bootstrap/Offcanvas';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import BurgerButton from './BurgerButton';

export default function MobileNav({ openMenu, setOpenMenu }) {
  const handleClose = () => setOpenMenu(!openMenu);

  return (
    <>
      <OffCanvas show={openMenu} onHide={handleClose}>
        <BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <CanvasBody>
          <MobileMenu>
            <LinkTo to="/home">Home.jsx</LinkTo>
            <LinkTo to="/about">About.jsx</LinkTo>
            <LinkTo to="/projects">Projects.jsx</LinkTo>
            <LinkTo to="/contact">Contact.jsx</LinkTo>
          </MobileMenu>
        </CanvasBody>
      </OffCanvas>
    </>
  );
}

const LinkTo = styled(NavLink)`
  display: block;
  font-size: 24px;
  border-bottom: 1px solid #1e2d3d;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  letter-spacing: 2.5px;
  text-align: center;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;

const OffCanvas = styled(Offcanvas)`
  background-color: #011627;
  color: #607b96;
  border-right: 1px solid #1e2d3d !important;
  width: 250px !important;
  padding-top: 150px;
`;

const CanvasBody = styled(OffCanvas.Body)`
  margin-top: 50px;
  padding: 0 !important;
`;

const MobileMenu = styled.nav``;
