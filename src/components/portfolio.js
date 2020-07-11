import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { InlineIcon } from '@iconify/react';
import chevronRight from '@iconify/icons-mdi-light/chevron-right';
import { BiggerThanMedium, Colors } from './breakpoints'
import Starbucks from '../images/starbucks.jpg'
import Bluemoon from '../images/bluemoon.jpg'
import Made from '../images/made.jpg'
import Maille from '../images/maille.jpg'
import Casal from '../images/cg.png'
import Oito from '../images/oito.jpg'


const PortfolioStyle = styled.div`
  background-color: ${Colors.Black}; 
  padding: 0;
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

const PortfolioTitle = styled.div`
    background-color: ${Colors.Yellow};
    font-family: 'Montserrat', sans-serif; 
    flex: 1;
    order: 1;

${BiggerThanMedium} {
    order: 2;
    position: sticky;
    position: -webkit-sticky;
    top: 72px;
    height: 375px;
    font-size: 24px;
    padding-bottom: 10px;
}   
`

const PortfolioContent = styled.div`
    flex: 1;
    background-color: ${Colors.White};
    order: 2;

    ${BiggerThanMedium} {
        order: 1;
        flex: 2;
        margin-top: 385px;
    }
`

const PortfolioNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;

    
    span {    
        margin-left: -10px;
        color: ${Colors.DarkYellow};
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

const PortfolioLabel = styled.h2`
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
        word-break: break-all;
        line-height: 83px;
        margin-top: 10px;
        margin-left: 115px;
        letter-spacing: -3px;
    }
`

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
`

const PortfolioTitleHover = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  bottom: 30px;
  right: 30px;
  z-index: 1;
  font-size: 20px;
  background-color: ${Colors.White};
  color: ${Colors.BlackText};
  text-align: center;
  visibility: hidden;
  transition: ease-in-out .5s linear;
`

const CaseTitle = styled.p`
    font-family: 'Montserrat', sans-serif;    
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 4px;
    margin-bottom: 10px;
`

const CaseSubTitle = styled.p`
  font-family: 'Montserrat', sans-serif;    
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #8e8da9;
`

const SeeMore = styled.div`
  background-color: ${Colors.Pink};
  width: 100%;
  flex-basis: 100%;
  justify-self: end;
  justify-content: end;
  margin-left: auto;
  text-align: center;
  padding: 2%;
  margin-bottom: 5px;

  ${BiggerThanMedium} {
    width: 50%;
    flex-basis: 50%;
    flex-grow: 6;
    margin-bottom: 0;
  }
  
  a {
    font-family: 'Montserrat', sans-serif;  
    font-weight: bold;
    font-size: 20px;
    color: ${Colors.White};
    line-height: 32px;
    vertical-align: top;

    ${BiggerThanMedium} {
      font-size: 28px;
      line-height: 42px;
    }
  }
`

const PortfolioGridOne = styled.div`
  flex-basis: 100%;
  flex-grow: 12;
  position: relative;
  justify-content: center;
  align-items: center;
  align-content: center;

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    ${PortfolioTitleHover} {
      visibility: visible;
    }
  }
`

const PortfolioGridHalf = styled(PortfolioGridOne)`
  flex-basis: 50%;
  flex-grow: 6;
`

const Portfolio = () => <PortfolioStyle id="portfolio">
  <Content>
    <PortfolioTitle>
      <PortfolioNumber>
        <span>02</span>
      </PortfolioNumber>
      <PortfolioLabel>Portfolio</PortfolioLabel>
    </PortfolioTitle>
    <PortfolioContent>
      <PortfolioGrid>
        <PortfolioGridOne>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Starbucks} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Starbucks</CaseTitle>
              <CaseSubTitle>Panetone Natal 2019</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridOne>
        <PortfolioGridHalf>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Bluemoon} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Blue Moon</CaseTitle>
              <CaseSubTitle>Mídia Digital</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridHalf>
        <PortfolioGridHalf>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Made} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Made In Brazil</CaseTitle>
              <CaseSubTitle>Mídia Digital</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridHalf>
        <PortfolioGridHalf>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Maille} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Maille</CaseTitle>
              <CaseSubTitle>Mídia Digital</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridHalf>
        <PortfolioGridHalf>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Casal} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Casal Garcia</CaseTitle>
              <CaseSubTitle>Mídia Digital</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridHalf>
        <PortfolioGridOne>
          <Link to="https://dueebrasil.com.br/portfolio">
            <img src={Oito} alt="" />
            <PortfolioTitleHover>
              <CaseTitle>Oito</CaseTitle>
              <CaseSubTitle>Desenvolvimento Web App</CaseSubTitle>
            </PortfolioTitleHover>
          </Link>
        </PortfolioGridOne>
      </PortfolioGrid>

      <SeeMore>
        <Link to="https://dueebrasil.com.br/portfolio">
          VER TODOS <InlineIcon icon={chevronRight} width={'42px'} />
        </Link>
      </SeeMore>
    </PortfolioContent>
  </Content>
</PortfolioStyle>

export default Portfolio