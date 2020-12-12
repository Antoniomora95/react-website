import React from 'react';

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements'

//I'll handle my experience in compoenent called services
// y offer this services as a professional
export const Services = ({
    id,
    lightBg,
    lightText,
    titleSection,
    cards }) => {

    return (
        <>
            <ServicesContainer id={id} $lightBg={lightBg}>
                <ServicesH1 $lightText={lightText}>{titleSection}</ServicesH1>
                <ServicesWrapper>
                    {
                        cards.map(card => {
                            const { icon, iconAlt, title, paragraphText } = card;
                            return <ServicesCard key={icon}>
                                <ServicesIcon src={icon} alt={iconAlt} />
                                <ServicesH2 $lightText={lightText}>
                                    {title}
                                </ServicesH2>
                                <ServicesP>
                                    {paragraphText}
                                </ServicesP>
                            </ServicesCard>
                        })
                    }
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}