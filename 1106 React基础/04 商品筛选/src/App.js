import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      goodslist:[
        {category:'体育用品',name:'足球',price:'￥129.99',stocked:true},
        {category:'体育用品',name:'篮球',price:'￥169.99',stocked:true},
        {category:'体育用品',name:'排球',price:'￥139.99',stocked:false},
        {category:'电子产品',name:'苹果X',price:'￥8999.99',stocked:true},
        {category:'电子产品',name:'华为M10',price:'￥5999.99',stocked:true},
        {category:'电子产品',name:'小米6',price:'￥2999.99',stocked:false}
      ],
      keyword:'',
      isChoose: false
    }

    this.change = this.change.bind(this)
    this.choose = this.choose.bind(this)
  }
  render() {
    // 存放每一行要显示的产品和价钱
    var rows = [];
    // 记录上一行商品的种类
    var category = null;
    this.state.goodslist.forEach((item,index)=>{
      // 关键字的过滤：有这个关键字不会执行判断语句，没这个关键字，执行判断语句 return
      // 库存过滤：当选中复选框并且库存为 false的时候执行return进行过滤
      if ((this.state.isChoose&&!item.stocked) || item.name.indexOf(this.state.keyword)===-1) {
        return;
      }

      if (category !== item.category) {
        rows.push(<tr key={item.category}><td colSpan="2">{item.category}</td></tr>)
      }
      // 记录商品的种类
      category = item.category;
      
      rows.push(
        <tr key={index} style={ {color:item.stocked ? 'black' : 'red'} }>
          <td>{item.name}</td><td>{item.price}</td>
        </tr>
      )
    })
    console.log(rows);
    return (
      <div className="app">
        <input type="text" value={this.state.keyword} onChange={this.change} />
        <input type="checkbox" checked={this.state.isChoose} onChange={this.choose} /> 只显示有货
        <table>
          <thead>
            <tr>
              <th>产品</th><th>价格</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
  choose(ev){
    this.setState({
      isChoose: ev.target.checked
    })
  }
  change(ev){
    this.setState({
      keyword: ev.target.value
    })
  }
}

export default App;
