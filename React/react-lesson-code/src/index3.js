import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'

class Clock extends Component {
  state = {
    count:0,
    str: '当前时间是',
    time: new Date().toLocaleString()
  }

  /* componentDidMount == Vue mounted */
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    },1000)
  }
  /* 销毁组件 */
  componentWillUnmount() { // 解绑事件和方法
    clearInterval(this.timer);
    console.log('销毁了组件')
  }
  /* 加法 */
  onAdd=()=>{
    console.log(this.state.count++)
    this.setState({
      count:this.state.count++
    })
  }
  /* 减法 */
  onLes=()=>{
    this.setState({
      count:this.state.count--
    })
  }
  /* 删除 */
  handleClick=()=>{
    ReactDOM.unmountComponentAtNode(window.root)
  }









  /* 默认渲染组件时会调用render方法 */
  render(){
    return (
      <div>
        {this.state.count}，{this.state.str}：{this.state.time}    
        <div>
        <button onClick={this.onAdd}>+</button>
        <button onClick={this.onLes}>-</button>
        <button onClick={this.handleClick}>删除</button>
        </div>
      </div>
    )
  }
}

const el = (
  <Clock></Clock>
)

render(el, window.root);




/*
 * 使用类声明，class Clock extends Component
 * 可以使用ES7的静态类型属性语法，不需要加constructor和super
 * 更新视图需要使用this.setState方法
 * 绑定事件必须写大写
 * 事件可以用箭头函数解决this问题
 * 生命周期里的this都指向当前实例
 * 最后都需要使用render函数返回HTML结构
 * */