import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "./../components/layout"
import Container from "./../components/container"
import { Header, About, Skills, Bio } from "./_styles"

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
