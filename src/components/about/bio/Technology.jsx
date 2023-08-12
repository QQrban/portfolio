import useMediaQuery from '../../../shared/hooks/useMediaQuery';
import { GreenString, WhiteString, YellowString } from '../../shared/colors';

export default function Technology({ technology, level, line }) {
  const matchesJS = useMediaQuery('(min-width: 567px)');

  return (
    <div>
      {line}
      {'  '}
      <YellowString>{'{ '}</YellowString>
      <WhiteString>name: </WhiteString>
      <GreenString>{`'${technology}'`}, </GreenString>
      <WhiteString>
        {matchesJS ? 'proficiency: ' : `proficiency: ${'\n'}`}
      </WhiteString>
      <GreenString>{`'${level}'`},</GreenString>
      <YellowString>{' }'}</YellowString>
      <GreenString>,</GreenString>
    </div>
  );
}
