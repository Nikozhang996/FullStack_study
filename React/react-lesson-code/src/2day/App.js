import React, {Component } from 'react';
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types';

import axios from './api/request';

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
    const users = [
      ...this.state.users,
      {
        avatar: 'https://user-gold-cdn.xitu.io/2018/2/17/161a3828ea508b29?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        content: val,
        username: 'zjk'
      }
    ];
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
        removeById: this.removeById,
        increment: this.increment,
        color: 'red'
      }}>
        <div className="container">
          <div className="panel-heading">评论{this.state.count}</div>
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