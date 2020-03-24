import React, { Component } from 'react';
import AboutCard from './Home/AboutCard';
import background from '../../../static/images/mtn-bgrd.jpg';

class HomePage extends Component {
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

export default HomePage;
