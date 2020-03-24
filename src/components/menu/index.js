import React from "react"
import { Tween } from "react-gsap"
import { StyledLink, StyledMenu } from "./styles"

const Menu = () => {
  return (
    <Tween
      from={{
        y: 1000,
        opacity: 0,
      }}
      duration={1}
      ease="Power3.easeOut"
    >
      <StyledMenu>
        <h3>Menu</h3>
        <ul>
          <Tween
            staggerFrom={{
              y: -20,
              opacity: 0,
              delay: 0.8,
            }}
            stagger={0.2}
            duration={1}
            ease="Power3.easeOut"
          >
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/projects">Projects</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
          </Tween>
        </ul>
      </StyledMenu>
    </Tween>
  )
}

export default Menu
