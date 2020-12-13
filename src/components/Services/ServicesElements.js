import styled from 'styled-components';
import { blackColor, flexContainer } from '../Navbar/NavbarElements';


export const ServicesContainer = styled.div`
    background-color: ${({$lightBg})=>($lightBg ? '#f9f9f9': '#010606')};
    ${flexContainer};
    flex-direction:column;
    height:800px;

    @media (max-width: 768px){
        height: 1100px;
    }
    @media (max-width: 480px){
        height: 1300px;
    }

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    padding: 0 50px;

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

export const ServicesCard = styled.div`
    ${flexContainer};
    flex-direction: column;
    justify-content:space-around;
    background-color: #fff;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0, 0, 0.2);

    transition: all 0.2s ease-in-out;

    &.hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    color: ${({ $lightTitle }) => ( !$lightTitle ? blackColor : '#fff')};
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media(max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    color: ${({ $lightText }) => {
        if (!$lightText){
            return blackColor
        } else {
            return '#fff'
        }}};
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    color: ${({ $lightText }) => ( !$lightText ? blackColor : '#fff')};
    font-size: 1rem;
    text-align: center;
`