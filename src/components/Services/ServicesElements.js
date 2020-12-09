import styled from 'styled-components';
import { flexContainer } from '../Navbar/NavbarElements';


export const ServicesContainer = styled.div`
    ${flexContainer};
    height:800px;
    background: #010606;

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
    flex-direction: flex-start;
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
`