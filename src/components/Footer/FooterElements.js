import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { flexContainer, NavLogoRoute } from '../Navbar/NavbarElements';


export const FooterContainer = styled.footer`
    ${flexContainer}
    background-color: #101522;
`

// media queries are based in screen not div size, have in mind the scroll this add extra width
// scrooll add 15 px at least in this computer
export const FooterWrap = styled.div`
    display: grid;
    // how css know what would be the value of 1fr?
    // 1.- if you have a width in the div that would be your 1fr
    // 2.- if you do not have a width, 1fr would be the biggest size of your grid elements
    grid-template-columns: 2fr 1.3fr .7fr;
    grid-template-areas: 'FooColLinks FooColCredits FooColHome';
    grid-gap: 15px; 
    padding: 20px 40px;
    max-width: 1100px;

    @media(max-width: 992px){
        grid-template-columns: 2fr 1fr;
        grid-template-areas: "FooColLinks FooColHome"
        "FooColCredits  FooColCredits";
        //grid-template-areas: "FooColLinks FooColHome"
        //". [dat means space you will take 50% of tha space then]  FooColCredits";
        grid-row-gap: 30px;
    }
    @media(max-width: 576px){
        grid-template-columns: 1fr;
        grid-template-areas: "FooColLinks"
        "FooColCredits""FooColHome";
    }
`

export const FooterColLinks = styled.div`
//if you use grid area, you need to add them in grid-template-areas
    ${flexContainer}
    grid-area: FooColLinks;
`
export const FooterColCredits = styled.div`
    ${flexContainer};
    grid-area: FooColCredits;
`
export const FooterColHome = styled.div`
    ${flexContainer};
    grid-area: FooColHome;
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