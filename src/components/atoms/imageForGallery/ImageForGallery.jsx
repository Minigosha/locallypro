import React from 'react'
import './ImageForGallery.css'

const ImageForGallery = ({source, altText}) => {
    return(
        <>
            
            <img className = "img"
                src = {source}

                /*MUST FIX: altText depends on image description*/
                alt = {altText}

            />

        </>
    )
}
export default ImageForGallery





