import styled from "styled-components"

export const Header = styled.div`
  position: relative;
  background-color: inherit;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const About = styled.section`
  margin-bottom: 6rem;

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: flex;
    justify-content: center;
  }
`
export const Skills = styled.div`
  margin-bottom: 6rem;

  h3 {
    margin-bottom: 2rem;
  }

  ul {
    font-size: ${({ theme }) => theme.fsMedium};
  }

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    width: 50%;
    text-align: right;
    margin-right: 2rem;
  }
`

export const Bio = styled.div`
  a {
    color: ${({ theme }) => theme.darkGrey};
    border-bottom: ${({ theme }) => `1px solid ${theme.darkGrey}`};
  }

  div > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__resume {
    color: ${({ theme }) => theme.darkGrey};
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => `1px solid ${theme.darkGrey}`};
  }

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    width: 50%;
    margin-left: 2rem;
  }
`
