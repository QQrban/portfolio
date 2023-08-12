import { styled } from 'styled-components';

import { BlueString } from '../../shared/colors';
import { Button } from '../../shared/styles';

export default function ProjectItem({ photo, descr, tools, link, name }) {
  return (
    <CodeArea>
      <ImgContainer>
        <img src={photo} alt="project" />
      </ImgContainer>
      <Title>{name}</Title>
      <Description>{descr}</Description>
      <ToolsContainer>
        <BlueString>Tools: </BlueString>
        <Tools>{tools}</Tools>
      </ToolsContainer>
      <Button onClick={() => window.open(link)}>viewProject</Button>
    </CodeArea>
  );
}

const CodeArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  max-height: 650px;
  width: 350px;
  border: 1px solid #1e2d3d;
  background: #011221;
  @media (max-width: 1252px) {
    height: auto;
  }
  @media (max-width: 951px) {
  }
`;

const ImgContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  height: 190px;
  border: 2px solid #fac863;
  opacity: 0.9;
`;

const Title = styled.h4`
  font-weight: 700;
  color: #e99287;
`;

const Description = styled.div`
  color: #a7adba;
`;

const ToolsContainer = styled.div`
  margin-top: 8px;
  color: #607b96;
  height: 50px;
`;

const Tools = styled.span`
  color: #607b96;
`;
