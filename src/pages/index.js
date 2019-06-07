import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Typewriter from "../components/typewriter";

import "../styles/index.css";

const typewriterOptions = ["SOFTWARE ENGINEER", "WEB DEVELOPER"];

export default ({ data }) => {
  console.log(data.backgroundImage);
  return (
    <>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <Img
        fluid={data.backgroundImage.childImageSharp.fluid}
        className="background-image"
        backgroundColor
      />
      <div id="content-container">
        <div id="content">
          <h1 id="header-text">JORDAN SCHNEIDLER</h1>
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2560, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      ...fluidImage
    }
  }
`;
