import React, { Component } from 'react';
import './App.css';

// react 过渡动画
// npm install react-addons-css-transition-group --save
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true
    }

    this.change = this.change.bind(this)
  }
  change(){
    // 当前状态的值依赖改变之前的状态值
    this.setState(prevState=>{
      return {
        show: !prevState.show
      }
    })
  }
  render() {
    return (
      <div className="app">
        <h1>这是App组件</h1>
        <p>
          component：指定要渲染成的标签元素，默认是span
          transitionName: 动画样式类的前缀（用法类似于 vue的动画）
          transitionEnterTimeout: 进入动画执行的时间
          transitionLeaveTimeout: 离开动画执行的之间
          transitionAppear: 是否在初次挂载的时候执行动画，如果为true，程序初始运行时加载一个动画效果，在样式中加上 fade-appear 类名
        </p>
        <p>
          为每一个ReactCSSTransitionGroup组件的族元素设置一个key属性，就算它只有一个子元素，key值也是必须的，设置key值是为了让react确定那个子元素是插入了，移除了，或者保持现有的状态
        </p>

        <button onClick={this.change}>动画</button>
        <ReactCSSTransitionGroup
        component="div"
        transitionName="fade"
        transitionEnter={true}
        transitionEnterTimeout={1000}
        transitionLeave={true}
        transitionLeaveTimeout={1000}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        >
          {this.state.show && <p key={this.state.show}>show的取值为真显示</p>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
