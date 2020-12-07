import styled from 'styled-components';
import { flexContainer } from '../Navbar/NavbarElements';

export const InfoContainer = styled.div `
${flexContainer}
background-color: ${({$lightBg})=>($lightBg ? '#f9f9f9': '#010606')};

@media (max-width: 768px){
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
    ${flexContainer};
    z-index:1;
    height:860px;
    width:100%;
    max-width: 1100px;
    padding: 0 24px;
`

export const InfoRow = styled.div`
    display:grid;
    // minmax auto = enough space to fit the content
    // minmax 1fr = basically it will take all the availavle width -->100%
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    // 'div1 div 2' this mean a row with two elements inside
    // check how in >768px you have two divs per row, less than 768 you put only 1 div per row 'col' 'col' 
    grid-template-areas: ${({$imgStart}) => ($imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media(max-width:768px){
        grid-template-areas: ${({$imgStart}) => ($imgStart ? `'col2' 'col1'`: `'col1' 'col2'`)}
    }
`

export  const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export  const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color:#01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({$lightText}) => ($lightText ? '#f7f8fa' : '#010606')};

    @media(max-width: 480px){
        font-size: 32px
    }
`

export const Subtitle = styled.p`
    max-width: 480px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${({$lightText})=>( $lightText ? '#f7f8fa': '#010606')};
`
export const BtnWrap = styled.div`
text-align: left;
`
export const ImgWrap = styled.div`
max-width: 555px;
height:100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0px;
    padding-right: 0px;
`
