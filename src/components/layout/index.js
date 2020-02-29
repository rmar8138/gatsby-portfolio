import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import Navbar from "./../navbar"
import Menu from "./../menu"
import Footer from "./../footer"
import { theme, GlobalStyle } from "./../styles/globalStyles"

class Layout extends Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    const { menuOpen } = this.state
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle menuOpen={menuOpen} />
        <Navbar
          toggleMenu={this.toggleMenu}
          menuOpen={menuOpen}
          invert={this.props.invert}
        />
        {menuOpen && <Menu />}
        {children}
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Layout
