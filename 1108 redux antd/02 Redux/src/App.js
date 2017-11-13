import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'

import Add from './components/Add'
import Minus from './components/Minus'
import {add,minus} from './store/actions'

class App extends Component {
  render() {
    console.log(this);
    return (
      <div className="app">
        <h1>数值是：{this.props.count}</h1>
        {/* 改变内部 state 惟一方法是 dispatch 一个 action。 */}
        <Add onAddClick={(num)=>this.props.dispatch(add(num))}></Add>
        <Minus onMinusClick={(num)=>this.props.dispatch(minus(num))}></Minus>
      </div>
    );
  }
}
// 基于全局 state 
function select(state) {
  return {
    count: state.count
  }
}
// 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容。 connect() 的唯一参数是 selector。此方法可以从 Redux store 接收到全局的 state，然后返回组件中需要的 props。
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
