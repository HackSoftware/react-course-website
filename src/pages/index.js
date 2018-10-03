import React from 'react'
import { Link } from 'gatsby'
import {Helmet} from "react-helmet";

import Container from '../components/container'


const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>React Course</title>
    </Helmet>

    <Container>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </React.Fragment>
)

export default IndexPage
