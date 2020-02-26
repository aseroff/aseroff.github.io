import React, { Component } from 'react';

export class Post extends Component {

  render() {
    return (
      <div className='post'>
        <h2>
          <a href={this.props.url}>{this.props.title}</a>
        </h2>
        <small>{this.props.date.split('T').slice(0, 1)}</small>
        <br/><br/>
        <div className='content' dangerouslySetInnerHTML={{__html: this.props.content}} />
        <hr />
      </div>
    );
  }
}

export default Post;