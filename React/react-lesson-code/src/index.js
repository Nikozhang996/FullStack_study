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
 * */