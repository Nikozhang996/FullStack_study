import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types';

class Counter extends Component {
  state = {
    num: 0
  };

  onClick = (ev) => {
    // this.state.num += 1;
    this.setState({
      num: this.state.num += 1
    })
  };
  render() {
    return (
      <div>
        <span>{this.state.num}</span>
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }

}

const el = (
  <Counter name={'BIO'}></Counter>
);

render(el, window.root);




/*
 * this.setState({})是同步不是异步
 * */