import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Fixed = styled.section`
  z-index: 1100;
  left: auto;
  right: 0px;
  top: 0px;
  position: fixed;
  width: 100%;
  background: #0e0e0e;
`;

export const Wrapper = styled.div`
  padding: 0 300px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;

  .ant-picker-range {
    border-radius: 4px;
    width: 600px;
    background: transparent;
    height: 45px;

    input::placeholder {
      color: white;
    }
    .ant-picker-separator {
      color: white;
    }
    .ant-picker-suffix {
      color: #ec6126;
    }
    .ant-picker-input > input {
      color: #fff;
    }
  }
`;

export const BannerWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 300px;
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
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
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
  padding: 0 300px;
  background: #0e0e0e;
  height: 150px;
  margin-top: 15%;
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
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 0;
`;

export const Allocation = styled.section`
  position: relative;
  flex-wrap: wrap;
  width: 840px;

  ul {
    > li {
      &:last-of-type {
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

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
  width: 600px;
  padding-top: 30px;
  > li:last-of-type {
    border: 1px solid ${(props: any) => (props.aniMode ? '#ec6126' : '#9f9f9f')};
    height: 50px;
    margin-top: 18px;
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

export const AllocationList: any = styled.ul`
  position: absolute;
  top: 60px !important;
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: center;
  background: black;
  opacity: 0;
  z-index: ${(props: any) => (props.aniMode ? '9999' : '-1')};
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

    &:nth-of-type(
        ${(props: any) =>
            props.monthTab || props.tab ? (props.monthTab || props.tab) + 1 : 1}
      ) {
      background-color: #ec612629;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const Balance = styled.ul`
  padding-top: 30px;
  width: 600px;
  > li {
    &:last-of-type {
      border: 1px solid #9f9f9f;
      height: 50px;
      margin-top: 18px;
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
  align-self: center;
  margin: 10% 0;
  background: linear-gradient(
    284deg,
    rgb(236, 38, 38) 0%,
    rgb(236, 97, 38) 100%
  );
  width: 160px;
  height: 53px;
  font-size: 18px;
  font-weight: bold;
`;

export const TestOnLoading = styled.button`
  align-self: center;
  margin: 10% 0;
  width: 160px;
  height: 53px;
  border: 1px solid #aaa;
  background: transparent;
  position: relative;

  span {
    background: linear-gradient(
      284deg,
      rgb(236, 38, 38) 0%,
      rgb(236, 97, 38) 100%
    );
    height: 100%;
    max-width: 100%;
    min-width: 0%;
    border-radius: 4px;
    text-align: center;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const GraphPercent: any = styled.span`
  width: ${(props: any) => {
    return `${props.graph}%`;
  }};
  transition: 1s;
`;

export const Date = styled.section`
  width: 600px;
  padding-top: 24px;
  ul {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    li {
      width: 50%;
    }
  }
`;

export const Data = styled.data``;

export const DataList: any = styled.ul`
  position: absolute;
  top: -610% !important;
  width: 600px;
  height: 290px;
  overflow-y: auto;
  background: black;
  opacity: 0;
  z-index: ${(props: any) => (props.isOpen ? '9999' : '-1')};
  animation: ${(props: any) =>
    props.isOpen
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
    justify-content: flex-start;
    padding-left: 20px;
    &:last-of-type {
      justify-content: flex-start !important;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const DelBtn = styled.button`
  background: black !important;
  color: white;
  margin-right: 15px;
`;

export const Add = styled.section`
  margin-top: 80px;
  h1 {
    font-size: 18px;
  }
  button {
    margin-top: 30px;
    background: #ec6126;
    width: 80px;

    &.disabled {
      background: #3e3e3e;
      cursor: Default;
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

export const Footer = styled.footer`
  background: #000;
  height: 223px;
  width: 100%;
  padding: 0 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    li {
      width: 50%;
      color: #6e6e6e;
      margin: 1% 0;

      &:nth-of-type(even) {
        text-align: right;
      }
      &:nth-of-type(2) {
        text-decoration: underline;
        color: #9f9f9f;
      }
      &:nth-of-type(4) {
        font-size: 14px;
      }
    }
  }
`;
