import { styled } from 'styled-components';

import kurban from '../../assets/kurban.jpg';
import useMediaQuery from '../../shared/hooks/useMediaQuery';
import Technology from './Technology';
import WorkExperience from './WorkExperience';

const technologies = [
  { name: 'React', level: 'Advanced', line: '2' },
  { name: 'JavaScript', level: 'Advanced', line: '3' },
  { name: 'HTML', level: 'Expert', line: '4' },
  { name: 'CSS', level: 'Expert', line: '5' },
];

const experience = [
  {
    role: 'Junior Software Engineer',
    company: 'TOPIA OÜ · Contract',
    time: 'May 2023 - Jul 2023',
    location: 'Tallinn, Harjumaa, Estonia',
    skills: 'Jenkins · React.js · Git · TypeScript · Jira',
  },
  {
    role: 'Frontend Internship',
    company: 'Gamma Intelligence',
    time: 'Nov 2022 - Feb 2023',
    location: 'Tallinn, Harjumaa, Estonia',
    skills: 'React.js · Git · JavaScript',
  },
];

export default function Bio() {
  const matchesArray = useMediaQuery('(min-width: 550px)');
  const matchesEmail = useMediaQuery('(min-width: 346px)');
  let lineNumber = 4;

  return (
    <Wrapper>
      <LeftBar>
        <CodeAreaWrapper>
          <CodeAreaHeader>
            <img
              style={{ width: '60px', borderRadius: '50%' }}
              src={kurban}
              alt="me"
            />
            <div>
              <WhoName>QQrban</WhoName>
              <WhoDate>Created 4 days ago</WhoDate>
            </div>
          </CodeAreaHeader>
          <CodeAreaBody>
            <div>
              1 <ConstText>const </ConstText>
              <ConstName>personalInfos = </ConstName>
              <CurlyBrackets>{'{'}</CurlyBrackets>
            </div>
            <div>
              2{'  '} <KeyName>firstName: </KeyName>
              <ValueString>'Kurban',</ValueString>
            </div>
            <div>
              3{'  '} <KeyName>lastName: </KeyName>
              <ValueString>'Ramazanov',</ValueString>
            </div>
            <div>
              4{'  '} <KeyName>age: </KeyName>
              <ValueNumber>30,</ValueNumber>
            </div>
            <div>
              5{'  '} <KeyName>phone: </KeyName>
              <ValueString>'+37258444846',</ValueString>
            </div>
            <div>
              6{'  '} <KeyName>email: </KeyName>
              <ValueString>
                {matchesEmail
                  ? 'kurban.ramazanovv@gmail.com,'
                  : `${'\n   '} 'kurban.ramazanovv@gmail.com'`}
              </ValueString>
            </div>
            <div>
              7{'  '} <KeyName>location: </KeyName>
              <ValueString>'Estonia, Tallinn',</ValueString>
            </div>
            <div>
              8{'  '} <KeyName>languages: </KeyName>
              <ValueString>
                <Brackets>{'['}</Brackets>
                <ValueString>
                  'Estonian', 'English',{' '}
                  {matchesArray ? 'Russian' : `${'\n   '} Russian`}
                </ValueString>
                <Brackets>{']'}</Brackets>,
              </ValueString>
            </div>
            <div>
              9 <CurlyBrackets>{'}'}</CurlyBrackets>
              <Semicolon>;</Semicolon>
            </div>
          </CodeAreaBody>
        </CodeAreaWrapper>
        <CodeAreaWrapper>
          <CodeAreaHeader>
            <img
              style={{ width: '60px', borderRadius: '50%' }}
              src={kurban}
              alt="me"
            />
            <div>
              <WhoName>QQrban</WhoName>
              <WhoDate>Created 1 day ago</WhoDate>
            </div>
          </CodeAreaHeader>
          <CodeAreaBody>
            <div>
              1 <ConstText>const </ConstText>
              <ConstName>technologies = </ConstName>
              <Brackets>{'['}</Brackets>
            </div>
            {technologies.map((technology) => (
              <div key={technology.name}>
                <Technology
                  technology={technology.name}
                  level={technology.level}
                  line={technology.line}
                />
              </div>
            ))}
            <div>
              6 <Brackets>{']'}</Brackets>
              <Semicolon>;</Semicolon>
            </div>
          </CodeAreaBody>
        </CodeAreaWrapper>
      </LeftBar>
      <RightBar>
        <CodeAreaTextWrapper>
          <CodeAreaBodyText>
            <div>
              1{'  '}
              <TextLine>
                &nbsp;
                {'/*'}
              </TextLine>
            </div>
            <div>
              2{'  '}
              <CommentTitle>&nbsp;* * WORK EXPERIENCE: </CommentTitle>
            </div>
            <div>
              3{'  '}
              <TextLine>&nbsp;- - - - - - - -</TextLine>
            </div>
            {experience.map((item) => {
              return Object.values(item).map((value, index) => {
                const codeLine = lineNumber++;
                return (
                  <span key={index}>
                    <WorkExperience
                      index={index}
                      value={value}
                      codeLine={codeLine}
                    />
                    {index % 4 === 0 && index !== 0 ? (
                      <div>
                        {lineNumber++}
                        {lineNumber > 10 ? '\u00A0' : '\u00A0\u00A0'}
                        <Divider>- - - - - - - -</Divider>
                      </div>
                    ) : null}
                  </span>
                );
              });
            })}
            <div>
              16{'  '}
              <TextLine>{'*/'}</TextLine>
            </div>
            <div>17</div>
          </CodeAreaBodyText>
        </CodeAreaTextWrapper>
      </RightBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 1252px) {
    flex-direction: column;
  }
`;

const LeftBar = styled.div`
  height: 100%;
  flex: 3;
  padding: 0 40px;
  border-right: 1px solid #1e2d3d;
  @media (max-width: 1361px) {
    padding: 0 10px 30px 10px;
  }
  @media (max-width: 1252px) {
    border-bottom: 1px solid #1e2d3d;
    border-right: none;
    padding: 0 10px 30px 10px;
  }
`;

const RightBar = styled.div`
  flex: 3;
  padding: 0 30px 0 30px;
  @media (max-width: 1417px) {
    padding: 0 10px 30px 10px;
  }
  @media (max-width: 1252px) {
    padding: 0 10px 60px 10px;
  }
`;

const CodeAreaWrapper = styled.div`
  margin: 40px 0 0 0px;
  @media (max-width: 387px) {
    margin: 40px 0 0 7px;
  }
`;
const CodeAreaTextWrapper = styled.div`
  margin: 20px 0 0 0;
  height: 90%;
  @media (max-width: 1252px) {
    margin: 40px 0 0 0;
  }
`;

const CodeAreaBody = styled.div`
  margin-top: 12px;
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #1e2d3d;
  background: #011221;
  white-space: pre;
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

const CodeAreaBodyText = styled.div`
  border-radius: 15px;
  padding: 20px;
  border: 1px solid #1e2d3d;
  background: #011221;
  height: 100%;
  font-size: 18px;
  gap: 6px;
  @media (max-width: 1252px) {
    max-width: inherit;
    font-size: 16px;
  }
  @media (max-width: 557px) {
    font-size: 14px;
  }
  @media (max-width: 498px) {
    padding: 5px 10px;
  }
`;

const CodeAreaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WhoName = styled.div`
  color: #5565e8;
  font-size: 14px;
  font-weight: 700;
`;

const WhoDate = styled.div`
  color: #607b96;
  font-size: 12px;
  font-weight: 500;
`;

const ConstText = styled.span`
  color: #c594c5;
`;

const ConstName = styled.span`
  color: white;
`;

const CurlyBrackets = styled.span`
  color: #fac863;
`;

const Brackets = styled.span`
  color: #c594c5;
`;

const KeyName = styled.span`
  color: white;
`;

const ValueString = styled.span`
  color: #99c794;
`;

const ValueNumber = styled.span`
  color: #f99157;
`;

const Semicolon = styled.span`
  color: white;
`;

const CommentTitle = styled.span`
  color: #99c794;
`;

const TextLine = styled.span`
  color: #a7adba;
`;

const Divider = styled.span`
  color: #a7adba;
`;
