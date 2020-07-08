import React from "react"
import { Link } from "gatsby"
import './css.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/home"
import Service from "../components/service"
import Preloader from "../components/preloader"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import News from "../components/news"
import Video from "../components/video"
import Skills from "../components/skills"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />

    <Preloader />

    <Home />

    <Service />

    <Portfolio />

    <About />

    <News />

    <Video />

    <Skills />

    <Contact />
    
  </Layout>
)

export default IndexPage
