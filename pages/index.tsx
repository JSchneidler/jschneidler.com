import Head from 'next/head'

import Background from '../components/Background'
import Typewriter from '../components/Typewriter'

const typewriterOptions = ['SOFTWARE ENGINEER', 'WEB DEVELOPER']

export default function Home() {
  const typewriterOption = Math.floor(Math.random() * typewriterOptions.length)

  return (
    <div className='container'>
      <Head>
        <title>Jordan Schneidler</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Background />

        <div id='content-container'>
          <div id='top-bar'>
            {/*
            <a
              id='github-link'
              href='https://github.com/JSchneidler/portfolio-site'
              target='_blank'
            >
              <Img fixed={data.githubLogo.childImageSharp.fixed} />
            </a>
            */}
          </div>
          <div id='content'>
            <h1 id='header-text'>JORDAN SCHNEIDLER</h1>
            <hr id='divider' />
            <Typewriter
              id='typewriter'
              text={typewriterOptions[typewriterOption]}
            />
          </div>
        </div>
      </main>

      <style jsx>{`
        #content-container {
          position: absolute;
          top: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        #content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          margin: 0 auto;
          max-width: 85%;
          min-width: 60%;
        }

        #header-text {
          color: white;
          font-size: 2.5em;
          text-align: center;
          text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }

        #divider {
          border-bottom: 2px solid white;
          margin: 15px auto;
          width: 200px;
        }

        #typewriter {
          color: #fdae55;
          font-family: "Courier New", Courier, monospace;
          font-size: 2em;
          line-height: 30px;
          text-shadow: 0px 0px 10px #fdae55, 0px 0px 5px #fdae55;
          text-align: center;
        }

        #top-bar {
          text-align: right;
          padding-top: 2px;
          padding-right: 2px;
          width: 100%;
        }

        #github-link {
          background: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
