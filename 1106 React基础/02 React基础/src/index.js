// react.js：react的核心代码
// react-dom.js： react关于dom的操作
import React from 'react';
import ReactDOM from 'react-dom';
// 导入css文件
// import './index.css';
// 导入自定义组件 App
import App from './App';

// 渲染视图
// 参数1：视图的模板，自定义的组件 <App/> 或者 <App></App>
// 参数2：容器标签，id为root的div标签
ReactDOM.render(<App/>, document.getElementById('root'));
