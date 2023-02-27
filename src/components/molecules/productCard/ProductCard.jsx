import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'


const ProductCard = ({ name, quantity, price }) => {
    return(
        <ImageForGallery 
            altText={'TEST'}
            source={'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
                <p class="name">{name}</p>
                <p class="quantity">{quantity}</p>
                <p class="price">{price}</p>
        </ImageForGallery>
    )
}
export default ProductCard





