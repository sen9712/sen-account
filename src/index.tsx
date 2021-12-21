/*
 * @Author: your name
 * @Date: 2021-12-09 11:58:46
 * @LastEditTime: 2021-12-21 16:57:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \my-app\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
