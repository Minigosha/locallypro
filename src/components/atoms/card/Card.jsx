import React from 'react'
import './Card.css'

// Maybe add menuItems that should be something like [{name:"Edit", class:"edit", onClick:()=>{}}]
const Card = ({children, className, key}) => {
    return(
        <div className={className} key={key}>
           {children}
        </div>
)}

export default Card
