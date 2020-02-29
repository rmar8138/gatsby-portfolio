import styled from "styled-components"

export const Contact = styled.section`
  text-align: center;
  margin-bottom: 6rem;
  margin-top: 30vh;
  text-align: left;

  h3 {
    font-size: ${({ theme }) => theme.fsLarge};
    margin-bottom: 30vh;
    font-weight: 300;
    margin-bottom: 4rem;

    @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
      font-size: ${({ theme }) => theme.fsXlarge};
      margin-top: -10rem;
    }
  }

  p {
    margin-bottom: 2rem;
  }

  span {
    display: block;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .email {
    display: inline-block;
    color: ${({ theme }) => theme.black};
    font-size: ${({ theme }) => theme.fsMedium};
    margin-bottom: 4rem;
  }
`

export const SocialList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`
