import { useState } from 'react';
import * as S from '../../app.styles';

export default function AddDataPage(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataTab, setDataTab] = useState(0);

  const onClickDataModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDataTab = (event: any) => {
    setDataTab(Number(event?.currentTarget.id));
  };

  return (
    <>
      <S.AllocationMenu isOpen={isOpen}>
        <li>자산 {props.i + 1}</li>
        <li onClick={onClickDataModal}>
          {props.dataArray[dataTab]}
          <S.DataList dataTab={dataTab} isOpen={isOpen}>
            {props.dataArray.map((i: number) => (
              <li id={String(i)} key={i} onClick={onClickDataTab}>
                삼양홀딩스 (A000{i + 1})
              </li>
            ))}
          </S.DataList>
        </li>
      </S.AllocationMenu>
    </>
  );
}
