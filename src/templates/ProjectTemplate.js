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
        tech
      }
      html
    }
  }
`

const ProjectTemplate = () => {
  return (
    <Layout>
      <Project>
        <section>
          <Container>
            <ProjectHeader>
              <img src={img} alt="Project" />
              <div>
                <h1>Hex Colour Memory Game</h1>
                <h2>
                  A memory game based on randomly generated hexadecimal colours
                </h2>
                <a
                  class="project-page__github"
                  target="_blank"
                  href="https://github.com/rmar8138/hex-color-memory-game"
                >
                  View GitHub
                </a>
              </div>
            </ProjectHeader>
            <ProjectBody>
              <ProjectTech>
                <h3>Tech</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                </ul>
              </ProjectTech>
              <ProjectText>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam hic dignissimos a, quaerat iusto ad quae sed
                  asperiores alias laboriosam!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam sunt eos esse ratione. Odio sunt soluta ullam, quia
                  iste dignissimos! Accusantium magni repudiandae fugiat totam
                  incidunt in delectus sit ipsam quisquam, quod assumenda,
                  laboriosam, voluptates maiores nam nobis suscipit voluptate.
                </p>
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
