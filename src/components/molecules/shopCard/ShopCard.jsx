import React from 'react'
import Card from '../../atoms/card/Card'
import './ShopCard.css'

const ShopCard = ({ shopName }) => {
    return(
        <Card backgroundColor={"#50b492"}>
            <p>{shopName}</p>
        </Card>
    )
}
export default ShopCard