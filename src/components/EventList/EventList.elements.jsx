import styled from 'styled-components'
import { Container } from '../../globalStyles'


export const EventListLargeContainer = styled.section`
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const EventListSmallContainer = styled(Container)`
    margin: auto;
    margin-top: 5rem;
    width: 90%;
    background-color: #F5F5F5;
    height: 180vh;

    @media screen and (max-width: 960px){
        width: 100%;
    }

    a{
        text-decoration: none;
    }

`

export const EventListGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
`