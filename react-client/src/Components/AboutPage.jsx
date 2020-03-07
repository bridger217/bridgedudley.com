import React, { Component } from 'react';
import AboutCard from './AboutCard'

class AboutPage extends Component {
  render() {
    return (
      <div class="about-card-wrapper">
        <div class="about-card-inner">
          <AboutCard />
        </div>
      </div>
    )
  }
}

export default AboutPage;