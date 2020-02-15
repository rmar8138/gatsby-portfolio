import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/styles/container"

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

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/home/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            frontmatter {
              skills
            }
            html
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node
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
              {frontmatter.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Skills>
          <Bio>
            <h3>About</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Bio>
        </About>
      </Container>
    </Layout>
  )
}

export default HomePage
