import React from "react"
import styled from "styled-components"
import background from './demo-images/background_img_01b.jpg'
import logo from './demo-images/logo.png'

const HomeStyle = styled.div`
    padding: 4em 2em 3em 2em;
    height: calc(100vh - 6em);
    background-color: #221c5a; 
    background-image: url(${background});
    background-repeat: repeat; 
    background-position: center top; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100vw;
    max-width: 960px;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const LogoStyle = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 40px;
`

const LabelContainer = styled.div`
    width: 80%;
    max-width: 900px;
`

const MainLabel = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 56px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
`

const Subtitle = styled.p`
    font-family: 'PT Serif', serif;
    font-size: 22px;
    line-height: 26px;
    max-width: 70%; 
    margin: 0 auto;
    color: #fff;
`

const Home = () => <HomeStyle id="home">
    <Content>
        <LogoStyle src={logo} alt="Boxus" />
        <LabelContainer>
            <MainLabel>Duee Brasil</MainLabel>
            <Subtitle>Nós fazemos</Subtitle>
        </LabelContainer>
    </Content>
</HomeStyle>

export default Home