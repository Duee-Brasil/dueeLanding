import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Icon } from '@iconify/react';
import bxlWhatsapp from '@iconify/icons-bx/bxl-whatsapp';
import { Colors } from './breakpoints'


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Whastapp = styled.a`
  position: fixed;
  bottom: 0;
  right: 30px;
  background-color: #25d366;
  color: ${Colors.White};
  padding: 0.2em 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 10px;
  }
`

// import './js/jquery.sticky-k 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
        <Whastapp href="https://api.whatsapp.com/send?phone=5511951322976" target="_blank">
          <span>Fale conosco</span>
          <Icon icon={bxlWhatsapp} width="20px" height="20px" />
        </Whastapp>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
