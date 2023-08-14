import emailjs from '@emailjs/browser';
import { css, styled } from 'styled-components';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';

import bg2 from '../../assets/bgElement2.png';
import bg from '../../assets/bgElement.png';
import boltDown from '../../assets/boltDown.svg';
import boltUp from '../../assets/boltUp.svg';
import {
  GreenString,
  OrangeString,
  PurpleString,
  WhiteString,
} from '../shared/colors';
import { Button } from '../shared/styles';

export default function Contact() {
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send('service_xglde3p', 'template_9ym63ci', data, '2aKuc3rWl9BduUNyZ')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setEmailSent(true);
    reset();
  };

  const newMessage = () => {
    setEmailSent(false);
  };
  return (
    <Wrapper>
      <img style={bgStyles} src={bg} alt="bg-element" />
      <img style={bgStyles2} src={bg2} alt="bg-element" />
      {emailSent ? (
        <EmailSent>
          <MdDone color="#99c794" size={90} />
          <PurpleString as="h1">Email sent!</PurpleString>
          <div>
            <WhiteString as="h4">Thank you for your message.</WhiteString>
            <WhiteString as="h4">
              I'll respond to it as soon as I can!
            </WhiteString>
          </div>
          <Button onClick={newMessage}>sendNewMessage</Button>
        </EmailSent>
      ) : (
        <>
          <h1>
            <Title>
              I'm Always Open for Collaboration.{' '}
              <OrangeString as="div">Reach Out!</OrangeString>
            </Title>
          </h1>
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('user_name', { required: true })}
                  id="contact-name"
                />
                {errors.user_name && (
                  <ErrorMessage>This field is required</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="contact-email">
                  <WhiteString>email:</WhiteString>
                </InputLabel>
                <Input
                  type="email"
                  placeholder="olivia.adamson@gmail.com"
                  {...register('user_email', {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    required: true,
                  })}
                  id="contact-email"
                />
                {errors.user_email && (
                  <ErrorMessage>Please enter a valid email</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="contact-message">
                  <WhiteString>message:</WhiteString>
                </InputLabel>
                <Textarea
                  placeholder="I recently came across your portfolio website, and I must say, I'm genuinely impressed with your work. The design, creativity, and the details in your projects caught my eye."
                  {...register('message', { required: true })}
                  id="contact-message"
                />
                {errors.message && (
                  <ErrorMessage>This field is required</ErrorMessage>
                )}
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
                {'//'} I'm always eager to explore new opportunities and
                challenges.
              </span>
              <span>
                {'//'} Your interest means a lot to me, and I look forward
              </span>
              <span>{'//'} to connecting with you soon!</span>
            </Info>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    padding-top: 80px;
  }
`;

const EmailSent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    gap: 22px;
    text-align: center;
  }
`;

const Title = styled.div`
  color: #4d5bce;
  padding-left: 50px;
  @media (max-width: 487px) {
    text-align: center;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
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
    gap: 5px;
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
  &::placeholder {
    opacity: 0.5;
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
  &::placeholder {
    opacity: 0.5;
  }
`;

const ErrorMessage = styled.span`
  color: #e99287;
  font-size: 14px;
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
