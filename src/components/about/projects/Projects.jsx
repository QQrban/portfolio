import { styled } from 'styled-components';

import { BiSolidDownvote } from 'react-icons/bi';

import { projects } from '../constants';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <Wrapper>
      <ProjectsTitle>Some of My Portfolio Projects</ProjectsTitle>
      <CodeContainer>
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            photo={project.photo}
            name={project.name}
            tools={project.tools}
            descr={project.descr}
            link={project.link}
          />
        ))}
      </CodeContainer>
      <ProjectsFooter>You can see more on my GitHub.</ProjectsFooter>
      <Arrow>
        <a href="https://github.com/qqrban" target="_blank" rel="noreferrer">
          <BiSolidDownvote size={30} color="#5fb3b3" />
        </a>
      </Arrow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const CodeContainer = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 40px;
  max-width: 1050px;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 1360px) {
    gap: 15px;
    flex-wrap: wrap;
    padding: 40px 10px 0 10px;
  }
  @media (max-width: 390px) {
    padding: 40px 20px 0 20px;
  }
`;

const ProjectsTitle = styled.h2`
  padding: 20px 0 0 20px;
  color: #607b96;
  font-size: 42px;
  @media (max-width: 1360px) {
    font-size: 34px;
  }
  @media (max-width: 390px) {
    text-align: center;
    font-size: 28px;
  }
`;

const ProjectsFooter = styled.div`
  margin-top: 50px;
  padding: 20px 20px 0 0;
  color: #99c794;
  text-align: right;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 10px 0;
`;
