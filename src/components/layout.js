import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"

const theme = {
  black: "#111",
  darkGrey: "#777",
  lightGrey: "#d1d1d1",
  white: "#ffffff",
  bpMedium: "640px",
  bpLarge: "840px",
  bpXlarge: "1300px",
  fsXsmall: "1.2rem",
  fsSmall: "1.8rem",
  fsMedium: "2.4rem",
  fsLarge: "4rem",
  fsXlarge: "6.4rem",
  primaryFont: "Karla, Arial, sans-serif",
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

  }

  body {
    font-size: ${({ theme }) => theme.fsSmall};
    font-family: ${({ theme }) => theme.primaryFont};
    color: ${({ theme }) => theme.black};
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.primaryFont};
    line-height: 1.2;
  }

  h1 {
    font-size: 6rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }

  ul {
    list-style: none;
  }

  img {
    filter: brightness(1);
  }

  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection,
  h5::selection,
  h6::selection,
  p::selection,
  li::selection,
  a::selection,
  span::selection,
  img::selection {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
