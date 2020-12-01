import React from 'react';
import video from '../../video/video.mp4'
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP } from './HeroSectionElements';


export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi there this is Antonio</HeroH1>
                <HeroP>
                A frontend engineer experienced in react js and
                angular, working with cutting edge technologies
            </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}
