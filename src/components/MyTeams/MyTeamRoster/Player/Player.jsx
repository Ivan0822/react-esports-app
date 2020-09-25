import { Button } from '@material-ui/core'
import React from 'react'
import { PlayerContainer, PlayerImage, PlayerImageContainer, PlayerInfoContainer, PlayerLeaguepedia, PlayerNameContainer } from './Player.elements'

const Player = ({ player }) => {

    const formatRole = () => {
        if (player.role === 'jun') {
            return 'Jungle'
        }
        if (player.role === 'sup') {
            return 'Support'
        }
        if (player.role === 'mid') {
            return 'Mid'
        }
        if (player.role === 'adc') {
            return 'ADC'
        }
        if (player.role === 'top') {
            return 'Top'
        }
    }

    return (
        <PlayerContainer>
            <PlayerImageContainer>
                <PlayerImage src={player.image_url} />
            </PlayerImageContainer>
            <PlayerNameContainer>
                <h2>{player.name}</h2>
                <p>{player.first_name} {player.last_name}</p>
            </PlayerNameContainer>
            <PlayerInfoContainer>
                <p>BIRTHDATE: {player.birthday}</p>
                <p>ROLE: {formatRole()}</p>
                <p>HOMETOWN: {player.hometown}</p>
            </PlayerInfoContainer>
            <PlayerLeaguepedia>
                <a href={`https://lol.gamepedia.com/${player.name}`} target="_blank">
                    <Button variant="contained" color="primary">
                        Biography
                    </Button>
                </a>
            </PlayerLeaguepedia>
        </PlayerContainer >
    )
}

export default Player