import React from 'react'
import Card from '../../atoms/card/Card'
/*import ProductCard from '../productCard/ProductCard'*/
import './EventCard.css'

const EventCard = ({ date, time, address }) => {
    return(
        <Card cssClass={'eventCard'}>
            <p>{date}</p>
            <p>{time}</p>
            <p>{address}</p>
        </Card>
    )
}
export default EventCard