import React from 'react'
import Card from '../../atoms/card/Card'
import './ProducerCard.css'


const ProducerCard = ({ businessName }) => {
    return(
        <Card cssClass={'producerCard'}>

            <p class="businessName">{businessName}</p>

        </Card>
    )
}
export default ProducerCard
