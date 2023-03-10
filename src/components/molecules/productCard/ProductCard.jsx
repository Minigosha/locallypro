import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'

import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'


const ProductCard = ({ name, quantity, price }) => {
    return(
        <Card cssClass={'productCard'} >
            <div>
            <div>
            <MenuMoreButton/>
            </div>
            <div>
            <ImageForGallery 
                altText={'TEST'}
                source={'https://assets.biztimes.com/uploads/2019/05/Cheese-Shutterstock-2016-11-07-e1478553303549.jpg'}>

            </ImageForGallery>
            
            <p class="name">{name}</p>
            <p class="quantity">{quantity}</p>
            <p class="price">{price}</p>
            </div>
            </div>
        </Card>
    )
}
export default ProductCard





