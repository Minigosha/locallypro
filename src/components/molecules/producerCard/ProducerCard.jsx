import React from 'react'
import ImageForGallery from '../atoms/imageForGallery/ImageForGallery'
import './ProducerCard.css'

const ProducerCard = ({ businessName}) => {
    return(
        <ImageForGallery>
            <p class="businessName">{businessName}</p>

        </ImageForGallery>
    )
}
export default ProducerCard
