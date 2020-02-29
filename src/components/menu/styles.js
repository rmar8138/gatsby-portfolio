import { Link } from "gatsby"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fsLarge};
  line-height: 1.4;
  color: ${({ theme }) => theme.white};
`

export const StyledMenu = styled.div`
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

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: none;
  }
`
