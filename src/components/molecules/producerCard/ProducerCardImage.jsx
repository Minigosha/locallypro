import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'

import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'


const ProducerCardImage = ({ producerName, children, myKey }) => {
   
    return (
        
        <Card className={'productCard'} >
            <div key={myKey}>
               

                <div>
                    {children}
                    {/*
                    <MenuMoreButton onClick={() => setShowContextMenu(true)}>
                    </MenuMoreButton>
                    */}
                </div>


                <div>
                    <ImageForGallery 
                        
                        altText={'TEST'}
                        source={'https://www.irishfoodawards.com/wp-content/uploads/2017/05/Pure-Food.jpg'}>

                    </ImageForGallery>

                    <p className="name">{producerName}</p>

                </div>
            </div>
        </Card>
    )
}
export default ProducerCardImage