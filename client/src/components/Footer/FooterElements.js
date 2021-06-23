import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #0d0909;
    border-radius: 5px;
    margin-top: 5rem;
    padding:0.5rem;
`;

export const FooterWrap = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;

`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
   

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const Img = styled.img`
    width: 3rem;
    height: 3rem;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;