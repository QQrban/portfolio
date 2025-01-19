import { styled } from 'styled-components';

import useMediaQuery from '../../../shared/hooks/useMediaQuery';
import {
  BlueString,
  GreenString,
  OrangeString,
  PurpleString,
  Tag,
  TealString,
  WhiteString,
  YellowString,
} from '../../shared/colors';
import { schools } from '../constants';

export default function Education() {
  const matchesAlt = useMediaQuery('(min-width: 395px)');
  const matchesImportFunction = useMediaQuery('(min-width: 347px)');

  return (
    <Wrapper>
      <LeftBar>
        <CodeArea>
          <CodeBody>
            <TextLine>
              <span>1</span> <PurpleString>import </PurpleString>
              <YellowString>{'{'}</YellowString>
              <WhiteString> schools </WhiteString>
              <YellowString>{'}'}</YellowString>
              <PurpleString> from </PurpleString>
              {matchesImportFunction ? (
                <>
                  <GreenString>'./constants'</GreenString>
                  <TealString>;</TealString>
                </>
              ) : (
                <div style={{ paddingLeft: '14px' }}>
                  <GreenString>'./constants'</GreenString>
                  <TealString>;</TealString>
                </div>
              )}
            </TextLine>
            <TextLine>
              <span>2</span> <PurpleString>import </PurpleString>
              <GreenString>'./Education.css'</GreenString>
              <TealString>;</TealString>
            </TextLine>
            <TextLine>
              <span>3</span>
            </TextLine>
            <TextLine>
              <span>4</span>{' '}
              <PurpleString>export default function </PurpleString>
              {matchesImportFunction ? (
                <>
                  <BlueString>Education</BlueString>
                  <YellowString>{'()'}</YellowString>
                  <YellowString> {'{'}</YellowString>
                </>
              ) : (
                <div style={{ paddingLeft: '14px' }}>
                  <BlueString>Education</BlueString>
                  <YellowString>{'()'}</YellowString>
                  <YellowString> {'{'}</YellowString>
                </div>
              )}
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '6px' }}>5</span>{' '}
              <PurpleString>return {'('}</PurpleString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '18px' }}>6</span>{' '}
              <TealString>{'<'}</TealString>
              <Tag>h4</Tag>
              <TealString>{'>'}</TealString>
              <TealString>Education</TealString>
              <TealString>{'</'}</TealString>
              <Tag>h4</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '18px' }}>7</span>{' '}
              <TealString>{'<'}</TealString>
              <Tag>hr</Tag>
              <TealString>{'/>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '18px' }}>8</span>{' '}
              <BlueString>{'{'}</BlueString>
              <WhiteString>schools.</WhiteString>
              <BlueString>map</BlueString>
              <YellowString>{'('}</YellowString>
              <PurpleString>{'('}</PurpleString>
              <OrangeString>school</OrangeString>
              <PurpleString>{')'}</PurpleString>
              <PurpleString> {'=> ('}</PurpleString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '30px' }}>9</span>{' '}
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <PurpleString> key</PurpleString>
              <TealString>=</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.name</WhiteString>
              <BlueString>{'}'}</BlueString>
              <TealString> {'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '42px' }}>10</span>{' '}
              <TealString>{'<'}</TealString>
              <Tag>img</Tag>
              <PurpleString> src</PurpleString>
              <TealString>=</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.photo</WhiteString>
              <BlueString>{'}'}</BlueString>
              {matchesAlt ? (
                <>
                  <PurpleString> alt</PurpleString>
                  <TealString>=</TealString>
                  <GreenString>"logo"</GreenString>
                  <TealString>{'/>'}</TealString>
                </>
              ) : (
                <div style={{ paddingLeft: '57px' }}>
                  <PurpleString> alt</PurpleString>
                  <TealString>=</TealString>
                  <GreenString>"logo"</GreenString>
                  <TealString>{'/>'}</TealString>
                </div>
              )}
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '42px' }}>11</span>{' '}
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '65px' }}>12</span>
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.name</WhiteString>
              <BlueString>{'}'}</BlueString>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '65px' }}>13</span>
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.location</WhiteString>
              <BlueString>{'}'}</BlueString>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '65px' }}>14</span>
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.spec</WhiteString>
              <BlueString>{'}'}</BlueString>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '65px' }}>15</span>
              <TealString>{'<'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
              <BlueString>{'{'}</BlueString>
              <WhiteString>school.dates</WhiteString>
              <BlueString>{'}'}</BlueString>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '52px' }}>16</span>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '30px' }}>17</span>
              <TealString>{'</'}</TealString>
              <Tag>div</Tag>
              <TealString>{'>'}</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '18px' }}>18</span>
              <YellowString>{')'}</YellowString>
              <PurpleString>{')'}</PurpleString>
              <BlueString>{'}'}</BlueString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '3px' }}>19</span>{' '}
              <PurpleString>{')'}</PurpleString>
              <TealString>;</TealString>
            </TextLine>
            <TextLine>
              <span style={{ paddingRight: '4px' }}>20</span>
              <YellowString>{'}'}</YellowString>
            </TextLine>
            <TextLine>
              <span>21</span>
            </TextLine>
          </CodeBody>
        </CodeArea>
      </LeftBar>
      <RightBar>
        <CodeArea>
          <CodeResultTitle>Education</CodeResultTitle>
          <hr />
          {schools.map((school) => (
            <CodeResultBody key={school.name}>
              <img style={{width: '100px'}} src={school.photo} alt="logo" />
              <EducationInfo>
                <div>{school.name}</div>
                <div>{school.location}</div>
                <div>{school.spec}</div>
                <div>{school.dates}</div>
              </EducationInfo>
            </CodeResultBody>
          ))}
        </CodeArea>
      </RightBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 1252px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

const LeftBar = styled.div`
  border-right: 1px solid #1e2d3d;
  flex: 3;
  padding: 40px;
  @media (max-width: 1252px) {
    order: 2;
    flex: auto;
    padding: 10px;
    border-right: none;
  }
`;

const RightBar = styled.div`
  padding: 40px;
  flex: 4;
  @media (max-width: 1252px) {
    order: 1;
    flex: auto;
    padding: 10px 10px 0 10px;
    border-bottom: 1px solid #1e2d3d;
  }
`;

const CodeArea = styled.div`
  margin-top: 12px;
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

const TextLine = styled.div``;

const CodeBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CodeResultTitle = styled.h4`
  font-size: 32px;
  color: white;
`;

const CodeResultBody = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #1e2d3d;
  }
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
