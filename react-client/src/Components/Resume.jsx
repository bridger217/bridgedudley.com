import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import resume from '../../static/images/resume.png';

//TODO: embed latex so this is more refactorable (important)

class Resume extends Component {
  render() {
    return (
      <div class="resume-wrapper">
        <div class="resume-inner">
          <Image src={resume} size="massive"/>
        </div>
      </div>
    )
  }
}

export default Resume;
