import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BiggerThanMedium, Colors } from "./breakpoints"
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-mdi-light/menu';

const Menu = styled.header`
  transition: background-color .2s linear;
  z-index: 99 !important;
  background-color: ${Colors.Black};
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;

  ${BiggerThanMedium} {
    justify-content: center;
  }
`

const Navbar = styled.nav`
  margin: 0;
  display: flex;
  justify-self: right;
  flex-wrap: wrap;
  flex-direction: column;

  ${BiggerThanMedium} {
      max-width: 1170px;
      display: inline-flex;
      justify-content: center;
      flex-direction: row;
  }
`

const ListLinks = styled.ul`
    flex: 1;
    padding: 0;
    background-color: transparent;
    list-style-type: none;
    display: ${({isOpenMenu}) => isOpenMenu ? 'flex' : 'none'};
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;


    ${BiggerThanMedium} {
      display: inline-flex;
      justify-content: space-around;
      flex-direction: row;
    }

    li {
       a {
        font-size: 13px;
        line-height: 40px;
        color: #fff;
        font-weight: 400;
        transition: color .2s linear;
        text-transform: uppercase;
        letter-spacing: 0.03cm;
        margin: 0 10px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
`

const MenuMobile = styled.div`
flex: 1;
  font-weight: 700;
  font-size: 30px;
  padding: 15px;
  transition: color .2s linear;
  color: #fff;
  cursor: pointer;

  ${BiggerThanMedium} {
    display: none;
  }
`

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return <Menu>
    <Navbar>
      <MenuMobile onClick={() => setIsOpenMenu(!isOpenMenu)}><Icon icon={menuIcon} /></MenuMobile>
      <ListLinks isOpenMenu={isOpenMenu}>
        <li><Link to="#home">Ínicio</Link></li>
        <li><Link to="#services">Serviços</Link></li>
        <li><Link to="#portfolio">Portfolio</Link></li>
        <li><Link to="#about">Somos Leões</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#contact">Contato</Link></li>
      </ListLinks>
    </Navbar>
  </Menu>
}

export default Header
