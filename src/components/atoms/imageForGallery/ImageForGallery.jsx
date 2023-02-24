import React from 'react'
import './ImageForGallery.css'

const ImageForGallery = ({source, altText}) => {
    return(
        <>
            <div className = "gallery">
                <img className = "img"
                    src = {source}
                    alt = {altText}
                />
                
            </div>
            
            <div class = "gallery">
                <img src="img_5terre.jpg" alt = {altText} width="600" height="400"/>
                
                <div class="desc">Add a description of the image here</div>
                </div>

        </>
    )
}





