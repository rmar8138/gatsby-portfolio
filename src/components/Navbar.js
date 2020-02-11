import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "./styles/Button"

const navColour = ({ invert, menuOpen, theme }) => {
  if (menuOpen || invert) {
    return theme.black
  }

  return theme.white
}

const StyledNav = styled.nav`
  background-color: ${({ invert, menuOpen, theme }) =>
    invert || menuOpen ? theme.black : theme.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  z-index: 2;

  a {
    color: ${({ invert, theme }) => (invert ? theme.white : theme.black)};
  }

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    padding: 2rem 10vw;
    background-color: ${({ invert, theme }) =>
      invert ? theme.black : theme.white};
  }

  .nav.invert a::selection {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`

const MenuButton = styled(Button)`
  color: ${({ invert, menuOpen, theme }) =>
    menuOpen || invert ? theme.white : theme.black};

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: none;
  }
`

const Navlist = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: flex;
  }

  li {
    a {
      transition: all 0.2s ease-out;
    }

    a:hover {
      color: ${({ theme }) => theme.darkGrey};
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }
`

const Navbar = ({ invert, toggleMenu, menuOpen }) => {
  return (
    <StyledNav menuOpen={menuOpen} invert={invert}>
      <span>
        <Link to="/">Ragan Martinez</Link>
      </span>
      <MenuButton
        onClick={() => toggleMenu()}
        menuOpen={menuOpen}
        invert={invert}
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
