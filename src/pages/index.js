import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import { InfoSection } from '../components/InfoSection/index'
import { homeObj, homeObj2, homeObj3 } from '../components/InfoSection/data';

export const Home = () => {
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen = { isOpen }  toggle = { toggle }/>
            <Navbar toggle = { toggle }/>
            <HeroSection/>
            <InfoSection {...homeObj}/>

        </>
    )
}
