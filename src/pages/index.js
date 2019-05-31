import React from "react";

import SEO from "../components/seo";
import Typewriter from "../components/typewriter";

import background from "../images/background.jpg";
import "../styles/index.css";

const typewriterOptions = ["Software Engineer", "Web Developer"];

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <img id="background-image" src={background} />
      <div id="content-container">
        <div id="content">
          <h1 id="header-text">Jordan Schneidler</h1>
          <hr id="divider" />
          <Typewriter
            id="typewriter"
            text={
              typewriterOptions[
                Math.floor(Math.random() * typewriterOptions.length)
              ]
            }
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
