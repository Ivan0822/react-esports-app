import styled from 'styled-components'

export const MyTeamsLargeContainer = styled.section`
    height: 100vh;
    width: 100%;
    background: #F5F5F5;
    position: absolute;
    top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const MyTeamsHeader = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    color: #262635;
`

export const MyTeamsSmallContainer = styled.section`
    background-color: #F5F5F5;
    width:80%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    padding-top: 3rem;

    @media screen and (max-width: 991px){
        width: 100%;
    }
`