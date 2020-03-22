import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import profImage from '../../../../static/images/golf-square.png';
import scriptImage from '../../../../static/images/bridge-script-trans.png'

class AboutCard extends Component {
  render() {
    return (
      <div>
        <div>
        <Image src={profImage} circular size="medium" style={{marginLeft: '-25em', position: 'fixed'}}/>
        <Image src={scriptImage} size="large"/>
        </div>
      </div>
    )
  }
}

export default AboutCard;
