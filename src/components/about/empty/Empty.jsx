import { styled } from 'styled-components';

export default function Empty() {
  return (
    <Wrapper>
      <UpperText>OH NO!</UpperText>
      <h3>I didn't think you'd close all the tabs!</h3>
      <h5>Choose something on the left or refresh the page 😊 </h5>
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
  padding: 15px;
  @media (max-width: 900px) {
    padding: 100px 15px 15px 15px;
  }
`;

const UpperText = styled.h1`
  font-size: 72px;
  @media (max-width: 654px) {
    font-size: 60px;
  }
`;
const CodeArea = styled.div`
  background-color: black;
  width: 900px;
  color: white;
  padding: 50px 20px;
  font-size: 24px;
  @media (max-width: 1235px) {
    width: 700px;
    font-size: 18px;
    padding: 30px 20px;
  }
  @media (max-width: 974px) {
    width: 600px;
    font-size: 16px;
  }
  @media (max-width: 634px) {
    width: 100%;
    font-size: 14px;
  }
`;

const Error = styled.span`
  color: #802626;
`;
