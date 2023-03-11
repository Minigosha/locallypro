import React from 'react'
import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'
import Card from '../../atoms/card/Card'
/*import ProductCard from '../productCard/ProductCard'*/
import './EventCard.css'

const AdminEventCard = ({ date, time, address }) => {
    return(
        <Card className={'eventCard'}>
            <MenuMoreButton/>
            <p>{date}</p>
            <p>{time}</p>
            <p>{address}</p>
        </Card>
    )
}
export default AdminEventCard