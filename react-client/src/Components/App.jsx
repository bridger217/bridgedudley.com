import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Container } from 'semantic-ui-react';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ResumePage from './Pages/ResumePage';
import TopMenu from './TopMenu';
import background from '../../static/images/mtn-bgrd.jpg';

class App extends Component {
  render() {
    return (
      <Router>
          <Container
            style={{
                width: '100vw',
                height: '100vh',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'repeat',
                position: 'relative',
                marginBottom: '-100px',
                backgroundImage: `url(${background})`,
                marginBottom: 0,
            }}
          >
          <div>
            <TopMenu />
            <Route name="home" exact path="/">
              <Redirect to="/about" />
            </Route>
            <Route name="about" exact path="/about" component={AboutPage} />
            <Route name="resume" exact path="/resume" component={ResumePage} />
            <Route name="blog" exact path="/blog" component={BlogPage} />
          </div>
        </Container>
      </Router>
    )
  }
}

export default App;
