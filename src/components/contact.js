import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'

const ContactStyle = styled.div`
    padding: 0;
    background-color: #221c5a; 
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

const ContactTitle = styled.div`
    background-color: rgb(255, 186, 66);
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

const ContactContent = styled.div`
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

const ContactNumber = styled.div`
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

const ContactLabel = styled.h2`
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

const Contact = () => <ContactStyle id="contact">
  <Content>
    <ContactTitle>
      <ContactNumber>
        <span>07</span>
      </ContactNumber>
      <ContactLabel>Contact</ContactLabel>
    </ContactTitle>
    <ContactContent className="section-content-holder right">
      <div className="content-wrapper">
        <div className="one_half ">
          <p>Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed do eiusmod tempor.</p>
          <br />
          <p><strong><span style={{ "color": "#e64b77;" }}>Incididunt ut dolore</span></strong> magna labore eiusmod. Dolor sit amet consectetur est adipisicing elit, sed do eiusmod.</p>
        </div>
        <div className="one_half last">
          <div className="contact-form">
            <p><input id="name" type="text" name="your-name" placeholder="Name" /></p>
            <p><input id="contact-email" type="email" name="your-email" placeholder="Email" /></p>
            <p><input id="subject" type="text" name="your-subject" placeholder="Subject" /></p>
            <p><textarea id="message" name="your-message" placeholder="Message"></textarea></p>
            <p><input type="submit" onClick="SendMail()" value="SEND" /></p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="full-width">
        <iframe title="a;gumacoisa" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4274.290564544589!2d-75.2952832049782!3d40.753669641460846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1444506658649" width="600" height="450" frameborder="0" style={{ "border": "0" }} allowfullscreen></iframe>
      </div>
    </ContactContent>
  </Content>
</ContactStyle>

export default Contact