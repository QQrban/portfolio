import { css, styled } from 'styled-components';

import { useState } from 'react';

import bg2 from '../../assets/bgElement2.png';
import bg from '../../assets/bgElement.png';
import boltDown from '../../assets/boltDown.svg';
import boltUp from '../../assets/boltUp.svg';
import { GreenString, OrangeString, WhiteString } from '../shared/colors';
import { Button } from '../shared/styles';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Wrapper>
      <img style={bgStyles} src={bg} alt="bg-element" />
      <img style={bgStyles2} src={bg2} alt="bg-element" />
      <h1>
        <Title>
          I'm Always Open for Collaboration.{' '}
          <OrangeString>Reach Out!</OrangeString>
        </Title>
      </h1>
      <Container>
        <Form>
          <img style={boltUpLeft} src={boltUp} alt="bolt" />
          <img style={boltUpRight} src={boltUp} alt="bolt" />
          <img style={boltDownLeft} src={boltUp} alt="bolt" />
          <img style={boltDownRight} src={boltDown} alt="bolt" />
          <InputContainer>
            <InputLabel htmlFor="contact-name">
              <WhiteString>fullName:</WhiteString>
            </InputLabel>
            <Input
              type="text"
              placeholder="Olivia Adamson"
              onChange={getName}
              value={name}
              id="contact-name"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="contact-email">
              <WhiteString>email:</WhiteString>
            </InputLabel>
            <Input
              type="email"
              placeholder="olivia.adamson@gmail.com"
              onChange={getEmail}
              value={email}
              id="contact-email"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="contact-message">
              <WhiteString>message:</WhiteString>
            </InputLabel>
            <Textarea
              placeholder="I recently came across your portfolio website, and I must say, I'm genuinely impressed with your work. The design, creativity, and the details in your projects caught my eye."
              onChange={getMessage}
              value={message}
              id="contact-message"
            />
          </InputContainer>
          <Button type="submit">submitMessage</Button>
        </Form>
        <Info>
          <BigText>
            <GreenString>{'>'} Thank you for visiting my page!</GreenString>
          </BigText>
          <span>
            {'//'} I'm thrilled that you took the time to explore my work.
          </span>
          <span>
            {'//'} As a passionate developer, I'm always on the lookout
          </span>
          <span>{'//'} for new challenges and opportunities. </span>
          <span>
            {'//'} If you're interested in collaboration, don't hesitate to
            reach out.
          </span>
          <span>
            {'//'} I'm always eager to explore new opportunities and challenges.
          </span>
          <span>
            {'//'} Your interest means a lot to me, and I look forward
          </span>
          <span>{'//'} to connecting with you soon!</span>
        </Info>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  @media (max-width: 900px) {
    padding-top: 80px;
  }
`;

const Title = styled.div`
  color: #4d5bce;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Form = styled.form`
  padding: 60px;
  display: flex;
  flex: 1;
  position: relative;
  z-index: 991;
  order: 2;
  max-width: 650px;
  max-height: 650px;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
  background: linear-gradient(
    154deg,
    rgba(23, 85, 83, 0.7) 0%,
    rgba(67, 217, 173, 0.09) 100%
  );
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(32px);
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 580px) {
    padding: 70px 20px;
  }
`;

const Info = styled.div`
  color: #607b96;
  font-size: 16px;
  order: 1;
  position: relative;
  z-index: 991;
  @media (max-width: 1169px) {
    font-size: 14px;
  }
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div``;

const InputLabel = styled.label`
  display: block;
  color: #a7adba;
  margin-bottom: 5px;
  font-size: 19px;
  font-weight: 500;
`;

const sharedStyles = css`
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  padding: 10px;
  color: #607b96;
  background: #011221;
  width: 320px;
`;

const Input = styled.input`
  ${sharedStyles},
  height: 41px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

const BigText = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
`;
const Textarea = styled.textarea`
  ${sharedStyles}
  height: 200px;
  width: 100%;
  resize: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const bgStyles = {
  position: 'absolute',
  right: 0,
  opacity: 0.7,
  pointerEvents: 'none',
};
const bgStyles2 = {
  position: 'absolute',
  left: 0,
  opacity: 0.4,
  pointerEvents: 'none',
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
