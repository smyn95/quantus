import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Fixed = styled.section`
  z-index: 1100;
  left: auto;
  right: 0px;
  top: 0px;
  position: fixed;
  width: 100%;
  background: black;
`;

export const Wrapper = styled.div`
  width: 945px;
  margin: 0 auto;
  height: 100%;
`;
export const BannerWrapper = styled.div`
  width: 945px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Banner = styled.section`
  width: 100%;
  background: red;
  height: 44px;
  color: black;

  span {
    cursor: pointer;
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Header = styled.header`
  height: 85px;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  img {
    width: 156px;
  }
`;

export const MyInfo = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  li {
    color: white;
    font-size: 14px;
    &:last-of-type {
      border: 2px solid white;
      border-radius: 50%;
      font-size: 12px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 52px;
  border-block: 1px solid #151515;
  margin-bottom: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  li {
    color: white;
    cursor: pointer;
    position: relative;

    &:nth-of-type(2) {
      color: red;
    }

    &:last-of-type {
      margin-right: 20%;
    }

    &.dot:after {
      content: '';
      width: 6px;
      height: 6px;
      background: red;
      position: absolute;
      top: -6px;
      right: -6px;
      border-radius: 50%;
    }
  }
`;

export const StrategyBtn: any = styled.button`
  background: ${(P: any) => (P.strategy ? '#ec6126' : '#3e3e3e')};
  cursor: ${(P: any) => (P.strategy ? 'pointer' : 'help')};
`;

export const Strategy = styled.section`
  background: black;
  height: 150px;
  margin-top: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 180px;
  z-index: 1;

  input {
    width: 472px;
    outline: none;
    border: none;
    background: transparent;
    color: white;
    border-bottom: 2px solid white;
    height: 52px;
    &::placeholder {
      color: white;
      font-size: 30px;
      font-weight: bold;
    }
  }
  input:focus::placeholder {
    color: transparent;
  }
`;
export const Span = styled.span`
  color: #ffffffb3;
  font-size: 12px;
  margin-top: 10px;
  display: block;
`;

export const H1 = styled.h1`
  font-size: 18px;
`;

export const Allocation = styled.section`
  position: relative;

  ul {
    padding-top: 30px;
    > li {
      &:last-of-type {
        cursor: pointer;
        margin-top: 18px;
        width: 480px;
        height: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 1px solid #9f9f9f;

        input {
          border: none;
          background: transparent;
          width: 100%;
          height: 100%;
          text-align: center;
        }
      }
    }
  }
`;

export const AllocationMenu: any = styled.ul`
  width: 480px;
  > li:last-of-type {
    border: 1px solid ${(props: any) => (props.aniMode ? '#ec6126' : '#9f9f9f')};
    &:after {
      content: '^';
      position: absolute;
      color: #ec6126;
      right: 3%;
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

export const Balance = styled.ul`
  > li {
    &:last-of-type {
      &:after {
        content: '%';
        position: absolute;
        color: white;
        right: 3%;
        font-size: 16px;
        font-weight: 100;
      }
    }
  }

  input:focus-visible {
    outline: 1px solid #ec6126;
    border-radius: 4px;
  }
`;

export const Test = styled.button`
  background: linear-gradient(
    284deg,
    rgb(236, 38, 38) 0%,
    rgb(236, 97, 38) 100%
  );
  width: 160px;
  height: 53px;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  display: block;
`;

export const Add = styled.section`
  margin-top: 80px;
  h1 {
    font-size: 18px;
  }
  button {
    margin-block: 30px;
    background: #ec6126;
    width: 80px;
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
