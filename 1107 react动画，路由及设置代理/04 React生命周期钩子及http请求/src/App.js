import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:'hello react'
    }
    this.change = this.change.bind(this)
  }
  change(){
    this.setState({
      message:'你好 react'
    })
  }
  render() {
    return (
      <div className="app">
        <h1>这是App组件</h1>
        <button onClick={this.change}>更新</button>
      </div>
    );
  }
  // 生命周期钩子
  componentWillMount() {
    console.log('将要挂载到dom上');
  }
  // 发请求获取组件所需的数据
  // 在react中处理请求，要使用第三方库，axios jquery
  componentDidMount() {
    console.log('已经挂载到DOM上');
    // 方式一：
    // axios.get('/reg').then(res=>{
    //   console.log(res.data);
    // })

    axios.get('/api/reg').then(res=>{
      console.log(res.data);
    })

    axios.get('/douyuapi/api/RoomApi/live').then(res=>{
      console.log(res.data);
    })

  }

  /*
  设置服务器代理：
  方式一： 在package.json中添加 proxy 属性，设置为 
        "proxy":"http://127.0.0.1:4000"
        这种方式，一次只能设置一个代理路径
  方式二：在package.json中添加 proxy 属性，设置为 
        "proxy":{
          "/api":{
            "target":"http://127.0.0.1:4000",
            "changeOrigin": true,
            "pathRewrite":{
              "^/api":""
            }
          },
          ...
        }
        这种方式可以同时设置多个代理
  
  */ 

  
  componentWillUpdate() {
    console.log('将要更新');
  }
  
  componentDidUpdate() {
    console.log('已经更新');
  }
  // 组件的清理操作：比如销毁定时器等操作
  componentWillUnMount() {
    console.log('将要卸载');
  }
  
  componentDidUnMount() {
    console.log('已经卸载');
  }
  
  
}

export default App;
