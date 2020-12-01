import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { flexContainer, paddingForContainer } from '../Navbar/NavbarElements'

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
display:grid;
align-items:center;
top:0;
transition: .3s ease-in-out;
background-color: rgba(0,0,0,0.90);;
opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
right:${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`
position:absolute;
font-size:2rem;
top: 1.2rem;
right:1.2rem;
cursor:pointer;
outline:none;
`

export const CloseIcon = styled(FaTimes)`
color: #fff;
&:hover{
    transform: rotate(45deg);
    transition: .15s ease-in .05s;
}
`

export const SidebarWrapper = styled.div`
${paddingForContainer}
`

export const SidebarMenu = styled.ul`
list-style:none;
display: grid;
font-size: 3rem;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 85px);
text-align: center;
@media (max-width: 480px){
    font-size: 2.5rem;
    grid-template-rows: repeat(6, 70px);
}
`
export const SidebarItem = styled.li`
display: flex;
align-items: center;
`
export const SidebarLink = styled(LinkScroll)`
color:#fff;
width: 100%;
padding: .25rem 0rem .25rem 0rem;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`

export const SidebarBtn = styled.div`
${flexContainer}
text-align: center;
`