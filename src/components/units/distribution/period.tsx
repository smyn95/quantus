import { useState } from 'react';
import * as S from '../../../app.styles';

export default function PeriodPage(props: any) {
  const [aniMode, setAniMode] = useState(false);
  const [addData, setAddData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dataTab, setDataTab] = useState(0);
  const [option, setOption] = useState(0);

  const btnArray = [
    '월별',
    '분기별',
    '반기별',
    '매년',
    '하지 않음 (Buy-and-Hold)',
  ];

  const onClickOpenModal = () => {
    setAniMode((prev) => !prev);
  };

  const onClickAdd = () => {
    setAddData(true);
  };

  const optionEntity = (operation: string) => () => {
    if (operation === 'plus') {
      setOption((prev) => prev + 1);
    }
    if (operation === 'minus') {
      if (option === 0) return;
      setOption((prev) => prev - 1);
    }
  };

  const onClickDataModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDataTab = (event: any) => {
    setDataTab(Number(event?.currentTarget.id));
  };
  return (
    <>
      <S.AllocationMenu aniMode={aniMode}>
        <li>주기 리밸런싱</li>
        <li onClick={onClickOpenModal}>
          {btnArray[props.monthTab]}
          <S.AllocationList monthTab={props.monthTab} aniMode={aniMode}>
            {btnArray.map((el: any, i: number) => (
              <li id={String(i)} key={i} onClick={props.onClickMonthTab}>
                {el}
              </li>
            ))}
          </S.AllocationList>
        </li>
      </S.AllocationMenu>
      <S.Balance>
        <li>밴드 리밸런싱</li>
        <li>
          <input
            type='number'
            placeholder='리밸런싱 밴드 기준을 입력해주세요'
          />
        </li>
      </S.Balance>
      <S.Span>0~100%까지 입력할 수 있습니다. (0 입력시 비활성화)</S.Span>
      <S.Add>
        <h1>자산군 추가</h1>
        {addData && (
          <>
            {new Array(option).fill(1).map((_, i) => (
              <>
                <S.Data isOpen={isOpen} dataTab={dataTab}>
                  <ul>
                    <li>자산</li>
                    <li onClick={onClickDataModal}>
                      삼양홀딩스
                      <ul>
                        <li onClick={onClickDataTab}>삼양홀딩스</li>
                      </ul>
                    </li>
                  </ul>
                  <S.Balance>
                    <li>비중</li>
                    <li>
                      <input
                        type='number'
                        defaultValue={100}
                        maxLength={100}
                        pattern='[0-9]*'
                      />
                    </li>
                  </S.Balance>
                  <S.Span>0~100까지 입력할 수 있습니다.</S.Span>
                </S.Data>
                <S.DelBtn onClick={optionEntity('minus')}>삭제하기</S.DelBtn>
              </>
            ))}
            <button onClick={optionEntity('plus')}>추가하기</button>
          </>
        )}
        {!addData && <button onClick={onClickAdd}>추가하기</button>}
      </S.Add>
    </>
  );
}
