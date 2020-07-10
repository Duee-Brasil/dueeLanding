import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'
// import { Icon } from '@iconify/react';
// import chevronDown from '@iconify/icons-mdi-light/chevron-down';
import Icon1 from './demo-images/icon_01.png'
import Icon2 from './demo-images/icon_02.png'
import Icon3 from './demo-images/icon_03.png'
import Icon4 from './demo-images/icon_04.png'

const ServiceStyle = styled.div`
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
    background-color: ${Colors.White};
    padding: 2em;

    ${BiggerThanMedium} {
        flex: 2;
        display: inline-flex;
        flex-wrap: wrap;
        margin-top: 385px;
        justify-content: space-between;
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

const ServiceItem = styled.div`
    flex-basis: 45%;
    color: ${Colors.BlackText};
    text-align: justify;

    img {
        display: inline-block;
        width: 50px !important;
        vertical-align: top;
    }
`

const Service = () => {


    return <ServiceStyle id="services">
        <Content>
            <SectionTitle>
                <SectionNumber>
                    <span>01</span>
                </SectionNumber>
                <SectionLabel>Serviços</SectionLabel>
            </SectionTitle>
            <SectionContent>
                    <ServiceItem>
                        <img src={Icon1} alt="" />
                        <div class="service-content-holder">
                            <div class="service-title">Agência Full Service</div>
                            <div class="service-content">
                                <p>A Duee Brasil tem a expertise necessária para gerenciar múltiplas estratégias de marketing e publicidade, em vários tipos de mídia diferentes, online e offline.
Isso tudo inclui desenvolvimento de sites, SEO, produção de mídias diversas, branding, design gráfico, campanhas, criação de conteúdos diversos, entre outros.</p>
                                <p>Assim, a Duee Brasil oferece aos clientes um quadro completo de soluções, trabalhos e comunicações, atendendo negócios variados e clientes com necessidades diferentes.</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <img src={Icon2} alt="" />
                        <div class="service-content-holder">
                            <div class="service-title">360 Graus</div>
                            <div class="service-content">
                                <p>A Duee Brasil tem um conceito de comunicação 360, que estabelece estratégias completas, em todas as áreas, para se comunicar com o público.
                                Por isso não focamos apenas no processo, mas nas estratégias como um todo, preenchendo diferentes canais de comunicação e mídia, para que a mensagem seja passada com eficiência.
</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <img src={Icon3} alt="" />
                        <div class="service-content-holder">
                            <div class="service-title">Branding e Rebranding</div>
                            <div class="service-content">
                                <p>Através do processo completo de branding, a Duee Brasil garante um posicionamento eficiente da marca no mercado de trabalho, uma gestão e um planejamento estruturado a longo prazo.</p>
                                <p>Com o rebranding, a Duee trabalha com o reposicionamento, mudando a abordagem de uma marca dentro do mercado, sem esquecer, é claro, de considerar os pontos positivos que já existem ou descaracterizar a marca para os consumidores.</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <img src={Icon4} alt="" />
                        <div class="service-content-holder">
                            <div class="service-title">Duee Marketing Digital</div>
                            <div class="service-content">
                                <p>De forma completa, a Duee Brasil trabalha com a comunicação nas redes sociais, desenvolvimento de sites e demais canais do mundo online, promovendo planejamento e produção de conteúdo específico para marketing digital.
                                Dessa forma a marca pode alcançar diferentes públicos, falar mais diretamente com o consumidor, chegar até o target e, claro, ter um feedback mais rápido.
Além disso, utilizando o marketing digital, é possível mensurar as reações e respostas do público, tendo uma maior noção do alcance, engajamento e demais interações com o conteúdo produzido.</p>
                            </div>
                        </div>
                    </ServiceItem>
            </SectionContent>
        </Content>
    </ServiceStyle>
}

export default Service