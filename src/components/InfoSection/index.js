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
    url,
    img,
    alt }) => {
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
                                <Button
                                    href={url}
                                    $primary={primaryButton}
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

