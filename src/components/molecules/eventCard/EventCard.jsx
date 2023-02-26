import React from 'react'
import Card from '../../atoms/card/Card'
import './EventCard.css'

const EventCard = ({ date, time, address }) => {
    return(
        <Card backgroundColor={"#50b492"}>
            <p>{date}</p>
            <p>{time}</p>
            <p>{address}</p>
        </Card>
    )
}
export default EventCard