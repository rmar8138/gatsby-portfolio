import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "./../components/Layout"
import Container from "./../components/styles/Container"

const img = require("../img/project-1.jpg")

const Project = styled.main`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  section {
    padding-top: 10vh;
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

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 2rem;
  }

  img {
    display: block;
    position: relative;
    width: 100vw;

    @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
      max-width: 50%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > * {
      margin-bottom: 2rem;
    }

    h1 {
      font-size: ${({ theme }) => theme.fsLarge};
      font-weight: 300;

      @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
        font-size: ${({ theme }) => theme.fsXlarge};
      }
    }

    h2 {
      font-size: ${({ theme }) => theme.fsSmall};
      font-weight: 300;

      @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
        font-size: ${({ theme }) => theme.fsMedium};
      }
    }

    a {
      display: inline-block;
      text-align: center;
      color: ${({ theme }) => theme.darkGrey};
      border-bottom: ${({ theme }) => `1px solid ${theme.darkGrey}`};
      padding-bottom: 5px;
    }

    @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
      width: 50%;
      margin-left: 6vw;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
    flex-direction: row;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    margin-bottom: 8rem;
  }
`

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    flex-direction: row;
    justify-content: center;
  }
`

const ProjectTech = styled.div`
  width: 100%;

  h3 {
    color: ${({ theme }) => theme.darkGrey};
    margin-bottom: 2rem;
  }

  ul {
    font-size: ${({ theme }) => theme.fsMedium};
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    align-self: flex-start;
    text-align: right;
    width: auto;
    margin-right: 2rem;
  }
`

const ProjectText = styled.div`
  a {
    color: ${({ theme }) => theme.darkGrey};
    display: inline-block;
    text-align: center;
    padding-bottom: 5px;
    border-bottom: ${({ theme }) => `1px solid ${theme.darkGrey}`};
    margin: 2rem 0;
  }

  p:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    width: 50%;
    margin-left: 2rem;
  }
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        link
        tech
      }
      html
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log(html)
  return (
    <Layout invert>
      <Project>
        <section>
          <Container>
            <ProjectHeader>
              <img src={img} alt={frontmatter.title} />
              <div>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.description}</h2>
                <a target="_blank" href={frontmatter.link}>
                  View GitHub
                </a>
              </div>
            </ProjectHeader>
            <ProjectBody>
              <ProjectTech>
                <h3>Tech</h3>
                <ul>
                  {frontmatter.tech.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </ProjectTech>
              <ProjectText>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Link to="/projects">Back</Link>
              </ProjectText>
            </ProjectBody>
          </Container>
        </section>
      </Project>
    </Layout>
  )
}

export default ProjectTemplate
