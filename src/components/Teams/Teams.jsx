import React, { useEffect, useState } from 'react'
import { getWorldsInfo } from '../../services'
import { TeamsContainer, TeamsHeaderContainer, TeamsGridContainer } from './Teams.elements'
import Team from './Team/Team'

const Teams = ({ favTeams, setFavTeams }) => {

    const [teams, setTeams] = useState([])


    useEffect(() => {
        getWorldsInfo().then(res => {
            let tmp = []
            res.data.forEach(el => {
                tmp.push(...el.teams)
            })
            setTeams(tmp)
        })
        console.log(teams);
    }, [])


    return (
        <TeamsContainer>
            <TeamsHeaderContainer>
                <h2>CHOOSE YOUR WORLDS 2020 TEAMS </h2>
            </TeamsHeaderContainer>
            <TeamsGridContainer>
                {teams.map(el => <Team key={el.id} team={el} favTeams={favTeams} setFavTeams={setFavTeams} />)}
            </TeamsGridContainer>
        </TeamsContainer>
    )
}

export default Teams