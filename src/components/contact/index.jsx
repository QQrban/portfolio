import { css, styled } from 'styled-components';

import { useState } from 'react';

import bg2 from '../../assets/bgElement2.png';
import bg from '../../assets/bgElement.png';
import boltDown from '../../assets/boltDown.svg';
import boltUp from '../../assets/boltUp.svg';
import code1 from '../../assets/code1.png';
import code2 from '../../assets/code2.png';
import {
  BlueString,
  GreenString,
  OrangeString,
  PurpleString,
  TealString,
  WhiteString,
  YellowString,
} from '../shared/colors';
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
      <img style={bg2Styles} src={bg2} alt="bg-element" />
      <h1>
        <BlueString>
          I'm Always Open for Collaboration.{' '}
          <OrangeString>Reach Out!</OrangeString>
        </BlueString>
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
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 900px) {
    padding-top: 80px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  padding: 90px;
  display: flex;
  max-width: 650px;
  height: 650px;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
  margin: 40px auto 0 auto;
  background: linear-gradient(
    154deg,
    rgba(23, 85, 83, 0.7) 0%,
    rgba(67, 217, 173, 0.09) 100%
  );
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(32px);
  @media (max-width: 580px) {
    padding: 45px;
  }
  @media (max-width: 450px) {
    padding: 30px;
  }
  @media (max-width: 340px) {
    padding: 15px;
  }
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
  opacity: 0.9,
  left: 0,
  top: 0,
};

const bg2Styles = {
  position: 'absolute',
  opacity: 0.9,
  right: 0,
  top: 0,
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
