import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
// React16.3 推出了新的声明周期

class Counter extends Component {
  static defaultProps = {
    a: 1
  };
  state = {
    num: 0
  };

  /* 构造函数 == created */
  constructor(props) {
    console.log('consturctor');
    super();
  }

  /* componentWillMount==mounted，react16.3中标识这个方法会被废弃，如有需要，可以在constructor中代替 */
  componentWillMount() {
    console.log('componentWillMount');
  }

  /* componentWillUpdate */
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  /* componentDidUpdate */
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  onClick = (ev) => {
    this.setState({
      num: this.state.num += 1
    })
  };

  render() {
    console.log('render');
    return (
      <div>
        <span>paran_child{this.state.num}</span>
        <ChildCounter n={this.state.num} bol={true}/>
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }

  /* componentDidMount */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /* componentWillUnmount */
  componentWillUnmount() {
    console.log('组件将要被卸载');
  }
}

class ChildCounter extends Component{
  state = {
    str:'child_counter'
  };
  componentWillMount(){
    console.log('child-componentWillMount')
  }

  render() {
    console.log('child-render');
    return (
      <div>child_counter{this.props.n}</div>
    );
  }

  componentDidMount() {
    console.log('child-componentDidMount')
  }

  /* shouldComponentUpdate 启动组件是否实时更新 */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  /* 接收到某个属性后 把这个属性变成了当前组件的状态 */
  componentWillReceiveProps() { //第一次不执行 16.3中这个方法废弃了
    console.log(this.state.str);
  }
}



const el = (
  <Counter></Counter>
);

render(el, window.root);




/*
 * React生命周期，与VUE大同小异
 * 分别为，构建时、挂载时、渲染时、更新时、完成挂载
 * shouldComponentUpdate控制组件是否实时更新
 * props属性、state状态，属性是别人传入的数据，状态是自身拥有的数据
 * */