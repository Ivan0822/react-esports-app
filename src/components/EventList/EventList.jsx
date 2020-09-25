import React from 'react'
import Event from '../Event/Event'
import { EventListLargeContainer, EventListSmallContainer, EventListGrid } from './EventList.elements'

const EventList = ({ tourArray }) => {

    // const [image, setImage] = useState('')
    // const [name, setName] = useState('')

    return (
        <EventListLargeContainer>
            <EventListSmallContainer>
                <EventListGrid>
                    {tourArray.map(el =>
                        <Event
                            key={el.serie_id}
                            image={el.league.image_url}
                            name={el.league.name + " " + el.serie.full_name}
                            id={el.serie_id}
                        />)}
                </EventListGrid>
            </EventListSmallContainer>
        </EventListLargeContainer>
    )
}

export default EventList