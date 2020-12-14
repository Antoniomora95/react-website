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
    github, facebook, instagram, twitter, linkedin, gmail, toogleHome
}) => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterColLinks>
                    <FooterLinksList>
                        <FooterLinkItem>
                            <FooterLink href={github} target="_blank" aria-label="Github">
                                <FaGithub />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={linkedin} target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={gmail} target="_blank" aria-label="Gmail">
                                <SiGmail />
                            </FooterLink>
                        </FooterLinkItem>

                        <FooterLinkItem>
                            <FooterLink href={facebook} target="_blank" aria-label="Facebook">
                                <FaFacebookSquare />
                            </FooterLink>
                        </FooterLinkItem>


                        <FooterLinkItem>
                            <FooterLink href={twitter} target="_blank" aria-label="Twitter">
                                <FaTwitterSquare />
                            </FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLink href={instagram} target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </FooterLink>
                        </FooterLinkItem>

                    </FooterLinksList>
                </FooterColLinks>

                <FooterColCredits>
                    <FooterCreditsText>Made with <FaRegHeart /> by @antoniobautista <FaCopyright /> 2020</FooterCreditsText>
                </FooterColCredits>
                <FooterColHome>
                    <NavLogoRoute to='/' onClick={ toogleHome }>MORA</NavLogoRoute>
                </FooterColHome>
            </FooterWrap>
        </FooterContainer>
    )
}
