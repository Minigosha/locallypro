import React from 'react'
import './Event.css'

const Event = ({date, time, address}) => {
    return(
        <div className='Event'>
            <p>{date}</p>
            <p>{time}</p>
            <p>{address}</p>
        </div>
)}

export default Event
