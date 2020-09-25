import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from './Navbar.elements'


const Navbar = ({ setLogged }) => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const handleLogout = () => {
        setLogged(false)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#A8495E' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                    E-SPORTS APP
                </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks exact to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/teams'>
                                    Teams
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/worlds'>
                                    Worlds 2020
                                </NavLinks>
                            </NavItem>
                            <NavLinks to='/myteams'>
                                <Button variant="contained" color="secondary">
                                    MY TEAMS
                                </Button>
                            </NavLinks>
                            <Button onClick={handleLogout} variant="contained" color="secondary">
                                LOGOUT
                            </Button>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar