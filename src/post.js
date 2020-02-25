import React, { Component } from 'react';
import ReactSafeHtml from 'react-safe-html';

export class Post extends Component {

  render() {
    return (
      <div>
        <h2>
          <a href={this.props.url}>{this.props.title}</a>
        </h2>
        <small>{this.props.date}</small><br/>
        <ReactSafeHtml
          allowedAttributes={{ 'a': ['href'] }}
          allowedTags={['a']}
          html={ this.props.content }
        />
      </div>
    );
  }
}

export default Post;