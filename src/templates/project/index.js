import React from "react"
import { Link, graphql } from "gatsby"
import Container from "./../../components/container"
import {
  StyledImg,
  Project,
  ProjectHeader,
  ProjectBody,
  ProjectTech,
  ProjectText,
} from "./styles"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        link
        tech
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Project>
      <section>
        <Container>
          <ProjectHeader>
            <StyledImg
              fluid={frontmatter.image.childImageSharp.fluid}
              alt={frontmatter.title}
              imgStyle={{ objectFit: "contain" }}
            />
            <div>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.description}</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={frontmatter.link}
              >
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
  )
}

export default ProjectTemplate
