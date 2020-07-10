import React from "react"
import styled from "styled-components"
import logo from './demo-images/logo.png'

const Loader = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 99999;	
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`

    img {
        width: 90px;
        height: 90px;        
    }
`

const Preloader = () => <Loader>
    <Content>
        <img src={logo} alt="Loading..." />
        Carregando...
    </Content>
</Loader>

export default Preloader