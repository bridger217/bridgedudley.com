import React, { Component } from 'react';
import { Button, Card, Icon, Image, List } from 'semantic-ui-react';
import blankimage from './../../../../static/images/bridge-logo-trans.png';

const CardExampleFluid = () => (
  <Card.Group>
    <div class="blog-list-item">
      <Card fluid color='red' header='Option 1' >
        <Card.Content>
          <Icon name="music" size="large"/>
        </Card.Content>
        <Card.Description>
          description
        </Card.Description>
      </Card>
      <Card fluid color='red' header='Option 1' >
        <Card.Content>
          <Icon name="music" size="large"/>
        </Card.Content>
        <Card.Description>
          description
        </Card.Description>
      </Card>
      <Card fluid color='red' header='Option 1' >
        <Card.Content>
          <Icon name="music" size="large"/>
        </Card.Content>
        <Card.Description>
          description
        </Card.Description>
      </Card>
      <Card fluid color='red' header='Option 1' >
        <Card.Content>
          <Icon name="music" size="large"/>
        </Card.Content>
        <Card.Description>
          description
        </Card.Description>
      </Card>
    </div>
  </Card.Group>
)

class BlogList extends Component {
  render() {
    return (
      <CardExampleFluid />
    )
  }
}

export default BlogList;
