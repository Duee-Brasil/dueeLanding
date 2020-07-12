import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from "./breakpoints"
import backgroundWide from '../images/leaocolorido-wide2.jpg'
import backgroundPort from '../images/leaocolorido-portrait.jpg'
import logo from '../images/logo_branco.png'

const HomeStyle = styled.div`
    padding: 4em 2em 3em 2em;
    height: calc(100vh - 6em);
    background-color: ${Colors.White}; 
    background-image: url(${backgroundPort});
    background-repeat: repeat; 
    background-position: center top; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;

    ${BiggerThanMedium} {
        background-image: url(${backgroundWide});
    }
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
    width: 120px;

    ${BiggerThanMedium} {
        width: 250px;
    }
`

// const LabelContainer = styled.div`
//     width: 80%;
//     max-width: 900px;
// `

// const MainLabel = styled.h1`
//     font-family: 'Montserrat', sans-serif;
//     font-size: 40px;
//     font-weight: 600;
//     line-height: 1;
//     color: #fff;
//     letter-spacing: -1px;

//     ${BiggerThanMedium} {
//         font-size: 56px;
//     font-weight: 700;
//     }
// `

// const Subtitle = styled.p`
    // font-family: 'PT Serif', serif;
    // font-size: 18px;
    // line-height: 22px;
    // max-width: 70%; 
    // margin: 0 auto;
    // color: #fff;

    // ${BiggerThanMedium} {
    //     font-size: 22px;
    //     line-height: 26px;
    // }
// `

const Home = () => <HomeStyle id="home">
    <Content>
        <LogoStyle src={logo} alt="Duee Brasil" />
        {/* <LabelContainer>
            <MainLabel>Duee Brasil</MainLabel>
            <Subtitle>Nós fazemos</Subtitle>
        </LabelContainer> */}
    </Content>
</HomeStyle>

export default Home