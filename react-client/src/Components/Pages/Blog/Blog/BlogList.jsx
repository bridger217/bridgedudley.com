import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BlogPreview from './BlogPreview';

// const columns = _.times(8, (i) => (
//   <Grid.Column key={i}>
//     <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
//   </Grid.Column>
// ))
//
// const GridExampleGrid = () => <Grid>{columns}</Grid>

class BlogList extends Component {
  render() {
    return (
      <div>
        <BlogPreview
          title="This is a blog preview"
          description="This is the description of this blog post."
        />
      </div>
    )
  }
}

export default BlogList;
