import React, { Component } from 'react';
import './App.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todolist:[],
      text: ''
    }
    this.change = this.change.bind(this)
    this.commit = this.commit.bind(this)
    this.remove = this.remove.bind(this)
  }
  render() {
    return (
      <div className="app">
        <h1>代办事项</h1>
        <input type="text" value={this.state.text} onChange={this.change} />
        <button onClick={this.commit}>提交</button>
        <ReactCSSTransitionGroup
        component="ul"
        transitionName="remove"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        >
          {
            this.state.todolist.map((item,index)=>{
              return <li onClick={ () => {this.remove(index)} } key={index}>{item}</li>
            })
          }
        </ReactCSSTransitionGroup>

        {/* 写方法时，加不加圆括号： 
        不加圆括号：把函数赋值给onClick，点击时执行函数；this.remove
        加上圆括号：是把函数调用执行的返回值赋值给onclick；this.remove()
        标签加载到DOM时函数就会自动执行，点击时执行 的是函数的返回值，如果函数的返回值不是一个函数，点击时就没有操作
        */}
        {/* <button onClick={this.remove()}>click</button> */}
      </div>
    );
  }

  remove(index){
    // console.log('remove');
    // return function() {
    //   console.log('he heh heheh');
    // }

    console.log(index);
    this.state.todolist.splice(0,1)
    this.setState(prevState=>{
      return {
        todolist: prevState.todolist
      }
    })
  }
  commit(){
    this.setState(prevState=>{
      return {
        todolist: prevState.todolist.concat([this.state.text]),
        text: ''
      }
    })
  }
  change(ev){
    this.setState({
      text: ev.target.value
    })
  }
}

export default App;


// () => {this.remove(index)}
//  function(){
//    return this.remove(index)
//  }