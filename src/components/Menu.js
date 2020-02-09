import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fsLarge};
  line-height: 1.4;
  color: ${({ theme }) => theme.white};

  /* .active {
    color: ${({ theme }) => theme.darkGrey};
    pointer-events: none;
  } */
`

const StyledMenu = styled.div`
  padding: 160px 80px;
  background-color: ${({ theme }) => theme.black};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  overflow: hidden;

  h3 {
    color: ${({ theme }) => theme.darkGrey};
    font-weight: 300;
  }

  ul {
    font-size: ${({ theme }) => theme.fsLarge};
    line-height: 1.4;
    color: ${({ theme }) => theme.white};
  }
`

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
