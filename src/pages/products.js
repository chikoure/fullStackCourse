import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function products({ data }) {
  console.log("data", data)
  const products = data.allMarkdownRemark.edges.map(p => {
    return (
      <ul>
        <li>{p.node.frontmatter.title}</li>
        <li>{p.node.frontmatter.description}</li>
        <li>{p.node.frontmatter.price}</li>
      </ul>
    )
  })
  return (
    <Layout>
      <SEO title="products"></SEO>
      <div>{products}</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            image
            price
            title
          }
        }
      }
    }
  }
`

export default products
