// Component 组件类
import React, { Component } from 'react';
// 导入svg文件
// import logo from './logo.svg';
// 导入css; react中个css不支持scoped
// 可以通过给根标签添加 类 限定样式的作用范围
import './App.css';

// 自定义组件类 App
// 继承于 Component
// class 类； extends 继承
class App extends Component {
  // render函数：返回视图模板，在视图模板中只能有一个根标签
  // react用到jsx语法，jsx支持js与html混写
  // jsx基本语法规则：遇到HTML标签（以< 开头）,就用html规则解析，遇到代码块（以 { 开头），就用js语法规则解析
  // react 中不支持指令
  render() {
    return (
      <div className="app">
        <h1>Hello React!</h1>
      </div>
    );
  }
}

// 导出组件
export default App;
