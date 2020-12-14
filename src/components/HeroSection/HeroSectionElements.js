import styled from 'styled-components';
import { flexContainer, paddingForContainer } from '../Navbar/NavbarElements'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Img, ImgWrap } from '../InfoSection/InfoElements'
export const HeroContainer = styled.div`
margin-top:80px;
${flexContainer};
${paddingForContainer};
background-color: #0c0c0c;
position: relative;
z-index:1;
height:auto;
min-height: 800px;
:before{
    content: '';
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left:0; 
    background:
    linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        transparent 100%);
    z-index:2;

}
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
line-height:35px;
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
export const ImgWrapProfile = styled(ImgWrap)`
    margin:auto;
    max-width:400px;
    overflow: hidden;
    border-radius: 5%;
`

export const ImgProfile = styled(Img)`
    transition: all 0.5s ease-in-out;
    &:hover{
        transform: scale(1.1);
        //transition: transform 2s ease-in-out .2s;
        transition-property: transform;
        transition-duration: 1.5s;
        transition-timing-function: linear;
        transition-delay: .2s;
    }
`
/*
The transition-property
specifies the CSS property
where the transition will be applied.
You may apply a transition to an individual
property (e.g., background-color or tranform)
or to all properties in the rule-set (i.e., all). */