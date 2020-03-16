import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import meGolfing from '../../../../static/images/golf-square.png'

class AboutCard extends Component {
  render() {
    return (
      <div>
        <Image src={meGolfing} circular size="medium" class="golfing-image"/>
      </div>
    )
  }
}

export default AboutCard;
