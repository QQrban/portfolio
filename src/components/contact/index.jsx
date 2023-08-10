import { css, styled } from 'styled-components';

export default function Contact() {
  return (
    <Wrapper>
      <Container>
        <LeftBar>
          <InputContainer>
            <InputLabel />
            <Input id="contact-name" />
          </InputContainer>
          <InputContainer>
            <Input id="contact-email" />
          </InputContainer>
          <InputContainer>
            <Textarea id="contact-message" />
          </InputContainer>
        </LeftBar>
        <RightBar>
          <CodeArea></CodeArea>
        </RightBar>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 358px;
`;

const RightBar = styled.div``;

const InputContainer = styled.div``;

const InputLabel = styled.label``;

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
`;
const Textarea = styled.textarea`
  ${sharedStyles}
  height: 145px;
`;

const CodeArea = styled.div`
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #1e2d3d;
  color: #607b96;
  background: #011221;
  white-space: pre;
  height: 670px;
  @media (max-width: 1252px) {
    height: auto;
  }
  @media (max-width: 478px) {
    font-size: 13px;
  }
  @media (max-width: 373px) {
    padding: 7px;
  }
  @media (max-width: 329px) {
    font-size: 12px;
  }
`;
