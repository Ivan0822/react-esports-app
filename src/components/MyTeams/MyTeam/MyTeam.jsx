import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { MyTeamSmallContainer, MyTeamName, MyTeamImage, MyTeamLargeContainer } from './MyTeam.elements'

const MyTeam = ({ team, favTeams, setFavTeams }) => {

    const handleRemove = () => {
        let index = favTeams.findIndex(el => el.name === team.name)

        let tmp = [...favTeams]
        tmp.splice(index, 1)
        setFavTeams(tmp)
    }


    return (
        <MyTeamLargeContainer>
            <MyTeamSmallContainer>
                <MyTeamImage src={team.image_url} />
                <MyTeamName>
                    {team.name}
                </MyTeamName>
            </MyTeamSmallContainer >
            <Link to={`/myteams/${team.id}`}>
                <Button variant="contained" color="secondary">
                    ROSTER
            </Button>
            </Link>
            <Button onClick={handleRemove} variant="contained" color="secondary">
                REMOVE
            </Button>
        </MyTeamLargeContainer >
    )
}

export default MyTeam