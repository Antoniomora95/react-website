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

export const Navbar = ({ toggle, toogleHome }) => {
    const [ scrollNav, setScrollNav ]  = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        let isRendered = true;
        if(isRendered){
            window.addEventListener('scroll', changeNav);
        }
        return () => {
            isRendered = false;
        }
        
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
                        
                        to='resume'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        exact='true'>Resume</NavLink>
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