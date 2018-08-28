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
        <span>{this.state.num}</span>
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }

  /* componentDidMount */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /* shouldComponentUpdate */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  /* 接收到某个属性后 把这个属性变成了当前组件的状态 */
  componentWillReceiveProps() {
    console.log('子组件接收到了新属性');
  }
}


const el = (
  <Counter></Counter>
);

render(el, window.root);




/*
 * React生命周期，与VUE大同小异
 *
 * */