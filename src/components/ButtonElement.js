import styled from 'styled-components'
import { flexContainer } from './Navbar/NavbarElements'

export const Button = styled.a`
border-radius: 50px;
background: ${({$primary}) => ($primary ? '#01bf71': '#010606')};
white-space: nowrap;
padding: ${({$big}) => ( $big ? '14px 48px' : '12px 30px')};
color: ${({$primaryColor}) => ( $primaryColor ? '#01bf71' : '#010606')};
font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
text-decoration: none;
cursor: pointer;
${flexContainer};

transition: all 0.4s ease-in-out;

&:hover {
    transition: all 0.4s ease-in-out;
    background-color: ${({$primary, $bgDark}) => {
        if($primary && !$bgDark){
            return '#010606';
        } else if(!$primary && !$bgDark){
            return '#01bf71';
        } else {
            return '#fff';
        }
    }};
    color: ${({$primaryColor}) => ( $primaryColor ? '#010606' : '#01bf71')};
}
`