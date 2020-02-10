import React from "react"
import styled from "styled-components"
import Layout from "./../components/Layout"
import Container from "./../components/styles/Container"

const Header = styled.div`
  position: relative;
  background-color: inherit;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const About = styled.section`
  margin-bottom: 6rem;

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    display: flex;
    justify-content: center;
  }
`
const Skills = styled.div`
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

const Bio = styled.div`
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

const Home = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <h1>Ragan Martinez</h1>
          <h2>Web Developer,</h2>
          <h2>Sydney Australia</h2>
        </Container>
      </Header>
      <Container>
        <About>
          <Skills>
            <h3>Skills</h3>
            <ul>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </Skills>
          <Bio>
            <h3>About</h3>
            <div>
              <p>
                Hi! My name is Ragan, an aspiring web developer from Sydney
                Australia, and currently enrolled in the Coder Academy Fast
                Track bootcamp.
              </p>
              <p>
                Ever since I picked up HTML and CSS from Codecademy in early
                2018 I've developed a passion for web development and coding in
                general. Since then I've been doing my best to learn as much as
                I can through online courses, articles, building my own projects
                and the occasional Stack Overflow search.
              </p>
              <p>
                Being able to use logic and problem solving in endlessly
                creative ways is what drew me to this field, and I hope to step
                foot in the tech industry soon.
              </p>
              <p>
                When I'm not stuck in my laptop, you can probably find me
                playing{" "}
                <a href="https://raganmartinez.bandcamp.com/album/other-worlds">
                  sleepy guitar music
                </a>
                , at a gig or playing pool with the boys.
              </p>
              <p>
                View my resume <a href="#">here</a> or get in touch with me
                directly <a href="./contact/contact.html">here</a>.
              </p>
            </div>
          </Bio>
        </About>
      </Container>
    </Layout>
  )
}

export default Home
