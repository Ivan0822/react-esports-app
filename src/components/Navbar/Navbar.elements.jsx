import styled from 'styled-components'
import { BiGame } from 'react-icons/bi'
import { Container } from '../../globalStyles'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #262635;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 999;
    top: 0;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 100px;

    ${Container}
`

export const NavLogo = styled(Link)`
    margin-bottom: 0.5rem;
    color: #F3F7F7;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(BiGame)`
    margin-right: 0.5rem;
`

export const MobileIcon = styled.section`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 10px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #262635;
    }

    button{
        margin-left: 1rem;


    @media screen and (max-width: 960px){
        margin-top: 2rem;
    }
    }
`

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #A8495E;
    }

    @media screen and (max-width: 960px){
        &:hover {
        border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: #F3F7F7;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;   

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #A8495E;
            transition: all 0.5s ease;
        }
    }
`

