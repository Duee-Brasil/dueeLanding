import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'


const AboutStyle = styled.div`
    padding: 0;
    background-color: rgb(34, 28, 90); 
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

    ${BiggerThanMedium} {

    }
`

const AboutTitle = styled.div`
    background-color: #e64b77;
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
    background-color: white;

    span {
        color: #55B286;
    }

    ${BiggerThanMedium} {
        flex: 2;
        background-color: white;
        padding: 60px 0;
        margin-top: 385px;
    }
`

const AboutNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;
    
    span {    
        margin-left: -10px;
        color: #b24564;
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

const About = () => 
<AboutStyle id="about">
<Content>
  <AboutTitle>
    <AboutNumber>
      <span>03</span>
    </AboutNumber>
    <AboutLabel>CRAFTERS</AboutLabel>
  </AboutTitle>
  <AboutContent className="section-content-holder right">
    <div className="content-wrapper">
      <div className="content-title-holder">
        <p className="content-title">About</p>
      </div>
      <div className="one_half ">
        Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum <strong>dolor sit amet</strong> consectetur est adipisicing elit, sed do eiusmod tempor
                  </div>
      <div className="one_half last ">
        <span style={{"color": "#e54b76;"}}><strong>2001-2003 ·</strong></span> <span style={{"color": "#727190;"}}><em>Art Studio Lorem Donec</em></span><br />
        <span style={{"color": "#e54b76;"}}><strong>2003-2006 ·</strong></span> <span style={{"color": "#727190;"}}><em>Per Set Web Site</em></span><br />
        <span style={{"color": "#e54b76;"}}><strong>2006-2010 ·</strong></span> <span style={{"color": "#727190;"}}><em>Setera Donec EstNunc</em></span><br />
        <span style={{"color": "#e54b76;"}}><strong>2010-2013 ·</strong></span> <span style={{"color": "#727190;"}}><em>Studio Labore Tempor</em></span><br />
        <span style={{"color": "#e54b76;"}}><strong>2013-2016 ·</strong></span> <span style={{"color": "#727190;"}}><em>Magna Ipsum Amet</em></span><br />
      </div><div className="clear"></div>
      <br />
      <br />
    </div>

    <div className="full-width ">
      <script>
        var aboutImage_speed = "500";
        var aboutImage_auto = "false";
        var aboutImage_hover = "true";
                  </script>
      <div className="image-slider-wrapper relative img aboutImage">
        <a id="aboutImage_next" className="image_slider_next" href="#">??</a>
        <div className="caroufredsel_wrapper">
          <ul id="aboutImage" className="image-slider slides">
            <li><img src="demo-images/about_img_04.jpg" alt="" /></li>
            <li><img src="demo-images/about_img_05.jpg" alt="" /></li>
            <li><img src="demo-images/about_img_06.jpg" alt="" /></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <script>
        var team1_speed = "500";
        var team1_auto = "false";
        var team1_hover = "true";
                  </script>
      <div className="image-slider-wrapper relative team team1">
        <a id="team1_next" className="image_slider_next" href="#"></a>
        <div className="caroufredsel_wrapper">
          <ul id="team1" className="image-slider slides">
            <li>
              <div className="member-content-holder">
                <h4 className="member-name">Robert Williams</h4>
                <p className="member-position">LEAD DESIGNER</p>
                <div className="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div className="member-image-holder">
                <img src="demo-images/about_img_01.jpg" alt="" />
              </div>
              <div className="clear"></div>
            </li>

            <li>
              <div className="member-content-holder">
                <h4 className="member-name">John Doe</h4>
                <p className="member-position">SEO MASTER</p>
                <div className="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div className="member-image-holder">
                <img src="demo-images/about_img_02.jpg" alt="" />
              </div>
              <div className="clear"></div>
            </li>

            <li>
              <div className="member-content-holder">
                <h4 className="member-name">John Doe</h4>
                <p className="member-position">PSD GURU</p>
                <div className="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div className="member-image-holder">
                <img src="demo-images/about_img_03.jpg" alt="" />
              </div>
              <div className="clear"></div>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </div>
    {/* <!-- end full-width div --> */}

  </AboutContent>
</Content>
</AboutStyle>

export default About