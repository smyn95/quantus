import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function DualPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [aniMode, setAniMode] = useState(false);

  const onClickTab = (event: any) => {
    setTab(Number(event?.currentTarget.id));
  };

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode((prev) => !prev);
  };

  const dualArray = [
    'SPY',
    'EFA',
    'QQQ',
    'KOSPI',
    'KOSDAQ',
    'GLD',
    'VNQ',
    'TLT',
    'AGG',
    'VEA',
  ];
  const dualArray2 = ['AGG', 'LQD', 'SHY', 'IEF'];
  return (
    <>
      <Section>
        <Dual>
          <li>공격자산 01</li>
          <li onClick={onClickOpenModal}>
            {dualArray[tab]}
            <AllocationList tab={tab} aniMode={aniMode}>
              {dualArray.map((el: any, i: number) => (
                <li id={String(i)} key={i} onClick={onClickTab}>
                  {el}
                </li>
              ))}
            </AllocationList>
          </li>
        </Dual>
        <Dual>
          <li>공격자산 02</li>
          <li onClick={onClickOpenModal}>
            {dualArray[tab]}
            <AllocationList tab={tab} aniMode={aniMode}>
              {dualArray.map((el: any, i: number) => (
                <li id={String(i)} key={i} onClick={onClickTab}>
                  {el}
                </li>
              ))}
            </AllocationList>
          </li>
        </Dual>
      </Section>
      <Section>
        <Dual>
          <li>방어자산</li>
          <li>dd</li>
        </Dual>
      </Section>
    </>
  );
}
export const Section = styled.section`
  display: flex;
  gap: 30px;
  margin: 30px 0;
`;

export const Dual = styled.ul`
  li:last-of-type {
    width: 160px !important;
    height: 45px;
    border: 1px solid ${(props: any) => (props.aniMode ? '#ec6126' : '#9f9f9f')};
    &:after {
      content: '^';
      position: absolute;
      color: #ec6126;
      right: 10%;
      font-size: 20px;
      font-weight: 100;
      transform: ${(props: any) =>
        props.aniMode ? 'rotate(0deg)' : 'rotate(-180deg)'};
    }
    &:hover {
      border: 1px solid ${(props: any) => (props.aniMode ? '#ec6126' : 'white')};
    }
  }
`;

export const AllocationList: any = styled.data`
  position: absolute;
  top: 70px !important;
  display: flex;
  width: 480px;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 0;
  z-index: ${(props: any) => (props.aniMode ? '999' : '-1')};
  animation: ${(props: any) =>
    props.aniMode
      ? css`
          ${fadeDown} 0.3s ease-in-out 0.2s forwards
        `
      : css`
          ${fadeUp} 0.3s ease-in-out forwards
        `};

  li {
    height: 36px;
    background: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
      background-color: #ec612629;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
const fadeDown = keyframes`
  from{
    top: 0;
    opacity: 0;
  }
  to{
    opacity: 1;
    top: 2rem;
  }
`;

const fadeUp = keyframes`
  0%{
    opacity: 1;
    top: 4rem;
  }
  50%{
    opacity: 0;
    top: 0;
  }
  to{
    opacity: 0;
    top: 0;
  }
`;
