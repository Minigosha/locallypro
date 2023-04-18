import React from 'react'
import Card from '../../atoms/card/Card'
/*import ProductCard from '../productCard/ProductCard'*/
import './EventCard.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const EventCard = ({ children, dateTimeStart, dateTimeEnd, city, address, key }) => {

//console.log("KEY: "+ key)



    return (
        <div > 
            
            <Card className={'eventCard'} key={key}>
       
              
                <p>Start: {dateTimeStart}</p>
                <p>End: {dateTimeEnd}</p>
                <p>{address}</p>
                <p>{city}</p>

                
               

                {children}
            </Card>
        </div>
    )
}
export default EventCard