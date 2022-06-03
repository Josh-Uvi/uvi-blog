import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
