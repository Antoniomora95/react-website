import React, { useState } from "react";
import video from "../../video/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImgProfile,
  ImgWrapProfile
} from "./HeroSectionElements";
import {
  InfoRow as HeroRow,
  Column1 as HeroColumn1,
  Column2 as HeroColumn2,
  TextWrapper
} from "../InfoSection/InfoElements";

import { Button } from "../ButtonElement";

export const HeroSection = ({ img, alt }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>

        <HeroRow>
          <HeroColumn1>
            <TextWrapper>
              <HeroH1>Hi, this is Antonio</HeroH1>
              <HeroP>
                A self-taught developer focused on web technologies. I enjoy
                working with Javascript either in frontend or backend
                applications.
              </HeroP>
              <HeroBtnWrapper>
                <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  $primary={true}
                  $primaryColorBtn={false}
                  $big={true}
                  $bgDark={true}
                >
                  Contact {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </TextWrapper>
          </HeroColumn1>

          <HeroColumn2>
            <ImgWrapProfile>
              <ImgProfile src={img} alt={alt} />
            </ImgWrapProfile>
          </HeroColumn2>

        </HeroRow>
      </HeroContent>
    </HeroContainer>
  );
};
