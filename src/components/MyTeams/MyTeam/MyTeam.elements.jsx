import styled from 'styled-components'

export const MyTeamLargeContainer = styled.section`
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    button {
        margin-top: 1rem;
    }

    @media screen and (max-width: 960px){
        height: 200px;
        width: 130px;
    }
`

export const MyTeamSmallContainer = styled.section`
    height: 200px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0 6px 8px 2px hsla(0, 0%, 0%, 0.2);
    margin: 2rem;

    &:hover {
        box-shadow: 0 10px 12px 2px hsla(0, 0%, 0%, 0.4);
        transition: box-shadow 0.5s ease;
    }

    @media screen and (max-width: 960px){
        height: 150px;
        width: 130px;
    }

`

export const MyTeamImage = styled.img`
    width: 80%;
`
export const MyTeamName = styled.span`
    height: 20%;
    color: #262635;
    position: sticky;
    padding-bottom: 1rem;
    @media screen and (max-width: 960px){
        font-size: 0.9rem;
        justify-self: center;
    }
`