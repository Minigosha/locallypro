import React from 'react'
import Card from '../../atoms/card/Card'
import './ShopCard.css'

const ShopCard = ({ shopName }) => {
    return(
        <Card className={'producerCard'}>
            <p>{shopName}</p>
        </Card>
    )
}
export default ShopCard