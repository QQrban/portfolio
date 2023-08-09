import { styled } from 'styled-components';

import kurban from '../../../assets/kurban.jpg';
import useMediaQuery from '../../../shared/hooks/useMediaQuery';
import { experience, technologies } from '../constants';
import {
  GreenString,
  OrangeString,
  PurpleString,
  WhiteString,
  YellowString,
} from '../shared/colors';
import Technology from './Technology';
import WorkExperience from './WorkExperience';

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
              1 <PurpleString>const </PurpleString>
              <WhiteString>personalInfos = </WhiteString>
              <YellowString>{'{'}</YellowString>
            </div>
            <div>
              2{'  '} <WhiteString>firstName: </WhiteString>
              <GreenString>'Kurban',</GreenString>
            </div>
            <div>
              3{'  '} <WhiteString>lastName: </WhiteString>
              <GreenString>'Ramazanov',</GreenString>
            </div>
            <div>
              4{'  '} <WhiteString>age: </WhiteString>
              <OrangeString>30,</OrangeString>
            </div>
            <div>
              5{'  '} <WhiteString>phone: </WhiteString>
              <GreenString>'+37258444846',</GreenString>
            </div>
            <div>
              6{'  '} <WhiteString>email: </WhiteString>
              <GreenString>
                {matchesEmail
                  ? 'kurban.ramazanovv@gmail.com,'
                  : `${'\n   '} 'kurban.ramazanovv@gmail.com'`}
              </GreenString>
            </div>
            <div>
              7{'  '} <WhiteString>location: </WhiteString>
              <GreenString>'Estonia, Tallinn',</GreenString>
            </div>
            <div>
              8{'  '} <WhiteString>languages: </WhiteString>
              <GreenString>
                <PurpleString>{'['}</PurpleString>
                <GreenString>
                  'Estonian', 'English',{' '}
                  {matchesArray ? 'Russian' : `${'\n   '} Russian`}
                </GreenString>
                <PurpleString>{']'}</PurpleString>,
              </GreenString>
            </div>
            <div>
              9 <YellowString>{'}'}</YellowString>
              <WhiteString>;</WhiteString>
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
              1 <PurpleString>const </PurpleString>
              <WhiteString>technologies = </WhiteString>
              <PurpleString>{'['}</PurpleString>
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
              6 <PurpleString>{']'}</PurpleString>
              <WhiteString>;</WhiteString>
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
              <GreenString>&nbsp;* * WORK EXPERIENCE: </GreenString>
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

const TextLine = styled.span`
  color: #a7adba;
`;

const Divider = styled.span`
  color: #a7adba;
`;
