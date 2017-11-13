import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList:[],
      text:''
    }

    this.change = this.change.bind(this)
    this.commit = this.commit.bind(this)
  }
  render() {
    return (
      <div className="app">
        <h1>代办事项</h1>
        <input type="text" value={this.state.text} onChange={this.change} />
        <button onClick={this.commit}>提交</button>
        <ul>
          {
            this.state.todoList.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
  
  commit(){
    // console.log(this.state.todoList);
    this.setState(prevState=>{
      return {
        // 把输入框的内容添加到 todoList 数组中
        todoList: prevState.todoList.concat([this.state.text]),
        text: '' // 清空输入框的内容
      }
    })
  }
  // 绑定 text 
  change(ev){
    this.setState({
      text: ev.target.value
    })
  }
}

export default App;
