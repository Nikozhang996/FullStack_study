import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Logo extends Component {
  change = () => {
    // 在此方法中实现组件的跳转
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <div className="navbar-brand" onClick={this.change}>管理系统</div>
      </div>
    );
  }
};

export default withRouter(Logo);