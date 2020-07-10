import React from "react"
import styled, { keyframes, css } from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'


const AboutStyle = styled.div`
    padding: 0;
    background-color: ${Colors.Black}; 
    background-image: url("demo-images/background_img_03.jpg"); 
    background-repeat: no-repeat; 
    background-position: center top; 
    background-size: cover; 
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1200px;
`

const AboutTitle = styled.div`
    background-color: ${Colors.Pink};
    font-family: 'Montserrat', sans-serif; 
    flex: 1;

${BiggerThanMedium} {
    position: sticky;
    position: -webkit-sticky;
    top: 72px;
    height: 375px;
    font-size: 24px;
    padding-bottom: 10px;
}
`

const AboutContent = styled.div`
    flex: 1;
    background-color: ${Colors.White};

    ${BiggerThanMedium} {
        flex: 2;
        margin-top: 385px;
    }
`

const AboutNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;
    
    span {    
        margin-left: -10px;
        color: ${Colors.DarkPink};
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 34px;
    }

    ${BiggerThanMedium} {
        margin-top: 20px;

        span {
            margin-left: -64px;
            font-weight: 700;
            font-size: 180px;
            line-height: 100%;
            letter-spacing: -5px;
        }
    }
`

const AboutLabel = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 45px;
    width: 100vw;
    word-break: break-all;
    color: ${Colors.White};
    text-align: right;
    margin: 0;
    margin-top: -20px;
    margin-right: -5px;
    text-transform: uppercase;
    letter-spacing: -3px;
    padding: 0;

    ${BiggerThanMedium} {
        font-size: 109px;
        width: 245px;
        line-height: 83px;
        margin-top: 10px;
        margin-left: 115px;
    }
`

const AboutRows = styled.div`
  padding: 1em;
  color: ${Colors.BlackText};
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Visibility1 = keyframes`
  2% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Visibility2 = keyframes`
  14% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Visibility3 = keyframes`
  28% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Visibility4 = keyframes`
  42% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Visibility5 = keyframes`
  56% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Visibility6 = keyframes`
  70% {
      visibility: visible;
  }

  100% {
      visibility: hidden;
  }
`

const Blinder = css`
span {
    &:nth-child(1){
      animation: ${Visibility1} 5s step-end infinite;
    }

    &:nth-child(2){
      animation: ${Visibility2} 5s step-end infinite;
    }

    &:nth-child(3){
      animation: ${Visibility3} 5s step-end infinite;
    }

    &:nth-child(4){
      animation: ${Visibility4} 5s step-end infinite;
    }

    &:nth-child(5){
      animation: ${Visibility5} 5s step-end infinite;
    }

    &:nth-child(6){
      animation: ${Visibility6} 5s step-end infinite;
    }
  }
`

const AboutFullRows = styled.div`
  padding: 1em;
  padding-left: 3em;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5em;
  justify-content: center;

  ${Blinder}
`

const AboutTextTitle = styled.div`
  flex-basis: 100%;
  height: 80px;
  margin-top: -10px;
  color: ${Colors.Black};
  word-break: break-all;
  text-overflow: clip;
  font-size: 95px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
`

const AboutHalfColumn = styled.div`
  flex-basis: 45%;
  color: ${Colors.BlackText};
  padding: 1em;
  text-align: justify;
`

const About = () =>
  <AboutStyle id="about">
    <Content>
      <AboutTitle>
        <AboutNumber>
          <span>03</span>
        </AboutNumber>
        <AboutLabel>CRAFTERS</AboutLabel>
      </AboutTitle>
      <AboutContent>
        <AboutRows>
          <AboutTextTitle>
            SOMOS LEÕES
          </AboutTextTitle>
          <AboutHalfColumn>
            A Duee é uma agência full service, que preza pela comunicação integrada, porque sabe que o mundo não se divide em on e off.
            Não criamos apenas conteúdos e campanhas, nós geramos ideias e conexões.
            Nós somos uma agência que acredita que o trabalho está em constante movimento e, por isso, estamos sempre atentos às novidades, ao público, às revoluções e novas ideias.
                  </AboutHalfColumn>
          <AboutHalfColumn>
            É por meio de nossa paixão, criatividade e de estratégias que ajudamos marcas a terem retornos eficientes, se tornarem relevantes e atingirem grandes resultados.
            O conceito "A Gente Faz" traduz a nossa experiência de 12 anos, o nosso espírito de equipe e de proatividade. É o reflexo do nosso posicionamento como agência 360 graus. A gente faz criativo. A gente faz diferente. A gente faz inteligente.
          </AboutHalfColumn>
        </AboutRows>

        <AboutFullRows>
            <span>Eventos? </span><span>A gente faz.</span><br />
          <span>Digital? </span><span>A gente faz.</span><br />
          <span>Branding? </span><span>A gente faz.</span>
        </AboutFullRows>
      </AboutContent>
    </Content>
  </AboutStyle>

export default About