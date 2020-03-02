import React, { Component, createRef } from "react"
import { ThemeProvider } from "styled-components"
import Navbar from "./../components/navbar"
import Menu from "./../components/menu"
import Footer from "./../components/footer"
import { theme, GlobalStyle } from "./styles.js"

const regex = /\/projects\/.*/

class Layout extends Component {
  state = {
    menuOpen: false,
    transparentNavbar: false,
    invert: false,
  }

  footerRef = createRef()

  componentDidMount() {
    window.addEventListener("scroll", this.handleTransparentNavbar)

    if (this.props.location.pathname.match(regex)) {
      this.setState({ invert: true })
    } else {
      this.setState({ invert: false })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ menuOpen: false })

      if (this.props.location.pathname.match(regex)) {
        this.setState({ invert: true })
      } else {
        this.setState({ invert: false })
      }
    }
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  handleTransparentNavbar = () => {
    const { transparentNavbar } = this.state
    const footerY = this.footerRef.current.getBoundingClientRect().y

    if (footerY < 68 && !transparentNavbar) {
      this.setState({ transparentNavbar: true })
    } else if (footerY > 68 && transparentNavbar) {
      this.setState({ transparentNavbar: false })
    }
  }

  render() {
    const { menuOpen, transparentNavbar, invert } = this.state
    const { children } = this.props

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
