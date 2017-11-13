import React, { Component } from 'react';
import './App.css';

// 引入 antd UI组件库
import {Button, Icon, DatePicker,Calendar} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Button type="primary" shape="circle" icon="search" />
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <p>
          <Icon type="step-forward" />
          <Icon type="up-circle" />
        </p>
        <DatePicker></DatePicker>
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
