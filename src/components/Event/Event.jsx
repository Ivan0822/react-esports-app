import React from 'react'
import { EventContainer, EventImage, EventImageContainer, EventDescContainer } from './Event.elements'
import { Link } from 'react-router-dom'

const Event = ({ event }) => {

    let eventDate = event.begin_at.slice(0, 9)


    return (
        <Link to={`/tournaments/${event.id}`}>
            <EventContainer>
                <EventImageContainer>
                    <EventImage src={event.league.image_url} />
                </EventImageContainer>
                <EventDescContainer>
                    <h2>{event.league.name + " " + event.serie.full_name}</h2>
                    <p>Starts: {eventDate}</p>
                </EventDescContainer>
            </EventContainer>
        </Link>
    )
}

export default Event