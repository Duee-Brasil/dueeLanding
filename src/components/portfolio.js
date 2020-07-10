import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'
import background from './demo-images/background_img_02.jpg'

const PortfolioStyle = styled.div`
  background-color: #221C5A; 
  background-image: url(${background}); 
  background-repeat: no-repeat; 
  background-position: center top; 
  background-size: auto;
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

    ${BiggerThanMedium} {

    }
`

const PortfolioTitle = styled.div`
    background-color: rgb(255, 186, 66);
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
    background-color: white;
    order: 2;

    span {
        color: #55B286;
    }

    ${BiggerThanMedium} {
        order: 1;
        flex: 2;
        background-color: white;
        padding: 60px 0;
        margin-top: 385px;
    }
`

const PortfolioNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;
    
    span {    
        margin-left: -10px;
        color: #e3a436;
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
    color: white;
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
        color: white;
        margin-left: 115px;
        letter-spacing: -3px;
    }
`

const Portfolio = () => <PortfolioStyle id="portfolio">
<Content>
  <PortfolioTitle>
    <PortfolioNumber>
      <span>02</span>
    </PortfolioNumber>
    <PortfolioLabel>Portfolio</PortfolioLabel>
  </PortfolioTitle>
  <PortfolioContent className="section-content-holder portfolio-holder left">
    <div className="grid" id="portfolio-grid">
      <div className="grid-sizer"></div>
      <div className="grid-item element-item p_one">
        <a href="single-portfolio.html">
          <img src="demo-images/portfolio_item_01.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one_half">
        <a href="single-portfolio2.html">
          <img src="demo-images/portfolio_item_02.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one_half">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_08.jpg">
          <img src="demo-images/portfolio_item_08.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_05.jpg">
          <img src="demo-images/portfolio_item_05.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="clear"></div>
    <div className="block portfolio-load-more-holder">
      <a target="_self" className="more-posts">LOAD MORE</a>
      <img src="images/icon_infinity.svg" alt="Load more" />
    </div>
  </PortfolioContent>
</Content>
</PortfolioStyle>

export default Portfolio