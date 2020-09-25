import React, { useEffect, useState } from 'react'
import { EventContainer, EventImage, EventImageContainer, EventDescContainer } from './Event.elements'
import { Link, useParams } from 'react-router-dom'

const Event = ({ image, name, id }) => {

    const [array, setArray] = useState([])
    const [tour, setTour] = useState([])

    console.log(array);

    return (
        <Link to={`/tournaments/${id}`}>
            <EventContainer>
                <EventImageContainer>
                    <EventImage src={image} />
                </EventImageContainer>
                <EventDescContainer>
                    <h2>{name}</h2>
                </EventDescContainer>
            </EventContainer>
        </Link>
    )
}

export default Event