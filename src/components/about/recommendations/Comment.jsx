import { styled } from 'styled-components';

import { BiLink } from 'react-icons/bi';

export default function Comment({ props }) {
  return (
    <Wrapper>
      <CodeAreaHeader>
        <img
          style={{ width: '40px', borderRadius: '50%' }}
          src={props.photo}
          alt="mentor"
        />
        <div>
          <WhoName>{props.name}</WhoName>
          <WhoDate>{props.role}</WhoDate>
        </div>
        <BiLink size={23} />
      </CodeAreaHeader>
      <CommentBody>{props.comment}</CommentBody>
      <CommentFooter>
        <CommentButton>Reply </CommentButton>·
        <CommentButton>Edit </CommentButton>·
        <CommentButton>Resolve</CommentButton>
      </CommentFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 8px;
  background: #131d27;
  margin: 15px 0 5px 0;
  box-shadow: 0 0 3px #607b96;
`;

const CodeAreaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentBody = styled.div`
  margin-top: 5px;
  line-height: 20px;
  color: rgb(226, 226, 226);
  font-size: 15px;
`;

const CommentFooter = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 5px;
`;

const CommentButton = styled.button`
  color: #607b96;
  &:hover {
    color: white;
  }
`;

const WhoName = styled.div`
  color: #5565e8;
  font-size: 14px;
  font-weight: 700;
`;

const WhoDate = styled.div`
  color: #607b96;
  font-size: 13px;
  font-weight: 500;
`;
