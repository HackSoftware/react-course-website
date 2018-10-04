import React from 'react'
import { Helmet } from 'react-helmet'

import Inline from '../components/Inline'
import Container from '../components/Container'
import Section from '../components/Section'
import ReactLogo from '../components/ReactLogo'
import ApplyHere from '../components/ApplyHere'
import Teachers from '../components/Teachers'
import Footer from '../components/Footer'

import styles from './index.module.css'
import favicon from './favicon.ico'

import './index.css'

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
      <title>React Course by HackBulgaria</title>
    </Helmet>

    <Container>
      <h1 className={styles.Header}>
        <ReactLogo />
        React Course by HackBulgaria - Fall 2018
        <ReactLogo />
      </h1>
      <Section>
        <h2>Course Info</h2>
        <ul className={styles.List}>
          <li>
            <strong>
              Starts on 16th of October, ends on 16th of December.
            </strong>
          </li>
          <li>
            <strong>
              Twice a week - every Tuesday and Thursday from 19:00 to 21:30.
            </strong>
          </li>
          <li>
            Happening in{' '}
            <a
              href="https://www.google.com/maps/place/Hack+Bulgaria/@42.6477396,23.3825581,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa86ed287d5e33:0x315f162015dedaa3!8m2!3d42.6477396!4d23.3847468"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackBulgaria's lecture hall
            </a>
          </li>
          <li>
            Price - <strong>600 BGN with VAT included</strong>
          </li>
          <li>
            <ApplyHere />
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Course Program</h2>
        <p>
          The course will cover React fundamentals in a practical way, with a
          lot of examples and coding.
        </p>

        <p>
          <strong>
            The course doesn't assume or require any existing React knowledge.
          </strong>
        </p>
        <p>The high level agenda includes:</p>
        <ul className={styles.List}>
          <li>
            Using <Inline>create-react-app</Inline>
          </li>
          <li>
            Understanding the basic tools like <Inline>node</Inline>,{' '}
            <Inline>yarn</Inline>, <Inline>npm</Inline>, react dev tools and
            others.
          </li>
          <li>
            <strong>Everything related to components</strong> - lifecycle
            methods, event handlers, state, props, context, etc.
          </li>
          <li>
            <strong>Styling and layouting with CSS</strong>, using different
            techniques, like CSS modules and CSS-in-JS
          </li>
          <li>
            <strong>Advanced component topics</strong>, like the new context
            api, higher order components and compound components
          </li>
          <li>
            <strong>
              Fetching data from the server and working with that data.
            </strong>
            Immutability and lifting states.
          </li>
          <li>
            <strong>Working with forms and sending data to the server.</strong>{' '}
            Running sync and async validations on our forms.
          </li>
          <li>
            <strong>Doing state management with Redux and Redux Saga</strong>
          </li>
          <li>
            <strong>
              Doing state management and data fetching with GraphQL
            </strong>
          </li>
          <li>
            <strong>Deploying</strong> React apps
          </li>
          <li>
            Running React without <Inline>create-react-app</Inline> -{' '}
            <Inline>babel</Inline>,<Inline>webpack</Inline> and custom
            configuration.
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Course Teachers</h2>
        <Teachers />
      </Section>
      <Section>
        <h2>Price and Apply</h2>
        <p>
          The price for this course is{' '}
          <strong>600 BGN with VAT included</strong>
        </p>
        <p>
          <ApplyHere />
        </p>

        <p>
          In case you have any questions, drop an email at{' '}
          <strong>radorado@hacksoft.io</strong>
        </p>
      </Section>
      <Footer />
    </Container>
  </React.Fragment>
)

export default IndexPage
