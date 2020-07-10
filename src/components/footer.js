import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Colors } from './breakpoints'
import { Icon } from '@iconify/react';
import instagramOutlined from '@iconify/icons-ant-design/instagram-outlined';
import facebookOutlined from '@iconify/icons-ant-design/facebook-outlined';


const FooterStyle = styled.footer`
    width: 100vw;
    background-color: ${Colors.Black};
    line-height: 36px;
    color: ${Colors.BlackText};
    padding: 2em;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
`

const FooterRow = styled.div`
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
    margin-bottom: 40px;
`

const LinkSite = styled.span`
    width: fit-content;
    margin: 1em 3em;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 50px;

    a {
        color: ${Colors.Pink};  
    }
`

const Copyrights = styled.div`
    font-size: 14px;
`

const Socials = styled.div`
    font-size: 30px;
    color: ${Colors.Black};

    svg {
        path {
            fill: ${Colors.BlackText}; 
        }

        &:hover {
            path {
                    fill: ${Colors.Pink};
                }
        }
    } 
`

const Footer = () => <FooterStyle>
    <FooterRow>
        <LinkSite><Link to="https://dueebrasil.com.br">Veja nosso site completo</Link></LinkSite>
    </FooterRow>
    <FooterRow>
        <Copyrights>
            © 2020 All rights reserved. | Duee Brasil
        </Copyrights>
        <Socials>
            <Link to="https://www.facebook.com/agenciadueebrasil"><Icon icon={facebookOutlined} /></Link>
            <Link to="https://www.instagram.com/dueebrasil"><Icon icon={instagramOutlined} /></Link>
        </Socials>
    </FooterRow>
</FooterStyle>

export default Footer