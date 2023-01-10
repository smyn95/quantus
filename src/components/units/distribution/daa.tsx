import * as S from '../../../app.styles';
import DefensePage from '../defense';
import DualPage from '../dual';
import KanariaPage from '../kanaria';

export default function DaaPage(props: any) {
  const daa = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  return (
    <>
      <S.Allocation>
        <S.Section>
          {daa.map((el) => (
            <DualPage
              dualArray={props.dualArray}
              title={'공격자산'}
              key={el}
              el={el}
            />
          ))}
        </S.Section>
        <S.Section>
          {props.vaaDefenseArray.map((el: any) => (
            <DefensePage
              defenseArray={props.defenseArray}
              title={'방어자산'}
              key={el}
              el={el}
            />
          ))}
        </S.Section>
        <S.Section>
          {props.dual.map((el: any) => (
            <KanariaPage
              kanariaArray={props.kanariaArray}
              title={'카라니아 자산'}
              key={el}
              el={el}
            />
          ))}
        </S.Section>
      </S.Allocation>
    </>
  );
}
