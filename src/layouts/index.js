import React, { Component, createRef } from "react"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import { pathnameToTitle } from "./../utils/formatting"
import Navbar from "./../components/navbar"
import Menu from "./../components/menu"
import Footer from "./../components/footer"
import { theme, GlobalStyle } from "./styles.js"

const regex = /\/projects\/.+/

class Layout extends Component {
  state = {
    menuOpen: false,
    transparentNavbar: false,
    invertNavbarText: false,
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

    // only perform when not in individual projects page
    if (!this.props.location.pathname.match(regex)) {
      // change navbar background to transparent if it overlaps with footer
      if (footerY < 68 && !transparentNavbar) {
        this.setState({ transparentNavbar: true })
      } else if (footerY > 68 && transparentNavbar) {
        this.setState({ transparentNavbar: false })
      }

      // invert navbar text if it overlaps with footer
      if (footerY < 34) {
        this.setState({ invertNavbarText: true })
      } else {
        this.setState({ invertNavbarText: false })
      }
    }
  }

  render() {
    const { menuOpen, transparentNavbar, invertNavbarText, invert } = this.state
    const { children, location } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{pathnameToTitle(location.pathname)}</title>
        </Helmet>
        <GlobalStyle menuOpen={menuOpen} />
        <Navbar
          toggleMenu={this.toggleMenu}
          menuOpen={menuOpen}
          invert={invert}
          transparentNavbar={transparentNavbar}
          invertNavbarText={invertNavbarText}
        />
        {menuOpen && <Menu />}
        {children}
        <Footer ref={this.footerRef} />
      </ThemeProvider>
    )
  }
}

export default Layout
