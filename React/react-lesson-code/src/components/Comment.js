import React, { Component } from 'react'

export default class Comment extends Component{
  content = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.content.current.value);

    this.content.current.value = '';

    console.log(this.content.current.focus());

  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className='form-control'
          required
          name="text"
          id="text"
          cols="30"
          rows="10"
          ref={this.content}
        ></textarea>
        <button type='submit'>评论</button>
      </form>
    )
  }
}