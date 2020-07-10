import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'
import { Icon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi-light/chevron-down';

const ServiceStyle = styled.div`
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

const SectionTitle = styled.div`
    background-color: #32DB8A;
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

const SectionContent = styled.div`
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

const SectionNumber = styled.div`
    overflow: hidden;
    margin-top: 5px;
    
    span {    
        margin-left: -10px;
        color: #55B286;
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

const SectionLabel = styled.h2`
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

const Service = () => {


return <ServiceStyle id="services">
    <Content>
        <SectionTitle>
            <SectionNumber>
                <span>01</span>
            </SectionNumber>
            <SectionLabel>Services</SectionLabel>
        </SectionTitle>
        <SectionContent>
            <div class="content-wrapper">
                <div class="image-slider-wrapper relative service slider1">
                    <a id="slider1_next" class="image_slider_next" href="#"><Icon icon={chevronDown} /></a>

                    <ul id="slider1" class="image-slider slides">
                        <li>
                            <div class="service-holder ">
                                <img src="demo-images/icon_01.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">BRANDING</div>
                                    <div class="service-content">
                                        Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_02.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">MOBILE APPS</div>
                                    <div class="service-content">
                                        Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_03.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">WEB</div>
                                    <div class="service-content">
                                        Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_04.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">GRAPHIC</div>
                                    <div class="service-content">
                                        Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.<br />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="service-holder ">
                                <img src="demo-images/icon_03.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">SERVICES</div>
                                    <div class="service-content">
                                        Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_04.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">PSD</div>
                                    <div class="service-content">
                                        Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_02.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">HTML</div>
                                    <div class="service-content">
                                        Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.<br />
                                    </div>
                                </div>
                            </div>
                            <div class="service-holder ">
                                <img src="demo-images/icon_01.png" alt="" />
                                <div class="service-content-holder">
                                    <div class="service-title">PHP</div>
                                    <div class="service-content">
                                        Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.<br />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionContent>
    </Content>
</ServiceStyle>
}

export default Service