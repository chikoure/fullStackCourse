import React from "react"
import NavigationItems from "../NavigationItems/NavigationItems"
import Navbar from "react-bootstrap/Navbar"

const ToolBar = props => {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand>JUMP</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default ToolBar
