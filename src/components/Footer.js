import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    font-size: ${({ theme }) => theme.fsSmall};
    color: ${({ theme }) => theme.darkGrey};
  }

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    height: 30rem;
    align-items: center;

    & > * {
      width: 50%;
    }
  }

  & h1::selection,
  & h2::selection,
  & h3::selection,
  & h4::selection,
  & h5::selection,
  & h6::selection,
  & p::selection,
  & li::selection,
  & a::selection,
  & span::selection,
  & img::selection {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`

const Logo = styled.h4`
  a {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fsLarge};
    font-weight: 300;
  }
`

const Contact = styled.div`
  h5 {
    font-weight: 300;
    color: ${({ theme }) => theme.darkGrey};
  }

  a {
    color: ${({ theme }) => theme.white};
  }
`

const Social = styled.ul`
  display: flex;
  justify-content: space-evenly;

  img {
    background-color: ${({ theme }) => theme.white};
    filter: invert(100%);
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>
        <a>RM</a>
      </Logo>
      <Contact>
        <h5>Email</h5>
        <a href="mailto:ragan.martinez@live.com">ragan.martinez@live.com</a>
      </Contact>
      <Social>
        <li>
          <a target="_blank" href="https://github.com/rmar8138">
            <img src="https://img.icons8.com/material/24/000000/github.png" />
          </a>
        </li>
        <li>
          <a target="_blank" href="http://linkedin.com">
            <img src="https://img.icons8.com/android/24/000000/linkedin.png" />
          </a>
        </li>
        <li>
          <a target="_blank" href="http://twitter.com">
            <img src="https://img.icons8.com/android/24/000000/twitter.png" />
          </a>
        </li>
      </Social>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </StyledFooter>
  )
}

export default Footer
