import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Container } from 'semantic-ui-react';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import ResumePage from './Pages/ResumePage';
import TopMenu from './TopMenu';
import background from '../../static/images/abstract-art-artistic-background-1103970.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <TopMenu />
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="resume" exact path="/resume" component={ResumePage} />
        <Route name="blog" exact path="/blog" component={BlogPage} />
      </Router>
    )
  }
}

export default App;
