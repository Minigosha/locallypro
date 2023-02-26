import React from 'react'
import './Card.css'

const Card = ({backgroundColor, children}) => {
    return(
        <div className='Card' style={{background:(backgroundColor)}}>
           {children}
        </div>
)}

export default Card
