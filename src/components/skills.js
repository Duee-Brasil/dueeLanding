import React from "react"
import styled from "styled-components"
import { BiggerThanMedium } from './breakpoints'

const SkillStyle = styled.div`
  background-color: rgb(34, 28, 90); 
  background-image: url("demo-images/item_background_01.jpg"); 
  background-repeat: no-repeat; 
  background-position: left top; 
  background-size: 100%; 
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

const SkillTitle = styled.div`
    background-color: #32DB8A;
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

const SkillContent = styled.div`
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

const SkillNumber = styled.div`
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

const SkillLabel = styled.h2`
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

const Skills = () => <SkillStyle id="skills">
<Content>
  <SkillTitle>
    <SkillNumber>
      <span>06</span>
    </SkillNumber>
    <SkillLabel>EXPERTISE</SkillLabel>
  </SkillTitle>
  <SkillContent className="section-content-holder left">
    <div className="content-wrapper">
      <div className="content-title-holder">
        <p className="content-title">Skills</p>
      </div>
      <p>Fusce suscipit, orci eget lobortis sodales, velit nunc tristique metus, in tristique odio ante id sem. Etiam in quam et sapien bibendum mollis. Morbi eget velit eros, quis imperdiet arcusere perdan. Nunc lorem justo, pellentesque ac egestas quis.</p>
      <br />
      <div className="progress_bar ">
        <div className="progress_bar_field_holder" style={{"width":"81%;"}}>
          <div className="progress_bar_title" style={{"color": "#55B286"}}>HTML</div>
          <div className="progress_bar_percent_text" style={{"color": "#55B286"}}>81%</div>
          <div className="progress_bar_field_perecent" style={{"background-color": "#32DB8A;"}}></div>
        </div>
      </div>
      <div className="progress_bar ">
        <div className="progress_bar_field_holder" style={{"width": "93%;"}}>
          <div className="progress_bar_title" style={{"color": "#E3A536"}}>CSS</div>
          <div className="progress_bar_percent_text" style={{"color": "#E3A536"}}>93%</div>
          <div className="progress_bar_field_perecent" style={{"background-color":"#FFBB42;"}}></div>
        </div>
      </div>
      <div className="progress_bar ">
        <div className="progress_bar_field_holder" style={{"width": "72%;"}}>
          <div className="progress_bar_title" style={{"color": "#B24564"}}>PSD</div>
          <div className="progress_bar_percent_text" style={{"color": "#B24564"}}>72%</div>
          <div className="progress_bar_field_perecent" style={{"background-color":"#E74C78;"}}></div>
        </div>
      </div>
      <div className="progress_bar ">
        <div className="progress_bar_field_holder" style={{"width": "99%;"}}>
          <div className="progress_bar_title" style={{"color": "#468ac7"}}>DESIGN</div>
          <div className="progress_bar_percent_text" style={{"color": "#468ac7"}}>99%</div>
          <div className="progress_bar_field_perecent" style={{"background-color":"#4C9EE7;"}}></div>
        </div>
      </div>
    </div>
  </SkillContent>
</Content>
</SkillStyle>

export default Skills