import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import { InfoSection } from '../components/InfoSection/index'
import { homeObj, homeObj2, heroInfo, ServicesObj } from '../components/InfoSection/data';
import { Services } from '../components/Services';

export const Home = () => {
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen = { isOpen }  toggle = { toggle }/>
            <Navbar toggle = { toggle }/>
            <HeroSection {...heroInfo}/>
            <InfoSection {...homeObj2}/>
            <InfoSection {...homeObj}/>
            <Services {...ServicesObj}></Services>

        </>
    )
}
