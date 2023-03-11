import React from 'react'
import Card from '../../atoms/card/Card'
import './ProducerCard.css'


const ProducerCard = ({ businessName }) => {
    return(
        <Card className={'producerCard'}>

            <p className="producer">{businessName}</p>

        </Card>
    )
}
export default ProducerCard
