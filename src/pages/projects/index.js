import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "./../../components/layout"
import Container from "./../../components/container"
import {
  StyledImg,
  Projects,
  ProjectsListItem,
  ProjectImage,
  ProjectText,
  ProjectLink,
} from "./_styles"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/.*\\\\.md$/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
                  <StyledImg
                    fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                    alt={edge.node.frontmatter.title}
                  />
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
