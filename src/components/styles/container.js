import styled from "styled-components"

const Container = styled.div`
  padding: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    padding: 10vw;
  }

  @media screen and (min-width: ${({ theme }) => theme.xLarge}) {
    padding: 10vw 16vw;
  }
`

export default Container
