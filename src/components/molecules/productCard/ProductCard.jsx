import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'


const ProductCard = ({ name, quantity, price }) => {
    return(
        <Card cssClass={'productCard'} >
            <ImageForGallery 
                altText={'TEST'}
                source={'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>

            </ImageForGallery>
            <p class="name">{name}</p>
            <p class="quantity">{quantity}</p>
            <p class="price">{price}</p>
        </Card>
    )
}
export default ProductCard





