import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BlogPreview from './BlogPreview.jsx';

class BlogList extends Component {
  render() {
    return (
      <div class="blog-post-row-wrapper">
        <div class="blog-post-row-inner">
          <div style={{float: 'left', paddingRight: '1.3em'}}>
            <BlogPreview
              title="This is the title of the blog post"
              description="And this is a little section that describes a bit more about the post."
            />
          </div>
          <div style={{float: 'left', paddingLeft: '1.3em'}}>
            <BlogPreview
              title="Anotha one."
              description="And this is a little section that describes a bit more about the post. The description on this one is a lot longer on person just to see how it looks."
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogList;
