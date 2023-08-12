import { styled } from 'styled-components';

import React from 'react';

import bg2 from '../../assets/bgElement2.png';
import bg from '../../assets/bgElement.png';
import boltDown from '../../assets/boltDown.svg';
import boltUp from '../../assets/boltUp.svg';
import me from '../../assets/kurban.jpg';
import { GreenSquare } from '../shared/styles';

export default function HomePage() {
  return (
    <Wrapper>
      <LeftBar>
        <MyName>Hi! My name is</MyName>
        <BigName>Kurban Ramazanov</BigName>
        <Role>{'>'} Creative Frontend Developer</Role>
        <AboutMe>
          <span>{'//'} I'm a junior frontend developer with a knack</span>
          <span>{'//'} for turning ideas into reality.</span>
          <span>{'//'} Dedicated and results-driven, I pride myself on</span>
          <span>{'//'} delivering top-notch work that meets and exceeds</span>
          <span>{'//'} expectations. Explore my projects</span>
          <span>{'//'} through the link below!</span>
        </AboutMe>
        <Github target="_blank" href="https://github.com/qqrban">
          <Const>const</Const>
          <GithubLinkText> githubLink</GithubLinkText> =
          <GithubLink> https://github.com/qqrban</GithubLink>
        </Github>
      </LeftBar>
      <img style={bgStyles} src={bg} alt="bg-element" />
      <img style={bg2Styles} src={bg2} alt="bg-element" />
      <GreenSquare>
        <img style={boltUpLeft} src={boltUp} alt="bolt" />
        <img style={boltUpRight} src={boltUp} alt="bolt" />
        <img style={boltDownLeft} src={boltUp} alt="bolt" />
        <img style={boltDownRight} src={boltDown} alt="bolt" />
        <img
          style={{ width: '75%', borderRadius: '50%' }}
          src={me}
          alt="kurban"
        />
      </GreenSquare>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 129px;
  @media (max-width: 1275px) {
    gap: 55px;
  }
  @media (max-width: 1037px) {
    flex-direction: column;
    padding: 60px 0;
  }
  @media (max-width: 900px) {
    padding: 80px 12px 60px 12px;
  }
  align-items: center;
  position: relative;
`;

const LeftBar = styled.div`
  max-width: 600px;
`;

const MyName = styled.div`
  color: #e5e9f0;
  font-size: 18px;
  font-weight: 500;
`;

const BigName = styled.div`
  color: #e5e9f0;
  font-size: 62px;
  @media (max-width: 1169px) {
    font-size: 50px;
  }
`;

const Role = styled.div`
  color: #4d5bce;
  font-size: 32px;
  @media (max-width: 1169px) {
    font-size: 25px;
  }
  font-weight: 500;
`;

const AboutMe = styled.div`
  margin-top: 40px;
  color: #607b96;
  font-size: 16px;
  @media (max-width: 1169px) {
    font-size: 14px;
  }
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const Github = styled.a`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const Const = styled.span`
  color: #4d5bce;
`;

const GithubLinkText = styled.span`
  color: #43d9ad;
`;

const GithubLink = styled.span`
  color: #e99287;
`;

const bgStyles = {
  position: 'absolute',
  right: '200px',
  top: '-100px',
  opacity: 0.9,
};

const bg2Styles = {
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  opacity: 0.9,
};

const boltUpStyles = {
  width: '30px',
  position: 'absolute',
};

const boltUpLeft = {
  ...boltUpStyles,
  top: '10px',
  left: '10px',
};

const boltUpRight = {
  ...boltUpStyles,
  top: '10px',
  right: '10px',
};

const boltDownLeft = {
  ...boltUpStyles,
  bottom: '10px',
  left: '10px',
};

const boltDownRight = {
  ...boltUpStyles,
  bottom: '10px',
  right: '10px',
};
