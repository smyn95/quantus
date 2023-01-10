import { useState } from 'react';
import * as S from '../../../app.styles';
import DefensePage from '../defense';
import DualPage from '../dual';

export default function DualMomentumPage(props: any) {
  const [aniMode, setAniMode] = useState(false);

  const month = ['3개월', '6개월', '12개월'];

  const onClickOpenModal = () => {
    setAniMode((prev) => !prev);
  };

  return (
    <>
      <S.Allocation>
        <S.Section>
          {props.dual.map((el: any) => (
            <DualPage
              dualArray={props.dualArray}
              title={'공격자산'}
              key={el}
              el={el}
            />
          ))}
        </S.Section>
        <S.Section>
          <DefensePage defenseArray={props.defenseArray} title={'방어자산'} />
        </S.Section>

        <S.Add>
          <h1>페어 추가 (지원 예정)</h1>
          <button className='disabled' type='button'>
            추가하기
          </button>
        </S.Add>

        <S.Allocation>
          <S.AllocationMenu aniMode={aniMode}>
            <li>모멘텀 기간</li>
            <li onClick={onClickOpenModal}>
              {month[props.monthTab]}
              <S.AllocationList monthTab={props.monthTab} aniMode={aniMode}>
                {month.map((el: any, i: number) => (
                  <li id={String(i)} key={i} onClick={props.onClickMonthTab}>
                    {el}
                  </li>
                ))}
              </S.AllocationList>
            </li>
          </S.AllocationMenu>
        </S.Allocation>
      </S.Allocation>
    </>
  );
}
