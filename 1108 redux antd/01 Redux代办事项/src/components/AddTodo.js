import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodos} from '../store/actions'

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.commit = this.commit.bind(this);
  }
  commit(ev){
    ev.preventDefault();
    console.log(this);
    var value = this.refs.input.value;  //输入框的内容
    // 改变内部 state 唯一的方法时 dispatch 一个 action
    this.props.dispatch(addTodos(value))
    this.refs.input.value = ''
  }
  render(){
    return (
      <div className="addtodo">
        <form onSubmit={this.commit}>
          {/* 添加 ref 属性，可以通过 this.refs.input找到 这个input标签 */}
          <input type="text" ref="input" />
          <input type="submit" value="提交"/>
          <ul>
            {
              this.props.todolist.map((item, index)=>{
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </form>
      </div>
    )
  }
}
// 基于全局的 state
function select(state) {
  return {
    todolist: state.list
  }
}

// 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法在组件的props属性中，以及得到全局的 state
export default connect(select)(AddTodo)