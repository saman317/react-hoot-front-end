import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({user, handleSignout}) => {
    const loggedInNavbar = <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
        </ul>
    </nav>

    const loggedOutNavbar= <nav>
    <ul>
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  </nav>
  return (
    <>
     {user ? loggedInNavbar : loggedOutNavbar}
     </>
  )
}

export default NavBar