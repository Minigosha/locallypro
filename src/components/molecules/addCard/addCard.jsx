import React from 'react'
import ImageForGallery from '../../atoms/imageForGallerY/ImageForGallery'
import './ImageForGallery.css'

const AddCard = ({description}) => {
    return(
        <ImageForGallery>
            <p class="description">{description}</p>
            {/*TODO: add "+" icon*/}
        </ImageForGallery>
    )
}
export default AddCard