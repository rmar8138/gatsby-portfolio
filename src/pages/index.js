import React from "react"
import Layout from "./../components/Layout"
import Navbar from "./../components/Navbar"

const Home = () => {
  return (
    <Layout>
      <header>
        <Navbar />
        <div class="header__text load-hidden">
          <div class="container">
            <h1 class="header__heading">Ragan Martinez</h1>
            <h2 class="header__heading">Web Developer,</h2>
            <h2 class="header__heading">Sydney Australia</h2>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default Home
