import React from "react"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from './breakpoints'
// import { Icon } from '@iconify/react';
// import chevronDown from '@iconify/icons-mdi-light/chevron-down';
import Icon1 from '../images/leao1.svg'
import Icon2 from '../images/leao5.svg'
import Icon3 from '../images/leao3.svg'
import Icon4 from '../images/leao4.svg'

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
    background-color: ${Colors.Blue};
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
`

const IconsLion = styled.img`
    display: inline-block;
    width: 50px !important;
    vertical-align: top;
`

const ServiceItemTitle = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 1em;
    letter-spacing: 3px;
`

const Service = () => <ServiceStyle id="services">
        <Content>
            <SectionTitle>
                <SectionNumber>
                    <span>01</span>
                </SectionNumber>
                <SectionLabel>Serviços</SectionLabel>
            </SectionTitle>
            <SectionContent>
                    <ServiceItem>
                        <IconsLion src={Icon1} alt="" />
                        <div>
                            <ServiceItemTitle>Agência Full Service</ServiceItemTitle>
                            <div class="service-content">
                                <p>A Duee Brasil tem a expertise necessária para gerenciar múltiplas estratégias de marketing e publicidade, em vários tipos de mídia diferentes, online e offline.
Isso tudo inclui desenvolvimento de sites, SEO, produção de mídias diversas, branding, design gráfico, campanhas, criação de conteúdos diversos, entre outros.</p>
                                <p>Assim, a Duee Brasil oferece aos clientes um quadro completo de soluções, trabalhos e comunicações, atendendo negócios variados e clientes com necessidades diferentes.</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <IconsLion src={Icon2} alt="" />
                        <div class="service-content-holder">
                            <ServiceItemTitle>360 Graus</ServiceItemTitle>
                            <div class="service-content">
                                <p>A Duee Brasil tem um conceito de comunicação 360, que estabelece estratégias completas, em todas as áreas, para se comunicar com o público.
                                Por isso não focamos apenas no processo, mas nas estratégias como um todo, preenchendo diferentes canais de comunicação e mídia, para que a mensagem seja passada com eficiência.</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <IconsLion src={Icon3} alt="" />
                        <div class="service-content-holder">
                            <ServiceItemTitle>Branding e Rebranding</ServiceItemTitle>
                            <div class="service-content">
                                <p>Através do processo completo de branding, a Duee Brasil garante um posicionamento eficiente da marca no mercado de trabalho, uma gestão e um planejamento estruturado a longo prazo.</p>
                                <p>Com o rebranding, a Duee trabalha com o reposicionamento, mudando a abordagem de uma marca dentro do mercado, sem esquecer, é claro, de considerar os pontos positivos que já existem ou descaracterizar a marca para os consumidores.</p>
                            </div>
                        </div>
                    </ServiceItem>
                    <ServiceItem>
                        <IconsLion src={Icon4} alt="" />
                        <div class="service-content-holder">
                            <ServiceItemTitle>Duee Marketing Digital</ServiceItemTitle>
                            <div class="service-content">
                                <p>De forma completa, a Duee Brasil trabalha com a comunicação nas redes sociais, desenvolvimento de sites e demais canais do mundo online, promovendo planejamento e produção de conteúdo específico para marketing digital.
                                Dessa forma a marca pode alcançar diferentes públicos, falar mais diretamente com o consumidor, chegar até o target e, claro, ter um feedback mais rápido.
</p><p>Além disso, utilizando o marketing digital, é possível mensurar as reações e respostas do público, tendo uma maior noção do alcance, engajamento e demais interações com o conteúdo produzido.</p>
                            </div>
                        </div>
                    </ServiceItem>
            </SectionContent>
        </Content>
    </ServiceStyle>

export default Service