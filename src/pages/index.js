import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

// class IndexPage extends React.Component {
//   render() {
//     // const { data, location } = this.props
//     // const siteTitle = data.site.siteMetadata.title

//     return (
//       <>
//         <SEO title="All posts" />
//         <h1>All posts</h1>
//       </>
//     )
//   }
// }

export default function IndexPage({ data }) {
  const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <SEO title="All posts" />
      <h1>All posts</h1>
      <p>{siteTitle}</p>
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
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
