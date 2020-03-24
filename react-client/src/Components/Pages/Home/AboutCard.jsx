import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import profImage from '../../../../static/images/golf-square.png';
import scriptImage from '../../../../static/images/bridge-script-trans.png'

class AboutCard extends Component {
  render() {
    return (
      <div>
        <div class="prof-image-wrapper">
          <div class="prof-image-inner">
            <Image src={profImage} circular size="small"/>
          </div>
        </div>
        <div class="script-logo">
          <Image src={scriptImage} size="large"/>
        </div>
        <h2 style={{color: 'grey'}}>Software Engineer</h2>
      </div>
    )
  }
}

export default AboutCard;
