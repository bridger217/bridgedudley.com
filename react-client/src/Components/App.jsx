import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import AboutPage from './AboutPage';
import TopMenu from './TopMenu';
import Footer from './Footer'

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
          <Route name="resume" exact path="/resume" component={Footer} />
          <Route name="blog" exact path="/blog" component={TopMenu} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
