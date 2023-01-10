import * as S from '../../../app.styles';
import DefensePage from '../defense';
import DualPage from '../dual';

export default function VaaPage(props: any) {
  const vaa = ['01', '02', '03', '04'];

  return (
    <>
      <S.Allocation>
        <S.Section>
          {vaa.map((el) => (
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
      </S.Allocation>
    </>
  );
}
