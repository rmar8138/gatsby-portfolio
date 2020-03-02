import styled from "styled-components"
import Button from "./../button"

const handleBackgroundColour = ({
  invert,
  menuOpen,
  transparentNavbar,
  theme,
}) => {
  if (invert || menuOpen) {
    return theme.black
  } else if (transparentNavbar) {
    return "transparent"
  } else {
    return theme.white
  }
}

export const StyledNav = styled.nav`
  /* background-color: ${({ invert, menuOpen, theme }) =>
    invert || menuOpen ? theme.black : theme.white}; */
  background-color: ${({ invert, menuOpen, transparentNavbar, theme }) =>
    handleBackgroundColour({ invert, menuOpen, transparentNavbar, theme })};
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

export const MenuButton = styled(Button)`
  color: ${({ invert, menuOpen, theme }) =>
    menuOpen || invert ? theme.white : theme.black};

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: none;
  }
`

export const Navlist = styled.ul`
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
