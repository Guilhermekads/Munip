import React from 'react';

import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu} from './SidebarElements';


const SideBar = ({isOpen, toggle}) => {
  return(
    <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/coming-son'>
                    Sobre
                </SidebarLink>
                <SidebarLink to='/coming-son' >
                    Como Funciona?
                </SidebarLink>
                <SidebarLink to='/coming-son'>
                    Markertplace
                </SidebarLink>
                <SidebarLink to='/coming-son'>
                    Ajuda
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signup'>Cadastre-se</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar;