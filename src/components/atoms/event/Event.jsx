import React from 'react'
import './Event.css'

const Event = ({date, time, address}) => {
    return(
        <div className='Event'>
            <span>{date}</span>
            <span>{time}</span>
            <span>{address}</span>
        </div>
)}

export default Event
