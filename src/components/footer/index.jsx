import { styled } from 'styled-components';

import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <AppBar>
      <LeftBar>
        <Link href="/">
          Find me<StyledSuffix> In</StyledSuffix>:
        </Link>
        <Link href="/">
          <AiFillFacebook size={30} />
        </Link>
        <Link href="/">
          <FaTelegramPlane size={30} />
        </Link>
      </LeftBar>
      <Link
        style={{ borderLeft: '1px solid #1e2d3d' }}
        href="https://github.com/qqrban"
        target="_blank"
      >
        <span style={{ marginRight: '18px' }}>QQrban</span>
        <AiFillGithub size={30} />
      </Link>
    </AppBar>
  );
}

const AppBar = styled.footer`
  color: #607b96;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #1e2d3d;
  position: relative;
  z-index: 555;
  background-color: #011627;
`;

const LeftBar = styled.div`
  display: flex;
`;

const Link = styled.a`
  padding: 10px 17.5px;
  border-right: 1px solid #1e2d3d;
  @media (max-width: 1000px) {
    padding: 5px 11.3px;
  }
  @media (max-width: 574px) {
    padding: 10px 20px;
  }
  @media (max-width: 450px) {
    padding: 5px 10px;
  }
  &:hover {
    color: white;
  }
`;

const StyledSuffix = styled.span`
  @media (max-width: 382px) {
    display: none;
  }
`;
