import React from 'react';
import {Helmet} from 'react-helmet';

import Inline from '../components/Inline';
import Container from '../components/Container';
import Section from '../components/Section';
import ReactLogo from '../components/ReactLogo';
import Teachers from '../components/Teachers';
import Footer from '../components/Footer';

import styles from './index.module.css';
import './index.css';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>React Course</title>
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
          <li>Starts on 16th of October, ends on 16th of December.</li>
          <li>
            Twice a week - every Tuesday and Thursday from 19:00 to 21:30.
          </li>
          <li>
            Happening in{' '}
            <a href="https://www.google.com/maps/place/Hack+Bulgaria/@42.6477396,23.3825581,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa86ed287d5e33:0x315f162015dedaa3!8m2!3d42.6477396!4d23.3847468">
              HackBulgaria's lecture hall
            </a>
          </li>
          <li>
            Price - <strong>500 BGN without VAT</strong>
          </li>
          <li>
            You can apply here -{' '}
            <a href="https://www.hacksoft.io">link to application form</a>
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Course Program</h2>
        <p>
          The course will cover React fundamentals in a practical way, with a
          lot of examples and coding.
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
            Everything related to components - lifecycle methods, event
            handlers, state, props, context
          </li>
          <li>
            Styling and layouting with CSS, using different techniques, like CSS
            modules and CSS-in-JS
          </li>
          <li>
            Advanced component topics, like the new context api, higher order
            components and compound components
          </li>
          <li>
            Fetching data from the server and working with that data.
            Immutability and lifting states
          </li>
          <li>
            Working with forms and sending data to the server. Running sync and
            async validations on our forms
          </li>
          <li>Doing state management with Redux and Redux Saga</li>
          <li>Doing state management and data fetching with GraphQL</li>
          <li>Deploying React apps</li>
          <li>
            Running React without <Inline>create-react-app</Inline>
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
          The price for this course is <strong>500 BGN without VAT</strong>
        </p>
        <p>
          You can apply here -{' '}
          <a href="https://www.hacksoft.io">link to application form</a>
        </p>
      </Section>
      <Footer />
    </Container>
  </React.Fragment>
);

export default IndexPage;
