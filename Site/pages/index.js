import React, { useState } from 'react';
import SideBar from '../components/Home/SideBar';
import NavList from '../components/Home/Nav-List/'
import HeroSection from '../components/Home/HeroSection';
import InfoSection from '../components/Home/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/Home/InfoSection/data';
import Footer from '../components/Home/Footer';
import Services from '../components/Home/Services';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

  return(
    <>
    <NavList toggle={toggle}/>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <Footer/>
    </>
  )
}

export default Home;