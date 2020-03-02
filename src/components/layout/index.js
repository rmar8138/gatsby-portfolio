import React, { Component, createRef } from "react"
import { ThemeProvider } from "styled-components"
import Navbar from "./../navbar"
import Menu from "./../menu"
import Footer from "./../footer"
import { theme, GlobalStyle } from "./../styles/globalStyles"

class Layout extends Component {
  state = {
    menuOpen: false,
    transparentNavbar: false,
  }

  footerRef = createRef()

  componentDidMount() {
    window.addEventListener("scroll", this.handleTransparentNavbar)
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  handleTransparentNavbar = () => {
    const { transparentNavbar } = this.state
    const footerY = this.footerRef.current.getBoundingClientRect().y
    console.log(footerY)
    if (footerY < 68 && !transparentNavbar) {
      this.setState({ transparentNavbar: true })
    } else if (footerY > 68 && transparentNavbar) {
      this.setState({ transparentNavbar: false })
    }
  }

  render() {
    const { menuOpen, transparentNavbar } = this.state
    const { children, invert } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle menuOpen={menuOpen} />
        <Navbar
          toggleMenu={this.toggleMenu}
          menuOpen={menuOpen}
          invert={invert}
          transparentNavbar={transparentNavbar}
          id="navbar"
        />
        {menuOpen && <Menu />}
        {children}
        <Footer id="footer" ref={this.footerRef} />
      </ThemeProvider>
    )
  }
}

export default Layout
