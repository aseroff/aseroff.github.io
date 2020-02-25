import React, { Component } from 'react';

export class Post extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <small>{this.props.date}</small>
        {this.props.content}
      </div>
    );
  }
}

export default Post;