import { useState } from 'react';
import * as S from '../../../app.styles';

export default function AllocationPage(props: any) {
  const [, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const btnArray = ['전략배분 (정적자산배분)', '듀얼모멘텀', 'VAA', 'DAA'];

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode((prev) => !prev);
  };
  console.log(props.tab);

  return (
    <>
      <S.H1>자산배분 설정</S.H1>
      <S.AllocationMenu aniMode={aniMode}>
        <li>자산배분 알고리즘</li>
        <li onClick={onClickOpenModal}>
          {btnArray[props.tab]}
          <S.AllocationList tab={props.tab} aniMode={aniMode}>
            {btnArray.map((el: any, i: number) => (
              <li id={String(i)} key={i} onClick={props.onClickTab}>
                {el}
              </li>
            ))}
          </S.AllocationList>
        </li>
      </S.AllocationMenu>
    </>
  );
}
