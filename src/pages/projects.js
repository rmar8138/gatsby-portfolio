import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "./../components/Layout"
import Container from "./../components/styles/Container"

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

  /* &__view-project {
    @extend .projects__item__view-project;
  } */
`

const ProjectsListItem = styled.li`
  /* @extend .projects__item; */
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
    /* // remove vertical rule after last item */
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
  return (
    <Layout>
      <Projects>
        <Container>
          <h1>Projects</h1>
          <ul>
            <ProjectsListItem>
              <ProjectImage to="/">
                <img src={img} alt="Project" />
              </ProjectImage>
              <ProjectText>
                <h4>Flashcard Terminal App</h4>
                <p>
                  A flashcard app built on Ruby that runs in the terminal. Users
                  can perform CRUD operations on cards and decks, and review
                  decks for study.
                </p>
                <ProjectLink to="/">View Project</ProjectLink>
              </ProjectText>
            </ProjectsListItem>
            <ProjectsListItem>
              <ProjectImage to="/">
                <img class="projects__item__image" src={img} alt="Project" />
              </ProjectImage>
              <ProjectText class="projects__item__text">
                <h4 class="projects__item__title staggered-fade-in">
                  Archive Studio Website
                </h4>
                <p class="projects__item__description staggered-fade-in">
                  Website built for ar-chive, a design studio based in Sydney.
                  Built on Gatsby.js using Styled Components and GraphQL.
                </p>
                <ProjectLink to="/">View Project</ProjectLink>
              </ProjectText>
            </ProjectsListItem>
            <ProjectsListItem>
              <ProjectImage to="/">
                <img class="projects__item__image" src={img} alt="Project" />
              </ProjectImage>
              <ProjectText class="projects__item__text">
                <h4 class="projects__item__title staggered-fade-in">
                  Hex Colour Memory Game
                </h4>
                <p class="projects__item__description staggered-fade-in">
                  A simple memory game based on randomly generated hexadecimal
                  colour values. Built on HTML, CSS/Sass and JavaScript.
                </p>
                <ProjectLink to="/">View Project</ProjectLink>
              </ProjectText>
            </ProjectsListItem>
            <ProjectsListItem>
              <ProjectImage to="/">
                <img class="projects__item__image" src={img} alt="Project" />
              </ProjectImage>
              <ProjectText class="projects__item__text">
                <h4 class="projects__item__title staggered-fade-in">
                  PB Tracker
                </h4>
                <p class="projects__item__description staggered-fade-in">
                  An application that allows users to input and track their
                  personal best gym lifts on a chart. Built on React/Redux,
                  Chart.js, Reactstrap and Firebase.
                </p>
                <ProjectLink to="/">View Project</ProjectLink>
              </ProjectText>
            </ProjectsListItem>
          </ul>
        </Container>
      </Projects>
    </Layout>
  )
}

export default ProjectsPage
