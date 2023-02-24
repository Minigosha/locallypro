import React from 'react'
import HeaderMessage from '../../atoms/header/HeaderMessage'
import Event from '../../atoms/event/Event'


const EventsStart = ({ message, date, time, address }) => {
    return(
        <div>
            <Event
                date = {date} 
                time = {time} 
                address = {address}
            ></Event>
        </div>
    )
}
export default EventsStart