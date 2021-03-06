import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Star Wars!"
        src="../images/star-wars.webp"
      />
    </Layout>
  )
}

export default IndexPage
