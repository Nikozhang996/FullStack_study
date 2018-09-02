import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types';

import axios from './request';

import {Provider} from './context';

import Comment from './components/Comment';
import List from './components/List';

import 'bootstrap/dist/css/bootstrap.min.css';
import './basc.css';

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
  addUser = (val) => {
    const users = [...this.state.users, {
      avatar: '',
      content: val,
      username: 'zjk'
    }];
    this.setState({users});
  };

  /* 根据ID删除用户 */
  removeById = (id) => {
    const users = this.state.users.filter(user => user.id != id);
    this.setState({users});
  };

  /* 生命周期函数可以写成异步的 */
  async componentDidMount() {
    this._getUsersList();
  }

  async _getUsersList() {
    let users = [];
    try{
      users = await axios.get('/user.json');
    } catch (e) {
      console.log(e);
    }

    this.setState({
      users
    });
  }

  render() {
    return (
      <Provider value={{
        increment: this.increment,
        color: 'red'
      }}>
        <div className="container">
          <div className="panel-heading">评论</div>
          <div className="panel-body">
            <List users={this.state.users} removeById={this.removeById}></List>
          </div>
          <div className="panel-footer">
            {/*评论组件*/}
            <Comment addUser={this.addUser}></Comment>
          </div>
        </div>
      </Provider>
    );
  }
};