/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ToolBar from "../components/Navigation/Toolbar/ToolBar"
import Header from "./header"
import Footer from "./Footer/footer"
import "./layout.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ToolBar></ToolBar>
     
      <Container className='bg-light m-0 p-0' fluid={true}>
        <Row className='justify-content-center'>
          <Col md={8} >
            {props.children}
          </Col>
        </Row>
      </Container>
     
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
