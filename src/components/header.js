import PropTypes from "prop-types"
import React from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import ToolBar from "../components/Navigation/Toolbar/ToolBar"

const Header = ({ siteTitle }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity &&
      identity.user &&
      identity.user.user_metadata &&
      identity.user.user_metadata.name) ||
    "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    // <header>
    //   <nav className="main-navigation">
    //     <ul className="main-navigation__list">
    //       <li className="main-navigation__items">
    //         <Link to={"/products"}>Eshop</Link>
    //       </li>
    //       <li>
    //         <Link to={"/about"}>About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div>
    //     <button className="btn" onClick={() => setDialog(true)}>
    //       {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
    //     </button>
    //   </div>
    //   <IdentityModal
    //     showDialog={dialog}
    //     onCloseDialog={() => setDialog(false)}
    //   />
    // </header>
    <ToolBar></ToolBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
