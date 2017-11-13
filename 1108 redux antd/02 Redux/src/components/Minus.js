import React,{Component} from 'react'
export default class Minus extends Component{
    constructor(props){
        super(props);
        this.minus = this.minus.bind(this);
    }
    minus(){
        this.props.onMinusClick(1);
    }
    render(){
        return (
            <div>
                <h1>Minus：<button onClick={this.minus}>减一</button></h1>
            </div>
        )
    }
}