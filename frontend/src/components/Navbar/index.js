import React from 'react'
import { Nav, NavButton2, NavButton, NavLink, Buttons } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Kitacare</NavLink>
                <Buttons>
                    <NavButton to='/kgregister'>              
                        Register                 
                    </NavButton>
                    <NavButton2 to='login'>              
                        Login                 
                    </NavButton2>
                </Buttons>
                
            </Nav>
        </>
    )
}

export default Navbar