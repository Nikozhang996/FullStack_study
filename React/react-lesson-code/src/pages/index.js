import React, { Component } from 'react'

/* 专门负责导航内容 */
import {Link, NavLink} from 'react-router-dom';

/* 登陆组件 */
import Logo from './Login';
import MenuLink from './MenuLink';

export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-heading">
              <Logo></Logo>
            </div>
          </div>
          <div className="nav navbar-nav">
            <MenuLink to='/home'>首页</MenuLink>
            <MenuLink to='/profile'>个人中心</MenuLink>
            <MenuLink to='/user'>用户列表</MenuLink>
            <MenuLink to='/login'>登陆</MenuLink>
          </div>
        </div>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
};