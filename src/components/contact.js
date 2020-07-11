import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'

const ContactStyle = styled.div`
    padding: 0;
    background-color: ${Colors.Black}; 
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

const ContactTitle = styled.div`
    background-color: ${Colors.Blue};
    font-family: 'Montserrat', sans-serif; 
    flex: 1;

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

const ContactContent = styled.div`
    flex: 1;
    background-color: ${Colors.White};
    padding: 1em;

    ${BiggerThanMedium} {
        order: 1;
        flex: 2;
        margin-top: 385px;
    }
`

const ContactNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;
    
    span {    
        margin-left: -10px;
        color: ${Colors.DarkBlue};
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

const ContactRows = styled.div`
  padding: 1em;
  color: ${Colors.BlackText};
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ContactHalfColumn = styled.div`
  flex-basis: 100%;
  color: ${Colors.BlackText};
  padding: 1em;
  text-align: justify;

  ${BiggerThanMedium} {
    flex-basis: 45%;
  }
`

const ContactFullRows = styled.div`
  padding: 1em;
  justify-content: center;

  iframe {
    width: 100%;
    height: 360px;
    border: none;
  }
`

const Contact = () => <ContactStyle id="contact">
  <Content>
    <ContactTitle>
      <ContactNumber>
        <span>04</span>
      </ContactNumber>
      <ContactLabel>Contato</ContactLabel>
    </ContactTitle>
    <ContactContent>
      <ContactRows>
        <ContactHalfColumn>
          <p>Quer dar sugestões, tirar suas dúvidas, conhecer melhor a Duee Brasil ou solicitar um contato de nossa equipe?</p>
          <br />
          <p>É só preencher o formulário corretamente e entraremos em contato!</p>
        </ContactHalfColumn>
        <ContactHalfColumn>
          <div className="contact-form">
            <p><input id="name" type="text" name="your-name" placeholder="Nome Completo" required/></p>
            <p><input id="contact-email" type="email" name="your-email" placeholder="E-mail" required/></p>
            <p><input id="contact-email" type="email" name="your-email" placeholder="Telefone" /></p>
            <p><input id="subject" type="text" name="your-subject" placeholder="Empresa/ Marca" required/></p>
            <p><textarea id="message" name="your-message" placeholder="Descrição do tipo de negócio" required></textarea></p>
            <p><input type="submit" onClick="SendMail()" value="SEND" /></p>
          </div>
        </ContactHalfColumn>
      </ContactRows>
      <ContactFullRows>
        <iframe title="dueebrasil" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7358.538257808268!2d-45.179879899999996!3d-22.755391499999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31541a74223471bb!2sDUEE%20BRASIL!5e0!3m2!1spt-BR!2sbr!4v1594355624604!5m2!1spt-BR!2sbr" frameBorder="0" allowFullScreen aria-hidden="false"></iframe>
      </ContactFullRows>
    </ContactContent>
  </Content>
</ContactStyle>

export default Contact