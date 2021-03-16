import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>KitaCare</SocialLogo>
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