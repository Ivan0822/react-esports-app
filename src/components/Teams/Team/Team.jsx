import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useRef, useState } from 'react'
import { TeamContainer, TeamName, TeamImage, TeamLike } from './Team.elements'

const Team = ({ team, favTeams, setFavTeams }) => {

    const [button, setButton] = useState(false)

    let btnRef = useRef();

    const handleLike = (e) => {
        e.preventDefault()
        if (btnRef.current) {
            btnRef.current.setAttribute("disabled", "disabled");
        }
        let tmp = [...favTeams]
        tmp.push(team)
        setFavTeams(tmp)
        console.log(favTeams)
    }

    // const handleLike = () => {

    // }

    return (
        <TeamContainer
            onMouseEnter={(e) => setButton(true)}
            onMouseLeave={(e) => setButton(false)}
        >
            {button ?
                <TeamLike
                    aria-label="like"
                    onClick={handleLike}
                    ref={btnRef}
                >
                    <FavoriteIcon />
                </TeamLike>
                :
                <>
                    <TeamImage src={team.image_url} />
                    <TeamName>
                        {team.name}
                    </TeamName>
                </>}
        </TeamContainer>
    )
}

export default Team