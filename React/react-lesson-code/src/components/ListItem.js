import React, {Component} from 'react'
import {Consumer} from '../context.js';

export default class ListItem extends Component {
  handleClick = (id) => {
    this.props.removeById(id);
  };

  render() {

    const {avatar, username, content, id} = this.props;
    return (
      <Consumer>
        {value => {
          return (
            <div className='media'>
              <div className="media-left">
                <img src={avatar} alt={username}/>
              </div>
              <div className="media-body">
                <h3>{username}</h3>
                <div>{content}</div>

                <button
                  className="btn btn-danger"
                  onClick={this.handleClick.bind(null, id)}
                >
                  删除
                </button>

                <button
                  className="btn btn-success"
                  onClick={() => value.increment()}
                >
                  点赞
                </button>

                <span>传入的颜色是：<span style={{color: value.color}}>{value.color}</span></span>
              </div>
            </div>
          );
        }}
      </Consumer>
    );


  }
};