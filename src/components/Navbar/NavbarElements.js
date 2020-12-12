import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const blackColor = '#010606';


export const flexContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const spaceBetween = css`
    justify-content: space-between;
`
export const paddingForContainer = css`
    padding: 0 30px;
`


export const Nav = styled.nav`
    ${flexContainer};
    background: #000;
    height: 80px;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    ${flexContainer};
    ${spaceBetween};
    ${paddingForContainer}
    width: 100%;
    max-width: 1100px;
    height: 80px;
    z-index:1;
`

export const NavLogoRoute = styled(LinkRouter)`
    color: white;
    cursor: pointer;
    font-size: 1.6rem;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
`

export const MobileIcon = styled.div`
display: none;

@media (max-width: 768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
${flexContainer}
list-style: none;
@media (max-width: 768px){
    display:none;
}
`

export const NavItem = styled.li`
height:80px;
`
export const NavLink = styled(LinkScroll)`
    ${flexContainer}
    color: #fff;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:active{
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtnContainer = styled.div`
${flexContainer};
@media ( max-width:768px ){
    display:none;
}
`

export const BtnRoute = styled(LinkRouter)`
    background: #01bf71;
    color: #fff;
    // change the width based in the prop
    width: ${({ width }) => (width ? width : '')};
    display:block;
    font-size:1rem;
    border-radius:50px;
    text-decoration:none;
    padding: .6rem 1.5rem;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all .2s ease-in-out;
        background:#fff;
        color: #010606
    }
`