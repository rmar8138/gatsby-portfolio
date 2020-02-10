import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "./styles/Button"

const StyledNav = styled.nav`
  background-color: ${({ menuOpen, theme }) =>
    menuOpen ? theme.black : theme.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    padding: 2rem 10vw;
    background-color: ${({ theme }) => theme.white};
  }

  .nav.invert a::selection {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`

const MenuButton = styled(Button)`
  color: ${props => (props.menuOpen ? props.theme.white : props.theme.black)};

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

const Navbar = ({ toggleMenu, menuOpen }) => {
  return (
    <StyledNav menuOpen={menuOpen}>
      <span>
        <Link to="/">Ragan Martinez</Link>
      </span>
      <MenuButton onClick={() => toggleMenu()} menuOpen={menuOpen}>
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
