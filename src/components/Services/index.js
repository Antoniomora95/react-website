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
export const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>My experience</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1}>
                            <ServicesH2>
                                Frontend web development
                            </ServicesH2>
                            <ServicesP>
                                Most of my experience is.. blah blah
                                Maybe i should use my cv info
                            </ServicesP>
                        </ServicesIcon>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon2}>
                            <ServicesH2>
                                Backend development
                            </ServicesH2>
                            <ServicesP>
                                Most of my experience is.. blah blah
                                Maybe i should use my cv info backend
                            </ServicesP>
                        </ServicesIcon>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon3}>
                            <ServicesH2>
                                Hybrid Apps development
                            </ServicesH2>
                            <ServicesP>
                                On my first job I worked in the development of 2 mobile apps
                                using Ionic and Angular together, I worked coding the diferent pages
                                of the app, navigation, functionality and conection with the services. 

                            </ServicesP>
                        </ServicesIcon>
                    </ServicesCard>
                </ServicesWrapper>
             </ServicesContainer>
        </>
    )
}
