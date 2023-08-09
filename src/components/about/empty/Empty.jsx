import { styled } from 'styled-components';

export default function Empty() {
  return (
    <Wrapper>
      <UpperText>OH NO!</UpperText>
      <div>I didn't think you'd close all the tabs!</div>
      <div>Choose something on the left or refresh the page 😊 </div>
      <CodeArea>
        <div>[eslint]</div>
        <div>src\components\about\index.jsx</div>
        <span>Line 109:31: 'EmptyPage' is not defined</span>
        <Error> react/jsx-no-undef</Error>
        <div>
          <Error>Failed to compile.</Error>
        </div>
      </CodeArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  gap: 20px;
`;

const UpperText = styled.h1`
  font-size: 72px;
`;
const CodeArea = styled.div`
  background-color: black;
  width: 60%;
  color: white;
  padding: 20px;
`;

const Error = styled.span`
  color: #802626;
`;
