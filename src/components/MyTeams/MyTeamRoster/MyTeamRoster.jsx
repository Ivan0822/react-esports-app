import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getTeamRoster } from '../../../services';
import { RosterContainer } from './MyTeamRoster.elements';
import Player from './Player/Player';

const MyTeamRoster = ({ favTeams }) => {

    const [roster, setRoster] = useState({
        birth_year: 1997,
        birthday: "1997-02-14",
        first_name: "Hao-Hsuan",
        hometown: "Taiwan",
        id: 418,
        image_url: "https://cdn.pandascore.co/images/player/image/418/220px_tes_karsa_2020_split_2.png",
        last_name: "Hung",
        name: "Karsa",
        nationality: "TW",
        role: "jun",
        slug: "karsa"
    })

    const id = useParams().id
    console.log(id);
    // useEffect(() => {
    //     getTeamRoster(126059).then(res => {
    //         let tmp = []
    //         res.data.players.forEach(el => {
    //             tmp.push(el)
    //         })
    //         console.log(tmp);
    //         setRoster(tmp)
    //         console.log(roster);
    //     })
    // }, [])
    // let index = favTeams.findIndex(el => el.id + '' === id)

    // const validateIndex = () => {
    //     if (index === -1) {
    //         return false
    //     }
    //     else return true
    // }

    // if (validateIndex()) {
    //     let tmp = [...favTeams]
    //     return tmp[index].id
    // }

    // console.log(validateIndex());





    return (
        <RosterContainer>
            <Player player={roster} />
        </RosterContainer>
    )
}

export default MyTeamRoster