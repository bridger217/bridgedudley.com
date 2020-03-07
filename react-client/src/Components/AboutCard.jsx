import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import meGolfing from '../../static/images/megolfing.png'

class AboutCard extends Component {
  render() {
    return (
      <Card>
        <Image src={meGolfing} wrapped ui={false} class="golfing-image"/>
        <Card.Content>
          <Card.Header>Bridge Dudley TODO: find landscape photo</Card.Header>
          <Card.Meta>Software Engineer</Card.Meta>
          <Card.Description>
            I'm Bridge, a recent graduate from the University of Michigan and
            incoming Software Engineer at Google. I live and work in my hometown
            of Pittsburgh, PA and love all things black and gold. In my spare time
            I like playing poker, pick-up hoops, skiing, and drinking beer that is
            too fancy for my 22 year-old budget.
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default AboutCard;
