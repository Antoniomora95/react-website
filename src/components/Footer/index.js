import React from 'react';
import {
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagram,
    FaGithub,
    FaRegHeart,
    FaCopyright
} from 'react-icons/fa';
import {
    SiGmail
} from 'react-icons/si'
import {
    FooterContainer,
    FooterWrap,
    FooterColLinks,
    FooterLinksList,
    FooterLinkItem,
    FooterLink,
    FooterColCredits,
    FooterCreditsText,
    FooterColHome
} from './FooterElements';
import { NavLogoRoute } from '../Navbar/NavbarElements';
export const Footer = ({
    github, facebook, instagram, twitter, linkedin, gmail
}) => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterColLinks>
                    <FooterLinksList>
                        <FooterLinkItem>
                            <FooterLink href={github} >
                                <FaGithub />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={linkedin}>
                                <FaLinkedin />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={gmail}>
                                <SiGmail />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={facebook}>
                                <FaFacebookSquare />
                            </FooterLink>
                        </FooterLinkItem>


                        <FooterLinkItem>
                            <FooterLink href={twitter}>
                                <FaTwitterSquare />
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLink href={instagram}>
                                <FaInstagram />
                            </FooterLink>
                        </FooterLinkItem>

                    </FooterLinksList>
                </FooterColLinks>

                <FooterColCredits>
                    <FooterCreditsText>Made with <FaRegHeart /> by @antoniobautista <FaCopyright /> 2020</FooterCreditsText>
                </FooterColCredits>
                <FooterColHome>
                    <NavLogoRoute to='/'>MORA</NavLogoRoute>
                </FooterColHome>
            </FooterWrap>
        </FooterContainer>
    )
}
