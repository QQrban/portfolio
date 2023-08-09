import { styled } from 'styled-components';

import { comments } from '../constants';
import {
  BlueString,
  GreenString,
  OrangeString,
  PurpleString,
  TealString,
  WhiteString,
  YellowString,
} from '../shared/colors';
import Comment from './Comment';

export default function Recommendations() {
  return (
    <Wrapper>
      <CodeArea>
        <CodeLine>
          1 <PurpleString>export const </PurpleString>
          <BlueString>useAuth = </BlueString>
          <YellowString>{'()'} </YellowString>
          <PurpleString>{'=>'} </PurpleString>
          <YellowString>{'{'} </YellowString>
        </CodeLine>
        <CodeLine>
          <span style={{ paddingRight: '34px' }}>2</span>
          <PurpleString>const </PurpleString>
          <WhiteString>context = </WhiteString>
          <BlueString>useContext</BlueString>
          <PurpleString>{'('}</PurpleString>
          <WhiteString>AuthContext</WhiteString>
          <PurpleString>{')'}</PurpleString>
          <TealString>;</TealString>
        </CodeLine>
        <CodeLineUp>
          <span style={{ paddingRight: '16px' }}>3 +</span>
          <PurpleString>if {'('}</PurpleString>
          <WhiteString>!context</WhiteString>
          <PurpleString>{')'} throw</PurpleString>
          <BlueString> new Error</BlueString>
          <PurpleString>{'('}</PurpleString>
          <GreenString>'Error'</GreenString>
          <PurpleString>{')'}</PurpleString>
          <TealString>;</TealString>
        </CodeLineUp>
        <Comment props={comments.maksim} />
        <CodeLine>
          <span style={{ paddingRight: '34px' }}>4</span>
          <PurpleString>return </PurpleString>
          <WhiteString>context </WhiteString>
          <TealString>;</TealString>
        </CodeLine>
        <CodeLine>
          5 <YellowString>{'}'}</YellowString>
          <TealString>;</TealString>
        </CodeLine>
      </CodeArea>
      <CodeArea>
        <CodeLineUp>
          1 + <PurpleString>interface </PurpleString>
          <WhiteString>Props </WhiteString>
          <YellowString>{'{'}</YellowString>
        </CodeLineUp>
        <CodeLineUp>
          <span style={{ paddingRight: '24px' }}>2 +</span>
          <WhiteString>username: </WhiteString>
          <YellowString>string </YellowString>
          <TealString>;</TealString>
        </CodeLineUp>
        <CodeLineUp>
          <span style={{ paddingRight: '24px' }}>3 +</span>
          <WhiteString>open: </WhiteString>
          <YellowString>boolean </YellowString>
          <TealString>;</TealString>
        </CodeLineUp>
        <CodeLineUp>
          <span style={{ paddingRight: '24px' }}>4 +</span>
          <BlueString>handleClick: </BlueString>
          <PurpleString>{'('}</PurpleString>
          <OrangeString>param1: </OrangeString>
          <YellowString>string</YellowString>
          <TealString>, </TealString>
          <OrangeString>param1: </OrangeString>
          <YellowString>string</YellowString>
          <PurpleString>{')'} </PurpleString>
          <PurpleString>{'=>'} </PurpleString>
          <YellowString>void</YellowString>
          <TealString>;</TealString>
        </CodeLineUp>
        <CodeLineUp>
          5 + <YellowString>{'}'}</YellowString>
        </CodeLineUp>
        <Comment props={comments.roman} />
      </CodeArea>
      <CodeArea>
        <CodeLineDown>
          19 - <PurpleString>const {'['}</PurpleString>
          <WhiteString>topNews, setTopNews</WhiteString>
          <PurpleString>{']'}</PurpleString>
          <TealString> = </TealString>
          <BlueString>useState</BlueString>
          <PurpleString>{'()'}</PurpleString>
          <TealString>;</TealString>
        </CodeLineDown>
        <CodeLineUp>
          20 + <PurpleString>const </PurpleString>
          <WhiteString>topNews</WhiteString>
          <TealString> = </TealString>
          <BlueString>useSelector</BlueString>
          <PurpleString>{'('}</PurpleString>
          <BlueString>{'('}</BlueString>
          <OrangeString>state</OrangeString>
          <BlueString>{')'}</BlueString>
          <PurpleString> {'=>'}</PurpleString>
          <WhiteString> state.topNews</WhiteString>
          <PurpleString>{')'}</PurpleString>
          <TealString>;</TealString>
        </CodeLineUp>
        <Comment props={comments.oleg} />
      </CodeArea>
      <CodeArea>
        <CodeLine>
          44 <WhiteString>console.</WhiteString>
          <BlueString>log</BlueString>
          <PurpleString>{'('}</PurpleString>
          <GreenString>'Hello World!'</GreenString>
          <PurpleString>{')'}</PurpleString>
          <TealString>;</TealString>
        </CodeLine>
        <Comment props={comments.rasim} />
      </CodeArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 15px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
  gap: 15px;
`;

const CodeArea = styled.div`
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  color: #607b96;
  overflow: hidden;
  font-size: 14px;
  padding: 20px;
  background-color: #011221;
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

const CodeLine = styled.div`
  padding: 0px 10px;
`;

const CodeLineUp = styled.div`
  padding: 0px 10px;
  background-color: #01352b;
`;
const CodeLineDown = styled.div`
  padding: 0px 10px;
  background-color: #471818;
`;
