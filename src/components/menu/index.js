import React from "react"
import { StyledLink, StyledMenu } from "./styles"

const Menu = () => {
  return (
    <StyledMenu>
      <h3>Menu</h3>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/projects">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Contact</StyledLink>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default Menu
