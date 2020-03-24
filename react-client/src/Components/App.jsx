import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Container } from 'semantic-ui-react';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ResumePage from './Pages/ResumePage';
import TopMenu from './TopMenu';
import background from '../../static/images/abstract-art-artistic-background-1103970.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopMenu />
          <Route name="home" exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="resume" exact path="/resume" component={ResumePage} />
          <Route name="blog" exact path="/blog" component={BlogPage} />
        </div>
      </Router>
    )
  }
}

export default App;
