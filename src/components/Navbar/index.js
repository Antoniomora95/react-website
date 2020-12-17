import React, { useState, useEffect }  from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogoRoute,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtnContainer,
BtnRoute as NavBtnRoute } from './NavbarElements';

const Navbar = ({ toggle, toogleHome }) => {
    const [ scrollNav, setScrollNav ]  = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        console.log('run once, mounted');
        window.addEventListener('scroll', changeNav)
    }, [])
    
    return (
        <>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogoRoute to='/' onClick={ toogleHome }>MORA</NavLogoRoute>
                <MobileIcon onClick={ toggle }>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink
                        
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={ 600 }
                        delay={200}
                        exact='true'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        
                        to='mycode'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        delay={200}
                        exact='true'>My code</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        
                        to='experience'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        exact='true'>Experience</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        
                        to='signup'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        exact='true'>Sign Up</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtnContainer>
    <NavBtnRoute to="signin" >Sign in </NavBtnRoute>
                </NavBtnContainer>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar;

//stock components