import React from 'react'
import './GalleryContainer.css'

const GalleryContainer = ({children}) => {
    return(
        <div className='gallery'>   
            {children}        
        </div>
)}

export default GalleryContainer