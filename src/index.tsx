import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './router';
// import "antd/dist/antd.less";
import "../src/assets/style/index.less";


ReactDOM.render(
    <MyRouter />,
    document.getElementById('root')
);