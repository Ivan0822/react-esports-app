import { FormControl, InputLabel, MenuItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { EventFilterBar, EventFilterContainer, EventSelectState } from './EventFilter.elements'
import { getTournamentsByTime } from '../../services'
import { getUniqueArray } from '../../App'

const EventFilter = ({ allTournaments, setTourArray, tourArray }) => {

    const [selectGame, setSelectGame] = useState('')
    const [selectTime, setSelectTime] = useState('')

    const handleSelectGame = (e) => {
        setSelectGame(e.target.value)
        console.log(selectGame);
    }

    const handleSelectTime = (e) => {
        setSelectTime(e.target.value)
        console.log(selectGame);
    }

    useEffect(() => {
        if (selectTime === '') {
            let tmp = [...allTournaments]
            setTourArray(tmp.filter(el => el.videogame.slug === selectGame))
        }
        else if (selectTime !== '') {
            getTournamentsByTime(selectTime).then(res => {
                if (selectGame === '') {
                    setTourArray(getUniqueArray(res.data))
                }
                else {
                    setTourArray(getUniqueArray(res.data).filter(el => el.videogame.slug === selectGame))
                }
            })
        }
        else {
            setTourArray(getUniqueArray(allTournaments))
        }
        console.log(tourArray);

    }, [selectTime, selectGame])


    return (
        <EventFilterBar>
            <EventFilterContainer>
                <FormControl>
                    <InputLabel>Tournaments</InputLabel>
                    <EventSelectState value={selectTime} onChange={handleSelectTime}>
                        <MenuItem value="running">Running</MenuItem>
                        <MenuItem value="past">Past</MenuItem>
                        <MenuItem value="upcoming">Upcoming</MenuItem>
                    </EventSelectState>
                </FormControl>
                <FormControl>
                    <InputLabel>Game</InputLabel>
                    <EventSelectState value={selectGame} onChange={handleSelectGame}>
                        <MenuItem value="dota-2">Dota 2</MenuItem>
                        <MenuItem value="league-of-legends">LoL</MenuItem>
                        <MenuItem value="cs-go">CS:GO</MenuItem>
                        <MenuItem value="ow">Overwatch</MenuItem>
                        <MenuItem value="rl"> Rocket League</MenuItem >
                    </EventSelectState >
                </FormControl >
            </EventFilterContainer >
        </EventFilterBar >
    )
}

export default EventFilter