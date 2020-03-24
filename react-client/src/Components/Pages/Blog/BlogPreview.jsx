import React, { Component } from 'react';

class BlogPreview extends Component {
  render() {
    return (
      <div class="blog-card">
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
      </div>
    )
  }
}

export default BlogPreview;
