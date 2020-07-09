import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'
import { Icon } from '@iconify/react';
import chevronDown from '@iconify/icons-mdi-light/chevron-down';


const ServiceStyle = styled.div`
background-color: #221c5a;
    padding: 4em 2em 3em 2em;
    background-color: #221c5a; 
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    max-width: 1200px;
`

const SectionTitle = styled.div`
    position: relative;
    flex: 1;
    height: 375px;
    background-color: #32DB8A;
    font-family: 'Montserrat', sans-serif; 
    font-size: 24px;
    padding-bottom: 10px;

    span {
        color: #55B286;
    }
`

const SectionContent = styled.div`
    flex: 2;
    background-color: white;
    padding: 60px 0;
    margin-top: 385px;

    span {
        color: #55B286;
    }
`

const Service = () => <ServiceStyle id="services">
    <Content>
        <SectionTitle>
            <div class="section-num">
                <span>01</span>
            </div>
            <h2 class="entry-title">Services</h2>
        </SectionTitle>
        <SectionContent>
            <div class="content-wrapper">
                <script>
                    var slider1_speed = "500";
                    var slider1_auto = "false";
                    var slider1_hover = "true";
            </script>
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
                    <div class="clear"></div>
                </div>

            </div>
        </SectionContent>
        <div class='clear'></div>
    </Content>
</ServiceStyle>

export default Service