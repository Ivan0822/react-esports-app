import { Fab } from '@material-ui/core'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';


export const TeamContainer = styled.section`
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

export const TeamImage = styled.img`
    width: 80%;
`
export const TeamName = styled.span`
    height: 20%;
    color: #262635;
    position: sticky;
    padding-bottom: 1rem;
    @media screen and (max-width: 960px){
        font-size: 0.9rem;
        justify-self: center;
    }
`

export const TeamLike = styled(Fab)`
    width: 10px;
    margin-top: 2rem;

    &:disabled{
        display:none;
    }
`
export const TeamLikeIcon = styled(FavoriteIcon)`
    width: 10px;
    height: 10px;

`