import React from 'react';

import {FaBars} from 'react-icons/fa'

import { Nav, NavbarContainer, NavLogo, NavLogoImg, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavElements';

import { Link } from 'react-scroll';

import logo from '../../../images/logo.png'


const NavList = ({toggle}) => {
  return(
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavLogoImg src={logo}/>
                </NavLogo>

                <MobileIcon onClick={toggle}>

                    <FaBars />
                
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks >
                           <Link to='sobre' smooth={true} duration={800}>Sobre</Link> 
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/coming-son'>
                            Como Funciona?
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/login'>
                            Markertplace
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/coming-son'>
                            Ajuda
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Cadastre-se</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default NavList;