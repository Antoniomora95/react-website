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
                <HeroH1>Hi, this is Antonio</HeroH1>
                <HeroP>
                    A self-taught developer focused on web technologies.
                I enjoy working with Javascript either in frontend or backend applications.

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
                        Contact { hover ? <ArrowForward/> : <ArrowRight
                        />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
