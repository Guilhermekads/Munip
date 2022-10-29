import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

import img from '../../../images/logo1.png'
import { FooterContainer,FooterLinkContainer, FooterWrap, FooterLinksWrapper, FooterLinkTitle,
   FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements';



const Footer = () => {


  return(
    <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Sobre</FooterLinkTitle>
                  <FooterLink to='/coming-son'>Como trabalhamos?</FooterLink>
                  <FooterLink to='/coming-son'>Relatos</FooterLink>
                  <FooterLink to='/coming-son'>Carreira</FooterLink>
                  <FooterLink to='/coming-son'>Parceiros</FooterLink>
                  <FooterLink to='/coming-son'>Termos de serviço</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contate-nos</FooterLinkTitle>
                  <FooterLink to='/coming-son'>Contatos</FooterLink>
                  <FooterLink to='/coming-son'>Suporte</FooterLink>
                  <FooterLink to='/coming-son'>Patrocinadores</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Redes sociais</FooterLinkTitle>
                  <FooterLink to='/coming-son' className='ig'>Instagram</FooterLink>
                  <FooterLink to='/coming-son' className='yt'>Youtube</FooterLink>
                  <FooterLink to='/coming-son' className='fa'>Facebook</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' src={img}>
              </SocialLogo>
              <WebsiteRights>Munip © {new Date().getFullYear() + '   ' } 
               Todos direitos reservados</WebsiteRights>
              <SocialIcons>
                 <SocialIconLink href='/' target='_blank' aria-label='Facebook' className='Fb'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram' className='In'>
                  <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube' className='Yo'>
                  <FaYoutube/>
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;