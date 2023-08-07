import { styled } from 'styled-components';

import useMediaQuery from '../../shared/hooks/useMediaQuery';

export default function Technology({ technology, level, line }) {
  const matchesJS = useMediaQuery('(min-width: 567px)');

  return (
    <div>
      {line}
      {'  '}
      <CurlyBrackets>{'{ '}</CurlyBrackets>
      <KeyName>name: </KeyName>
      <ValueString>{`'${technology}'`}, </ValueString>
      <KeyName>{matchesJS ? 'proficiency: ' : `proficiency: ${'\n'}`}</KeyName>
      <ValueString>{`'${level}'`},</ValueString>
      <CurlyBrackets>{' }'}</CurlyBrackets>
      <Coma>,</Coma>
    </div>
  );
}

const CurlyBrackets = styled.span`
  color: #fac863;
`;

const KeyName = styled.span`
  color: white;
`;

const ValueString = styled.span`
  color: #99c794;
`;

const Coma = styled.span`
  color: #99c794;
`;
