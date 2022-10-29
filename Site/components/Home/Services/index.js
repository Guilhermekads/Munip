import React from 'react';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesCard, ServicesP, ServicesH2} from './servicesElements'

import icon1 from '../../../images/svg3.svg'
import icon2 from '../../../images/svg4.svg'
import icon3 from '../../../images/svg5.svg'

const Services = () => {
  return(
    <ServicesContainer id='services'>
      <ServicesH1>Nossos objetivos</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1}/>
              <ServicesH2>Facilitar creditos de carbono</ServicesH2>
              <ServicesP>Somos a primeira plataforma de créditos de carbono brasileira</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2}/>
              <ServicesH2>Virtualmente e sem complicações</ServicesH2>
              <ServicesP>A facilidade de utilização em primeiro lugar 
              </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3}/>
              <ServicesH2>Emissão de certificados de carbono neutro</ServicesH2>
              <ServicesP>Empresas recebem certificados ao comprarem créditos de propriedades rurais, de acordo com seu tamanho</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;