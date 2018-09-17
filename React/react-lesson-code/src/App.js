import React, {Component} from "react";

/* 引入组件文件 */
import Home from './pages/Home';
import Profile from './pages/Profile';
import User from './pages/User';
import Login from './pages/Login';

/* 引入路由 */
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

// 最外层要包一个路由容器，负责路由。
import Index from './pages';
import Protected from './pages/Protected';

// react路由渲染有三种方式component children默认不匹配也会执行
export default class App extends Component {


  render() {
    return (
      /*Router,Index,Switch*/
      <Router>
        <Index>
          <Switch>
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/home/123" component={Home}></Route>

            {/* 如果没有登陆，则应该重定向 */}
            <Protected path="/profile" component={Profile}></Protected>
            <Route path="/user" component={User}></Route>
            <Route path="/login" component={Login}></Route>

            {/* 重定向到跳转页面 */}
            <Redirect to="/home"></Redirect>
          </Switch>
        </Index>
      </Router>
    );
  }
};