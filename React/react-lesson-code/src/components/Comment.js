import React, { Component } from 'react'

export default class Comment extends Component{
  content = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.content.current.value);
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <button type='submit'>评论</button>
      </form>
    )
  }
}