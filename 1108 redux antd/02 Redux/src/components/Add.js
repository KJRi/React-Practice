import React,{Component} from 'react'
export default class Add extends Component{
    constructor(props){
        super(props);
        this.addNum = this.addNum.bind(this);
    }
    addNum(){
        this.props.onAddClick(1);
    }
    render(){
        return (
            <div>
                <h1>Add：<button onClick={this.addNum}>加一</button></h1>
            </div>
        )
    }
}