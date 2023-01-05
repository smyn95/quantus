import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { globalStyles } from './commons/styles/globalStyles';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
