import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import { Img, FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
import logo from "../../images/logo.svg";

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    
                        <SocialLogo to='/' onClick={toggleHome} >
                        <Img src={logo} alt='lg' />KitaCare</SocialLogo>
                        <SocialIcons>

                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopenernoreferrer'>
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopenernoreferrer'>
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopenernoreferrer'>
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopenernoreferrer'>
                                <FaTwitter/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer