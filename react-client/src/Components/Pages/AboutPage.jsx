import React, { Component } from 'react';
import AboutCard from './About/AboutCard'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <div id="backgroundimage" />
        <div class="about-card-wrapper">
          <div class="about-card-inner">
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;
