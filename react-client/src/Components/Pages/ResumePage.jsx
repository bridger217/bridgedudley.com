import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'semantic-ui-react';
import resume from '../../../static/images/resume.png';

//TODO: embed latex so this is more refactorable (important)

class ResumePage extends Component {

  constructor(props) {
    super(props);
    this.state = { resumeHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ screenHeight: window.innerHeight });
    let node = document.getElementById("resume-wrapper");
    let nodeStyle = window.getComputedStyle(node);
    let paddingTop = nodeStyle.getPropertyValue('padding-top').slice(0, -2);
    let windowHeight = window.innerHeight;
    //TODO: remove hardcoded padding
    let computedHeight = parseInt(windowHeight, 10) - parseInt(paddingTop, 10) + 50;
    let computedHeightStr = computedHeight + "px";
    this.setState({ resumeHeight: computedHeightStr });
  }

  render() {
    return (
      <div class="resume-wrapper" id="resume-wrapper" style={{height: `${this.state.resumeHeight}`}}>
        <div class="resume-inner">
          <Image src={resume} size="massive"/>
        </div>
      </div>
    )
  }
}

export default ResumePage;
