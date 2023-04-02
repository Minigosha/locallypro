import React from 'react'
import ImageForGallery from '../../atoms/imageForGallery/ImageForGallery'
import Card from '../../atoms/card/Card'

import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'
import ContextMenu from '../../organisms/modals/contextMenu/ContextMenu'
import { useState } from 'react'
import BasicContextMenuContent from '../../organisms/modals/contextMenu/BasicContextMenuContent'



const SuperAdminProducerCard = ({ producerName}) => {
    const [showContextMenu, setShowContextMenu] = useState(false)


    return(
        <>
            <ContextMenu
                onClose={() => setShowContextMenu(false)} show={showContextMenu}
                modalContent = {<BasicContextMenuContent/>}                                       
            />

        <Card className={'productCard'} >
            <div>

            <div>
            <MenuMoreButton onClick= {()=> setShowContextMenu(true)}>
            </MenuMoreButton>
            
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
        </>
    )
}
export default SuperAdminProducerCard