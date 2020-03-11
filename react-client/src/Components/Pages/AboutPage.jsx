import React, { Component } from 'react';
import AboutCard from './About/AboutCard'

class AboutPage extends Component {
  render() {
    return (
      <div class="about-card-wrapper">
        <div class="about-card-inner">
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    )
  }
}

export default AboutPage;
