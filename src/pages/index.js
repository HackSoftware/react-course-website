import React from 'react'
import {Helmet} from "react-helmet";

import Container from '../components/container'
import reactImage from '../images/react-icon.svg'

import './index.css'


const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>React Course</title>
    </Helmet>

    <Container>
      <h1>React Course - Fall 2018
        <img src={reactImage} width="120" className="react-logo" alt="react logo"/>
      </h1>
      <h2>Course Info</h2>
      <h2>Course Program</h2>
      <h2>Course Teachers</h2>
      <h2>Price</h2>
    </Container>
  </React.Fragment>
)

export default IndexPage
