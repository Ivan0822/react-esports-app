import styled from 'styled-components'

export const RosterContainer = styled.section`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    @media screen and (max-width:991px){
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    button::nth-child(1){
        margin-top: 1rem;
            width: 30px;
    }
`