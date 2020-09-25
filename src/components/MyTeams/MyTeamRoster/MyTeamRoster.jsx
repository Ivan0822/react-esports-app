import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getTeamRoster } from '../../../services';
import { RosterContainer } from './MyTeamRoster.elements';
import Player from './Player/Player';

const MyTeamRoster = ({ favTeams }) => {

    const [roster, setRoster] = useState([])

    // {
    //     birth_year: 1997,
    //     birthday: "1997-02-14",
    //     first_name: "Hao-Hsuan",
    //     hometown: "Taiwan",
    //     id: 418,
    //     image_url: "https://cdn.pandascore.co/images/player/image/418/220px_tes_karsa_2020_split_2.png",
    //     last_name: "Hung",
    //     name: "Karsa",
    //     nationality: "TW",
    //     role: "jun",
    //     slug: "karsa"
    // }

    const id = useParams().id
    console.log(id);
    const history = useHistory()

    useEffect(() => {
        getTeamRoster(id).then(res => {
            console.log(res.data);
            setRoster(prev => [...roster, ...res.data.players])
            console.log(roster);
        })
    }, [])

    return (
        <RosterContainer>
            <Button onClick={() => history.push('/myteams')} variant="contained" color="secondary">
                Back
            </Button>
            {roster.map(el => <Player key={el.id} player={el} />)}
        </RosterContainer>
    )
}

export default MyTeamRoster