import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    ImgWrap
} from './InfoElements';
import { Button } from '../ButtonElement'
export const InfoSection = ({
    id,
    topLine,
    lightBg,
    imgStart,
    lightText,
    darkText,
    primaryColorBtn,
    primaryButton,
    headLine,
    description,
    buttonLabel,
    img,
    alt }) => {
        console.log(primaryColorBtn);
    return (
        <InfoContainer id={id} $lightBg={lightBg}>
            <InfoWrapper>
                <InfoRow $imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading $lightText={lightText}>{headLine}</Heading>
                            <Subtitle $lightText={lightText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                    $primary={primaryButton}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    $primaryColor={primaryColorBtn}
                                    $bgDark={!lightBg}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

