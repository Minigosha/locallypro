import React from 'react'
import Card from '../../atoms/card/Card'
/*import ProductCard from '../productCard/ProductCard'*/
import './EventCard.css'

const EventCard = ({ children, dateTimeStart, dateTimeEnd, city, address, key }) => {
    return (
        <>
            <Card className={'eventCard'} key={key}>
                <p>Start: {dateTimeStart}</p>
                <p>End: {dateTimeEnd}</p>
                <p>{address}</p>
                <p>{city}</p>
                {children}
            </Card>
        </>
    )
}
export default EventCard