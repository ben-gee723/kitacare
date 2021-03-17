import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Nav = styled.nav`
    font-family:Helvetica;
    padding: 0 1rem;
    background: #0d0909;
    height: 80px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items:center;
    font-weight: 700;
    color: white;
`;

export const Buttons = styled.nav`
    
    height: 80px;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    color: white;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavButton2 = styled(Link)`
    font-size: 1rem;
    margin-left:0.2rem;
    padding: 0.5rem 2rem;
    height:3rem;
    border: none;
    background: #ff4e13;
    color: #fff;
    transition: 0.2s ease-out;
    text-decoration:none;
    display: flex;
    align-items: center;
    border-radius:5px;

    &:hover {
        background: #85d1ff;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const NavButton = styled(Link)`
    font-size: 1rem;
    padding: 0.5rem 2rem;
    height:3rem;
    border: none;
    background: #ff4e13;
    color: #fff;
    transition: 0.2s ease-out;
    text-decoration:none;
    display: flex;
    align-items: center;
    border-radius:5px;

    &:hover {
        background: #85d1ff;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;
