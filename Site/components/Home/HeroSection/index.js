import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../../../videos/video.mp4'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return(
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>É sua hora de <br/> mudar o mundo sendo indústria<br/>ou proprietário rural</HeroH1>
        <HeroP>
            Uma plataforma na palma de sua mão <br/> rendendo a você.
        </HeroP>
        <HeroBtnWrapper>
            <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  >
                Se junte a nós{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;