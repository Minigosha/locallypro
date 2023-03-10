import React, { useState } from 'react'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
//import ShopCard from '../../molecules/shopCard/ShopCard'
import EventCard from '../../molecules/eventCard/EventCard'
import ProductCard from '../../molecules/productCard/ProductCard'
//import Footer from '../../organisms/footer/Footer'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Gallery from '../../molecules/gallery/Gallery'
import SearchBar from '../../atoms/search/SearchBar'
import ProducerCard from '../../molecules/producerCard/ProducerCard'
import AddButton from '../../atoms/buttons/add/addButton'
import AddEventForm from '../../molecules/forms/event/AddEventForm'
import BasicModal from '../../molecules/modals/BasicModal'
import { PlusCircle } from 'react-feather'
import SubmitButton from '../../atoms/buttons/tick/SubmitButton'
import BackButton from '../../atoms/buttons/back/backButton'




const ProducerStartPage = () => {
    const [show, setShow] = useState(false)
    const [events, setEvents] = useState([
        {
            date: '2/7',
            time: '19:00-20:00',
            address: 'Mjärdevi, Linköping'
        },
        {
            date: '1/4',
            time: '17:00-19:00',
            address: 'T1, Linköping'
        },
    ])
    const [product, setProduct] = useState([
        {

            name: 'Mozzarella cheese',
            quantity: '100gr',
            price: '50Kr'
        },
        {
            name: 'Halloumi cheese',
            quantity: '80gr',
            price: '35Kr'
        },
    ])



    return (
        <>
            <BasicModal 
                onClose={() => setShow(false)} show={show}
                modalTitle="Add new event"
                modalContent = {<AddEventForm setShowModal={setShow}/>}
            />

            {/* MY SHOP */}
            <SectionHeading
                heading={"My shop"}
            ></SectionHeading>

            {/* TODO: Collapsible menu for shops */}
            
            <ProducerCard
                businessName={"Milky way cheese"}
            ></ProducerCard>

            {/* EVENTS */}
            <SectionHeading
                heading={"Coming events"}
            ></SectionHeading>

            {events.map(event => <EventCard date={event.date} time={event.time} address={event.address} />)}

            {/* TODO: Collapsible menu for events */}
            

            {/* MY PRODUCTS */}
            <ContentContainer>

                <SectionHeading
                    heading={"My products"} 
                ></SectionHeading>

                <AddButton handleClick={() => setShow(true)} icon={<PlusCircle/>} className='greenButton'/>

                <SearchBar/>

                <Gallery>
                    {product.map(product => <ProductCard name={product.name} quantity={product.quantity} price={product.price} />)}
                </Gallery>

                <AddButton handleClick={() => setShow(true)} icon={<PlusCircle/>} className='greenButton'/>
            </ContentContainer>


        </>
    )
}
export default ProducerStartPage
