import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// npm install redux --save
// npm install react-redux --save
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './store/reducers'

// 创建 store 存放应用的状态
let store = createStore(reducers)

// 连接 redux
// 把App组件了解到Redux，让它能够 dispatch actions 以及从Redux store 中读取state
// 用react-redux提供的Provider，在渲染钱将根组件包裹进<Provider></Provider>
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>, 
  document.getElementById('root')
);
