import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { flexContainer } from '../Navbar/NavbarElements';


export const FooterContainer = styled.footer`
    ${flexContainer}
    background-color: #101522;
`

// media queries are based in screen not div size, have in mind the scroll this add extra width
// scrooll add 15 px at least in this computer
export const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: 450px 450px;
    grid-gap: 15px; 
    padding: 20px 40px;
    max-width: 1100px;

    @media(max-width: 1010px){
        grid-template-columns: auto auto;
    } 

    @media(max-width: 768px){
        grid-template-columns: auto;
    } 
`

export const FooterColLinks = styled.div`
    ${flexContainer}
`
export const FooterColCredits = styled.div`
    ${flexContainer}
`

export const FooterLinksList = styled.ul`
    list-style: none;
    ${flexContainer};
`
export const FooterLinkItem = styled.li`
    margin: 2px 5px;
    cursor: pointer;
    padding: 2px;
`
export const FooterLink = styled.a`
    ${flexContainer}
    color: white;
    font-size: 2rem;
`
export const FooterCreditsText = styled.h3`
    font-size: .8rem;
    font-weight:400;
`