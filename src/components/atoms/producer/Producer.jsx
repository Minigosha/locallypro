import React from 'react'
import './Producer.css'

const Producer = ({producerName}) => {
    return(
        <div className='producer'>
            <p>{producerName}</p>
            {/*TODO: Add image*/}
        </div>
)}

export default Producer
