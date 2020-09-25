import styled from 'styled-components'

export const PlayerContainer = styled.section`
    width: 70%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 6px 8px 2px hsla(0, 0%, 0%, 0.2);
    margin-top: 1rem;

    @media screen and (max-width:991px){
        width: 90%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

`

export const PlayerImageContainer = styled.section`
        @media screen and (max-width:991px){
            flex-shrink: 4;
    }
`

export const PlayerImage = styled.img`
    width: 150px;
`

export const PlayerInfoContainer = styled.section`

`

export const PlayerNameContainer = styled.section`

`

export const PlayerLeaguepedia = styled.section`

`