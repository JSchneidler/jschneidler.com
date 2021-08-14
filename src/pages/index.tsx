import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import Typewriter from '../components/Typewriter'

import { backgroundImage, backgroundImageOverlay, content, githubLink, githubLinkContainer, headerText, divider, typewriter } from '../styles/index.module.css'
import NameEmitter from '../components/NameEmitter'

const typewriterOptions = ['SOFTWARE ENGINEER', 'WEB DEVELOPER']

export default ({ data }) => {
  const [typewriterOption, setTypewriterOption] = useState(
    Math.floor(Math.random() * typewriterOptions.length)
  )

  return (
    <Layout>
      <SEO title='Home' keywords={['jordan', 'schneidler', 'engineer']} />
      {/*<div id={backgroundImageOverlay} />
      <Img
        fluid={data.backgroundImage.childImageSharp.fluid}
        className={backgroundImage}
        backgroundColor
  />*/}
      <div id={content}>
        <div id={githubLinkContainer}>
          <a
            id={githubLink}
            href='https://github.com/JSchneidler/portfolio-site'
            target='_blank'
          >
            <Img fixed={data.githubLogo.childImageSharp.fixed} />
          </a>
        </div>
        <NameEmitter name='Jordan Schneidler' />
        <hr id={divider} />
        <Typewriter
          id={typewriter}
          text={typewriterOptions[typewriterOption]}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubLogo: file(relativePath: { eq: "github-white.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
