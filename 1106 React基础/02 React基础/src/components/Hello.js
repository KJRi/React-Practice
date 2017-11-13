import React, {Component} from 'react'

// 自定义组件Hello
class Hello extends Component {
    constructor(props){
        super(props)
        this.helloFun = this.helloFun.bind(this)
    }
    render(){
        console.log(this);
        // this.props 存放的是父组件传递过来的数据，不需要接受，直接使用
        // this.props.children 存放的是组件的标签内容，类似vue的slot
        return (
            <div className="hello">
                <h1>这是子组件</h1>
                <p>message:{this.props.message}</p>
                {this.props.title}
                <p>{this.props.children}</p>
                <button onClick={this.helloFun}>点击传值</button>
            </div>
        )
    }
    helloFun(){
        // 往父组件传递数据，调用父组件传递过来的方法，参数100 就是要传递给父组件的数据
        this.props.onPassData(100)
    }
}

// 导出组件类
export default Hello;