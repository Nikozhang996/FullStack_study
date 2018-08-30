import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types';
import {Provider} from './context';

import Comment from './components/Comment';
import List from './components/List';

export default class App extends React.PureComponent {
  state = {
    users: [],
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <h1>BIO</h1>
    );
  }
};