import styled from 'styled-components'

export const TeamsContainer = styled.section`
    background-color: #F5F5F5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TeamsHeaderContainer = styled.section`
    background-color: #F5F5F5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    @media screen and (max-width: 960px){
        height: 80px;
        align-items: center;
        justify-content:center;
    }

    h2 {
        color: #262635;
    }
`

export const TeamsFilterForm = styled.form`
    margin-left: 2rem;

    @media screen and (max-width: 480px){
        margin: 0;
    }
`

export const TeamsGridContainer = styled.section`
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