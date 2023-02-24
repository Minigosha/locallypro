import React from 'react'
import './HeaderMessage.css'

const HeaderMessage = ({message}) => {
    return(
        <div className='headerMessage'>
            <h4>{message}</h4>
        </div>
)}

export default HeaderMessage
