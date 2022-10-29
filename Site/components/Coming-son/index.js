import React from 'react';

import { ComingsonCounterWrapper, ComingsonBot, ComingsonContainer, ComingsonTop,Logo, Counter, CounterH1, Time, Seconds, Small, Span, Days, Hours, Minutes, } from './ComingsonElements';

import Top from '../../images/top-image.svg'

import Bot from '../../images/bottom-image.svg'

import logo from '../../images/logo.png'

const Comingson = ({ timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return(
    <ComingsonContainer>
        <ComingsonTop src={Top}/>
        <ComingsonCounterWrapper>
            <CounterH1>Falta pouco para aproveitar 100% de nossa plataforma...</CounterH1>
                <Counter>
                    <Days>
                        <Small>Dias</Small>
                        <Time>{timerDays}</Time>
                    </Days>
                    <Span>:</Span>
                    <Hours>
                        <Small>Horas</Small>
                        <Time>{timerHours}</Time>
                    </Hours>
                    <Span>:</Span>
                    <Minutes>
                        <Small>Minutos</Small>
                        <Time>{timerMinutes}</Time>
                    </Minutes>
                    <Span className='none'>:</Span>
                    <Seconds>
                        <Small>Segundos</Small>
                        <Time>{timerSeconds}</Time>
                    </Seconds>
                </Counter>
                <Logo src={logo}/>
        </ComingsonCounterWrapper>
        <ComingsonBot src={Bot}/>
    </ComingsonContainer>
  )
}

export default Comingson;