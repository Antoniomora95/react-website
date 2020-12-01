import styled from 'styled-components';
import { flexContainer, paddingForContainer } from '../Navbar/NavbarElements'

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
z-index:2;
text-align:center;
`
export const HeroH1 = styled.h1`
color: white;
font-family:-apple-system,  sans-serif;
`

export const HeroP = styled.p`
font-size:1rem;
margin-top:40px;
`