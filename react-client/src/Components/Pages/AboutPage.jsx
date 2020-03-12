import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import AboutCard from './About/AboutCard';
import background from '../../../static/images/background.png';

class AboutPage extends Component {
  render() {
    return (
      <Container
        style={{
          width: '100vw',
          height: '100vh',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          marginBottom: '-100px',
          opacity: 0.5,
          backgroundImage: `url(${background})`,
          marginBottom: 0,
      }}
      >
        <div class="about-card-wrapper" style={{opacity: '1.0'}}>
          <div class="about-card-inner">
            <AboutCard />
          </div>
        </div>
      </Container>
    )
  }
}

export default AboutPage;
