import React, { useState } from 'react';
import video from '../../video/video.mp4';
import { HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
 } from './HeroSectionElements';

 import { Button } from '../ButtonElement';


export const HeroSection = () => {

    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi there, this is Antonio</HeroH1>
                <HeroP>
                    A frontend engineer experienced in react js and
                    angular, signup today and get a super gift for christmas.

                </HeroP>
                <HeroBtnWrapper>
                    <Button
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    $primary={true}
                    $primaryColorBtn= {false}
                    $big= {true}
                    $bgDark={ true }
                     >
                        Get started { hover ? <ArrowForward/> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
