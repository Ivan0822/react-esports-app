import styled from 'styled-components'

export const EventContainer = styled.section`
    background-color: #F5F5F5;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 0.2px solid #A8495E; */
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
`

export const EventImageContainer = styled.section`
    height: 100%;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const EventImage = styled.img`
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 991px){
        width: 100px;
    }
`

export const EventDescContainer = styled.section`
    margin-right: 4rem;
    height: 90%;
    width: 75%;

    h2{
        margin-top: 1rem;
        font-size: 20px;
        color: #262635;

        @media screen and (max-width: 480px){
            font-size: 15px;
        }
    }
`