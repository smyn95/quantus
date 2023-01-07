import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function KanariaPage(props: any) {
  const [, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [aniMode, setAniMode] = useState(false);

  const onClickTab = (event: any) => {
    setTab(Number(event?.currentTarget.id));
  };
  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode((prev) => !prev);
  };
  return (
    <Dual>
      <li>
        {props.title} {props.el}
      </li>
      <li onClick={onClickOpenModal}>
        {props.kanariaArray[tab]}

        <AllocationList tab={tab} aniMode={aniMode}>
          {props.kanariaArray.map((el: any, i: number) => (
            <li id={String(i)} key={i} onClick={onClickTab}>
              {el}
            </li>
          ))}
        </AllocationList>
      </li>
    </Dual>
  );
}

export const Dual = styled.ul`
  > li:last-of-type {
    width: 160px !important;
    height: 45px;
    margin-top: 18px;
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

export const AllocationList: any = styled.ul`
  position: absolute;
  top: -300% !important;
  display: flex;
  width: 160px;
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
    &:nth-of-type(${(props: any) => (props.tab ? props.tab : 5)}) {
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
