import React from "react"
import { Link } from "gatsby"
import { StyledNav, MenuButton, Navlist } from "./styles"

const Navbar = ({
  invert,
  toggleMenu,
  menuOpen,
  transparentNavbar,
  invertNavbarText,
}) => {
  return (
    <StyledNav
      menuOpen={menuOpen}
      invert={invert}
      transparentNavbar={transparentNavbar}
      invertNavbarText={invertNavbarText}
    >
      <span>
        <Link to="/">Ragan Martinez</Link>
      </span>
      <MenuButton
        onClick={() => toggleMenu()}
        menuOpen={menuOpen}
        invert={invert}
        invertNavbarText={invertNavbarText}
      >
        {menuOpen ? "Close" : "Menu"}
      </MenuButton>
      <Navlist>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Navlist>
    </StyledNav>
  )
}

export default Navbar
