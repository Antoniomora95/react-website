import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarItem,
    SidebarLink,
    SidebarBtn
} from './SidebarElements';
import { BtnRoute as SidebarBtnRoute } from '../Navbar/NavbarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = { isOpen } onClick = { toggle }>
            <Icon onClick = { toggle }>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem>
                        <SidebarLink to="about" onClick = { toggle }> About </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="mycode" onClick = { toggle }> My code </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="experience" onClick = { toggle }> Experience </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="signup" onClick = { toggle }> Sign Up </SidebarLink>
                    </SidebarItem>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarBtnRoute to="/signin" width={'200px'}>
                        Sign In
                    </SidebarBtnRoute>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar;
