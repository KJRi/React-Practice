import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Info from './Info'

class Chat extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
    }
    back(){
        this.props.history.go(-1)
    }
    render(){
        // 使用路由时，切换页面会由父组件默认传递过来几个参数在this.props里面
        // this.props.match 存储路由相关内容
        // this.props.match.params 路由传递的参数信息
        console.log(this);
        return (
            <div className="chat">
                <header>
                    <button onClick={this.back}>返回</button>
                    与{this.props.match.params.name}聊天中
                </header>
                <h2>{this.props.match.params.name} 说：你真漂亮！</h2>

                {/* 子路由
                this.props.match.url 当前页的url信息 */}
                <ul>
                    <li><Link to={this.props.match.url+"/info"}>个人信息</Link></li>
                    <li><Link to={this.props.match.url+"/message"}>消息详情</Link></li>
                </ul>
                {/* 子路由的配置信息 */}
                {/* <Route path={this.props.match.url} exact component={Info}></Route> */}
                <Route path={this.props.match.url+"/info"} component={Info}></Route>
                <Route path={this.props.match.url+"/message"} component={Info}></Route>
            </div>
        )
    }
}

export default Chat;