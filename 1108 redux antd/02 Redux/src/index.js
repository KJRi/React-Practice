import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// npm install redux --save
// npm install react-redux --save
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './store/reducers'

// 创建 Redux store 来存放应用的状态。
let store = createStore(reducers);


// 连接 redux
// 将 App 组件连接到 Redux 并且让它能够 dispatch actions 以及从 Redux store 读取到 state。用 react-redux 提供的 Provider，并且在渲染之前将根组件包装进 <Provider>。
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);
