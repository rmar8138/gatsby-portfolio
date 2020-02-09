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
    </Layout>
  )
}

export default Home
