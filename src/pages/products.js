import React from "react"
import { graphql } from "gatsby"

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
  return <div>{products}</div>
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
