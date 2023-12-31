import { styled } from 'styled-components';

import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';

import useMediaQuery from '../../shared/hooks/useMediaQuery';

export default function Footer() {
  const matches = useMediaQuery('(min-width: 901px)');

  return (
    <AppBar>
      <LeftBar>
        <Link href="/">
          Write me<StyledSuffix> In</StyledSuffix>:
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100006241362203"
        >
          <AiFillFacebook size={30} />
        </Link>
        <Link href="mailto:kurban.ramazanovv@gmail.com">
          <BiLogoGmail size={30} />
        </Link>
      </LeftBar>
      <Link
        style={{ borderLeft: '1px solid #1e2d3d' }}
        href="https://github.com/qqrban"
        target="_blank"
      >
        {matches ? <span style={{ marginRight: '18px' }}>QQrban</span> : ''}
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
