import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav id="nav">
      <span>
        <Link to="/">Ragan Martinez</Link>
      </span>
      <button id="menuButton">Menu</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
