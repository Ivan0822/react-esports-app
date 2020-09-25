import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Event from '../Event/Event'
import { EventListLargeContainer, EventListSmallContainer, EventListGrid } from './EventList.elements'

const EventList = ({ tourArray }) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0)
    }, [tourArray])

    return (
        <EventListLargeContainer>
            <section>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={count === 0}
                    onClick={() => setCount(count - 10)}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled={count > tourArray.length - 10}
                    onClick={() => setCount(count + 10)}
                >
                    Next
                </Button>
            </section>
            <EventListSmallContainer>
                <EventListGrid>
                    {tourArray.slice(count, count + 10).map(el =>
                        <Event
                            key={el.serie_id}
                            event={el}
                        />)}
                </EventListGrid>
            </EventListSmallContainer>
        </EventListLargeContainer>
    )
}

export default EventList