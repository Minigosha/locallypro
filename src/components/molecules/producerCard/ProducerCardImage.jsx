import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'

import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'


const ProductCardImage = ({ producerName }) => {
    return(
        <Card className={'productCard'} >
            <div>
            <ImageForGallery 
                altText={'TEST'}
                source={'https://www.irishfoodawards.com/wp-content/uploads/2017/05/Pure-Food.jpg'}>

            </ImageForGallery>
            
            <p className="name">{producerName}</p>

            </div>

        </Card>
    )
}
export default ProductCardImage