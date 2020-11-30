import React from 'react';
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

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogoRoute to='/'>MORA</NavLogoRoute>
                <MobileIcon onClick={ toggle }>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to='about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='discover'>Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='signup'>Sign Up</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtnContainer>
                    <NavBtnRoute to="/signin">Sign in</NavBtnRoute>
                </NavBtnContainer>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar;

//stock components