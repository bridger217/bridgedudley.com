import React, { Component } from 'react';
import { Button, Card, Icon, Image, List } from 'semantic-ui-react';
import blankimage from './../../../../static/images/bridge-logo-trans.png';

const CardExampleFluid = () => (
  <div class="blog-card" />
)

class BlogList extends Component {
  render() {
    return (
      <div>
        <CardExampleFluid style={{background: "green"}}/>
        <CardExampleFluid style={{background: "teal"}}/>
        <CardExampleFluid style={{background: "blue"}}/>
      </div>
    )
  }
}

export default BlogList;
