import { styled } from 'styled-components';

export default function WorkExperience({ value, codeLine, index }) {
  return (
    <>
      <div>
        {codeLine}
        <TextLine index={index}>
          {codeLine >= 10 ? '\u00A0' : '\u00A0\u00A0'}
          {value}
        </TextLine>
      </div>
    </>
  );
}

const TextLine = styled.span`
  color: ${(props) =>
    props.index === 0 ? '#e99287' : props.index === 1 ? '#4d5bce' : '#a7adba'};
`;
