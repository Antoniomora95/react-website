import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import { InfoSection } from '../components/InfoSection/index'
import { homeObj, homeObj2, heroInfo, ServicesObj, footerObj } from '../components/InfoSection/data';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';
import { animateScroll } from 'react-scroll';
export const Home = () => {
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const toogleHome = () => {
        animateScroll.scrollToTop();
    }
    return (
        <>
            <Sidebar isOpen = { isOpen }  toggle = { toggle }/>
            <Navbar toggle = { toggle } toogleHome = { toogleHome }/>
            <HeroSection {...heroInfo}/>
            <InfoSection {...homeObj2}/>
            <InfoSection {...homeObj}/>
            <Services {...ServicesObj}></Services>
            <Footer {...footerObj} toogleHome = { toogleHome }/>
        </>
    )
}
