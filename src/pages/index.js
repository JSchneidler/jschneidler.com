import React from "react";
import { Link } from "gatsby";
// import posed, { PoseGroup } from 'react-pose';

import SEO from "../components/seo";
import Typewriter from '../components/typewriter';

import background from '../images/background.jpg';
import '../styles/index.css';

/*
const FadeInContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});
*/

const typewriterOptions = ['Software Engineer', 'Web Developer'];

class IndexPage extends React.Component {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: true });
  }

  render () {
    return <>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <img id="background-image" src={background} />
      <div id="content-container">
        <div id="content">
          {/*<PoseGroup>{this.state.visible && <FadeInContainer key="header"><h1 id="header-text">Jordan Schneidler</h1><hr id="divider" /></FadeInContainer>}</PoseGroup>*/}
          <Typewriter id="typewriter" text={typewriterOptions[Math.floor(Math.random() * typewriterOptions.length)]} />
          {/*<PoseGroup>
            {this.state.visible &&
              <FadeInContainer id="button-container" key="button-container">
                <Link to="/work"><button className="button">My Work</button></Link>
                <Link to="/me"><button className="button">About Me</button></Link>
                <Link to="/contact"><button className="button">Contact Me</button></Link>
              </FadeInContainer>
            }
          </PoseGroup>*/}
        </div>
      </div>
    </>;
  }
}

export default IndexPage;
