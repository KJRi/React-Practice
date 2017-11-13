import React, {Component} from 'react'

import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            itmes:[
                {name:'lily',id:0},
                {name:'Tom',id:1},
                {name:'Lucy',id:2}
            ]
        }
    }
    render(){
        return (
            <div className="home">
                <header>首页</header>
                <ul>
                    {
                        this.state.itmes.map(item=>{
                            return <li key={item.id}>
                                    {/* 动态路由：传递参数 */}
                                    <Link to={"/chat/"+item.name}>{item.name}</Link>
                                   </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Home;