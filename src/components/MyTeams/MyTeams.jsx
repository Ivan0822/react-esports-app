import React from 'react'
import { MyTeamsHeader, MyTeamsLargeContainer, MyTeamsSmallContainer } from './MyTeams.elements'
import MyTeam from './MyTeam/MyTeam'

const MyTeams = ({ favTeams, setFavTeams }) => {
    return (
        <MyTeamsLargeContainer>
            <MyTeamsHeader>
                <h2>MY FAVOURITE TEAMS</h2>
            </MyTeamsHeader>
            <MyTeamsSmallContainer>
                {favTeams.map(el => <MyTeam key={el.id} team={el} favTeams={favTeams} setFavTeams={setFavTeams} />)}
            </MyTeamsSmallContainer>
        </MyTeamsLargeContainer>
    )
}

export default MyTeams