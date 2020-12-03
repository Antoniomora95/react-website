import styled from 'styled-components'

import {Link as linkScroll } from 'react-scroll'
import { flexContainer } from './Navbar/NavbarElements'

export const Button = styled(linkScroll)`
border-radius: 50px;
background: ${({$primary}) => ($primary ? '#01bf71': '#010606')};
white-space: nowrap;
padding: ${({$big}) => ( $big ? '14px 48px' : '12px 30px')};
color: ${({$dark}) => ( $dark ? '#010606' : '#fff')};
font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
${flexContainer};

transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({$primary}) => ( $primary ? '#fff' : '#01bf71')};
    color: ${({$dark}) => ( $dark ? '#fff' : '#010606')};
}
`