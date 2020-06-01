import React from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

function NavigationItems(props) {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.full_name) ||
    "NoName"
  console.log(identity)
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <Nav className="ml-auto">
      {isLoggedIn ? (
        <Link className="nav-link" to={"/addclients"}>
          Blog
        </Link>
      ) : null}
      {isLoggedIn ? (
        <Link className="nav-link" to={"/products/"}>
          Products
        </Link>
      ) : null}
      <Link
        className="nav-link"
        to={"/"}
        onClick={() => {
          setDialog(true)
          console.log("hello")
        }}
      >
        {isLoggedIn ? `Hello ${name}, Log out here!` : "sign in"}
      </Link>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
      />
    </Nav>
  )
}

export default NavigationItems
