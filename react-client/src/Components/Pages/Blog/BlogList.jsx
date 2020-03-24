import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BlogPreview from './BlogPreview.jsx';

class BlogList extends Component {
  render() {
    return (
      <div class="blog-list-wrapper">
        <div class="blog-list-inner">
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <BlogPreview
                  title="This is the title of the blog post"
                  description="And this is a little section that describes a bit more about the post."
                />
              </Grid.Column>
              <Grid.Column>
                <BlogPreview
                  title="Anotha one."
                  description="And this is a little section that describes a bit more about the post. The description on this one is a lot longer on person just to see how it looks."
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <BlogPreview
                  title="This is the title of the blog post"
                  description="And this is a little section that describes a bit more about the post."
                />
              </Grid.Column>
              <Grid.Column>
                <BlogPreview
                  title="Anotha one."
                  description="And this is a little section that describes a bit more about the post. The description on this one is a lot longer on person just to see how it looks."
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default BlogList;
