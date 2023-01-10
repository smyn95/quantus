import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Noto Sans KR, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  body {
    font-size: 16px;
    background-color: #0e0e0e;
    color: white;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  button {
    border: none;
    background: #3e3e3e;
    color: black;
    border-radius: 6px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    font-size: 14px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
