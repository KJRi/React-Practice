// Component 组件类
import React, { Component } from 'react';
// 导入css; react中个css不支持scoped
// 可以通过给根标签添加 类 限定样式的作用范围
import './App.css';

import Hello from './components/Hello'

// 自定义组件类 App
// 继承于 Component
// class 类； extends 继承
class App extends Component {
  // 组件的构造函数，需要接受一个props对象作为参数
  // 自定义组件类，在组件类的构造函数中必须调用父类的构造函数，把props当做参数数传递进去，否则 this 不能正常使用
  constructor(props){
    super(props)
    // 在react组建中最重要的两个概念分别是：props属性 和 state状态
    // 1. react把组件看成是一个状态机（state），通过与用户的交互，实现不同状态，然后渲染UI，让用户界面和数据保持一致
    // 2.props来自于组件外部，这个属性不能再组件内部修改，state 可以在组件内部修改，但是不能再外部访问到
    // 3. state 和 props 主要的却别在于props是不可变的，而state可以根据用户交互来改变，这就是为什么组件需要定义 state来更新和修改数据，而子组件只能通过props来传递数据
    this.state = {
      message:'hello app!',
      age: 6,
      isShow:true,
      stus:[
        {name:'Tom',age:22},
        {name:'Lily',age:23},
        {name:'Lucy',age:24}
      ],
      isChoose: false,
      count: 0
    }

    // 改变 this 的指向为当前组件类的实例
    this.change = this.change.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.choose = this.choose.bind(this)
    this.addCount = this.addCount.bind(this)
  }
  // render函数：返回视图模板，在视图模板中只能有一个根标签
  // react用到jsx语法，jsx支持js与html混写
  // jsx基本语法规则：遇到HTML标签（以< 开头）,就用html规则解析，遇到代码块（以 { 开头），就用js语法规则解析
  // react 中不支持指令
  render() {
    // this 组件类的实例
    console.log(this);
    return (
      <div className="app">
        <h1>Hello React!</h1>
        <p>{2+3}</p>
        <p>
          message:{this.state.message}
        </p>

        <p>条件渲染：&& 用法：condition && expression，如果条件为true，&&后面的表达式会输出显示；如果条件为false，react会忽略并跳过它 </p>
        { this.state.age>3 && <p>可以去上学</p> }

        <p>布尔变量：在react中布尔类型的变量在页面中不展示</p>
        isShow: { this.state.isShow }

        <p>
          列表渲染：使用map函数，item数组中的元素，index数组中的元素对应的索引值，返回一个视图；
          列表渲染时主要给每一个元素设置key值
        </p>
        <ul>
          {
            this.state.stus.map((item,index)=>{
              return <li key={index}>{item.name} | {item.age}</li>
            })
          }
        </ul>

        <p>事件绑定：事件的回调函数中 this 默认是 undefined；可以在构造函数中改变 this的指向</p>
        <button onClick={this.change}>修改message</button>

        <p>
          约束性组件：由react管理表单元素的value
          非约束性组件：表单元素的value 是由元原生的DOM管理
        </p>
        <p>
          约束性组件的使用：input[type=text] 双向数据绑定：value绑定状态的属性值，监听onChange事件修改状态的属性值；
          原生的DOM事件onchange时输入变化并失去输入焦点事触发，在react中 onChange 是输入变化的时候触发，类似于oninput事件
        </p>
        <input type="text" value={this.state.message} onChange={this.changeValue} />
        {this.state.message}

        <p>
          非约束性组件：这个 defaultValue 其实就是原生DOM中的 value 属性，这样写出的组件，其中value的值就是用户输入的内容，react完全不管理其输入的过程
        </p>
        <input type="text" defaultValue={this.state.message} />

        <p>
          对比 约束性组件 和  非约束性组件的输入流程：
          约束性组件：用户输入A -> 触发onChange事件 -> changValue中设置message的值为 A -> 渲染input 使它的value变成A；
          非约束性组件：用户输入A -> input中显示A；
          正是因为这样，强烈推荐使用约束性组件，应为约束性组件能更好的控制组件的生命流程
        </p>

        <p>textarea:双向绑定与 input[type=text]写法一致</p>
        <textarea cols="30" rows="10" value={this.state.message} onChange={this.changeValue}></textarea>
        
        <p>checkbox 双向绑定：复选框改变的不是value，而是 checked 的状态；用checked绑定状态的属性，onChange监听事件改变状态的属性</p>
        <input type="checkbox" checked={this.state.isChoose} onChange={this.choose} /> {this.state.isChoose ? '男' : '女'}
        
        <p>select双向绑定：与input[type=text]用法一致</p>
        选择的专业：
        <select value={this.state.message} onChange={this.changeValue}>
          <option value="html">html</option>
          <option>ui</option>
          <option>bigdata</option>
        </select>
        {this.state.message}

        <p>
          <button onClick={this.addCount}>count++</button> 
          {this.state.count}
        </p>

        <p>
          父子组件通信：
          父组件->子组件：在子组件中直接使用 this.props 获取
          子组件->父组件：父组件自定义函数，子组件调用函数
        </p>
        <Hello message={this.state.message} title={<h2>标题2</h2>}
        onPassData={this.appFun}
        >
          <a href="#">百度一下</a>
        </Hello>

        <br/>
      </div>
    );
  }

  appFun(data){
    console.log('子组件传值过来');
    console.log(data);
  }

  addCount(){
    // 改变状态的属性，使用一个操作函数，函数的参数 prevState 是修改前的状态
    this.setState((prevState)=>{
      // console.log(arguments);
      console.log(prevState);
      return {
        count: prevState.count+1
      }
    })
  }

  choose(ev){
    this.setState({
      isChoose: ev.target.checked
    })
  }

  changeValue(ev){
    // 得到输入的内容
    console.log(ev.target.value);
    this.setState({
      message: ev.target.value
    })
  }
  

  change(ev){
    console.log('change 函数执行了');
    // console.log(this);
    // console.dir(ev);
    // 直接修改状态不是 响应式的，视图也不会更新
    // this.state.message = '你好 app!';
    // console.log(this.state.message);

    // 通过 setState 方来修改数据，是响应式的
    // 参数是一个对象，对象的属性：message 就是我们要修改的 属性
    this.setState({
      message: '你好 app'
    })
  }

}

// 导出组件
export default App;
