import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { globalStyles } from '../src/commons/styles/globalStyles';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
