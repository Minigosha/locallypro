import React from 'react'
import ImageForGallery from '../atoms/imageForGallery/ImageForGallery'
import './Gallery.css'

const Gallery = ({children}) => {
    return(
        <ImageForGallery>
            <div className='gallery'>   
                {children}        
            </div>      
        </ImageForGallery>
    )
}
export default Gallery

