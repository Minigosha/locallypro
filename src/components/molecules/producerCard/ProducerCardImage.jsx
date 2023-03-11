import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'

import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'


const ProductCardImage = ({ name, quantity, price }) => {
    return(
        <Card className={'productCard'} >
            <div>
            <ImageForGallery 
                altText={'TEST'}
                source={'https://assets.biztimes.com/uploads/2019/05/Cheese-Shutterstock-2016-11-07-e1478553303549.jpg'}>

            </ImageForGallery>
            
            <p className="name">{name}</p>

            </div>

        </Card>
    )
}
export default ProductCardImage