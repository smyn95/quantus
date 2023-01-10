import { useState } from 'react';
import * as S from '../../app.styles';

export default function AddDataPage(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataTab, setDataTab] = useState(0);

  const dataArray = [
    '',
    '1약품 (A000020)',
    '2약품 (A000020)',
    '3약품 (A000020)',
    '4약품 (A000020)',
    '5약품 (A000020)',
    '6약품 (A000020)',
    '7약품 (A000020)',
    '8약품 (A000020)',
    '9약품 (A000020)',
    '10약품 (A000020)',
    '11약품 (A000020)',
    '12약품 (A000020)',
    '13약품 (A000020)',
    '14약품 (A000020)',
  ];

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
          {dataArray[dataTab]}
          <S.DataList dataTab={dataTab} isOpen={isOpen}>
            {dataArray.map((el: any, i: number) => (
              <li id={String(i)} key={i} onClick={onClickDataTab}>
                {el}
              </li>
            ))}
          </S.DataList>
        </li>
      </S.AllocationMenu>
    </>
  );
}
