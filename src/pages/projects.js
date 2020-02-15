import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "./../components/layout"
import Container from "./../components/styles/container"

const img = require("../img/project-1.jpg")

const Projects = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 30vh;

  h1 {
    font-size: ${({ theme }) => theme.fsLarge};
    margin-bottom: 30vh;
    font-weight: 300;

    @media screen and (min-width: ${({ theme }) => theme.fsLarge}) {
      font-size: ${({ theme }) => theme.fsXlarge};
      margin-top: -10rem;
    }
  }
`

const ProjectsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.fsMedium};
    font-weight: 300;
    margin-bottom: 2rem;
  }

  &::after {
    z-index: 0;
    margin: 4rem auto;
    display: block;
    content: "";
    width: 1px;
    background-color: ${({ theme }) => theme.lightGrey};
    height: 6rem;

    @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
      display: none;
    }
  }

  &:nth-child(odd) {
    @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
      a {
        order: 2;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    flex-direction: row;
    margin: 6rem 0;
  }

  &:last-child::after {
    display: none;
  }
`

const ProjectImage = styled(Link)`
  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    display: inline-block;
    width: 50%;
    padding: 4rem;
  }

  img {
    width: 100vw;

    @media screen and (min-width: ${({ theme }) => theme.bpMedium}) {
      width: 100%;
    }
  }
`

const ProjectText = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.bpLarge}) {
    width: 50%;
    padding: 4rem;
  }
`

const ProjectLink = styled(Link)`
  display: inline-block;
  color: ${({ theme }) => theme.darkGrey};
  padding-bottom: 5px;
  border-bottom: ${({ theme }) => `1px solid ${theme.darkGrey}`};
  margin-top: 2rem;
`

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Projects>
        <Container>
          <h1>Projects</h1>
          <ul>
            {edges.map(edge => (
              <ProjectsListItem key={edge.node.fields.slug}>
                <ProjectImage to={`/projects/${edge.node.fields.slug}`}>
                  <img src={img} alt={edge.node.frontmatter.title} />
                </ProjectImage>
                <ProjectText>
                  <h4>{edge.node.frontmatter.title}</h4>
                  <p>{edge.node.frontmatter.description}</p>
                  <ProjectLink to={`/projects/${edge.node.fields.slug}`}>
                    View Project
                  </ProjectLink>
                </ProjectText>
              </ProjectsListItem>
            ))}
          </ul>
        </Container>
      </Projects>
    </Layout>
  )
}

export default ProjectsPage
