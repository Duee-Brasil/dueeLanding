import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import Service from "../components/service"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Duee Brasil Digital" />

    <Home />

    <Service />

    <Portfolio />

    <About />

    <Contact />
    
  </Layout>
)

export default IndexPage
