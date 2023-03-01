import React from 'react'
import './Card.css'

const Card = ({children, cssClass}) => {
    return(
        <div className={cssClass} >
           {children}
        </div>
)}

export default Card
