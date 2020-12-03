import styled from 'styled-components';
import { flexContainer, paddingForContainer } from '../Navbar/NavbarElements'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
${flexContainer};
${paddingForContainer};
background-color: #0c0c0c;
position: relative;
z-index:1;
height:800px;

/*add before styles */
`
export const HeroBg = styled.div`
position: absolute;
top:0;
right:0;
bottom: 0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit: cover;
object-fit: cover;
background-color: #232a34;
`

export const HeroContent = styled.div`
font-size:1rem;
z-index:3;
position:absolute;
padding: 8px 24px;
${flexContainer};
flex-direction:column;
`
export const HeroH1 = styled.h1`
color: white;
font-family:-apple-system,  sans-serif;
font-size:48px;
text-align:center;

@media (max-width: 768px){
    font-size:40px;
}
@media (max-width: 480px){
    font-size:32px;
}

`

export const HeroP = styled.p`
font-size:24px;
margin-top:48px;
max-width: 600px;
@media (max-width: 480px){
    font-size:18px;
}
`


export const HeroBtnWrapper = styled.div`
${flexContainer};
margin-top:32px;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`