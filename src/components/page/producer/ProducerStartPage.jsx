import React, {useState} from 'react'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
import ShopCard from '../../molecules/shopCard/ShopCard'
import EventCard from '../../molecules/eventCard/EventCard'
import ProductCard from '../../molecules/productCard/ProductCard'
import Footer from '../../organims/footer/Footer'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'




const ProducerStartPage = () => {
    const [events, setEvents] = useState([
        {
            date : '2/7',
            time : '19:00-20:00',
            address : 'Mjärdevi, Linköping'
        },
        {
            date : '1/4',
            time : '17:00-19:00',
            address : 'T1, Linköping'
        },
    ])
    const [product, setProduct] = useState([
        {
            description : 'Mozzarella cheese',
            quantity : '100gr',
            price :'50Kr'
        },
        {
            description : 'Halloumi cheese',
            quantity : '80gr',
            price :'35Kr'
        },
    ])
    return(
        <>
            {/* MY SHOP */}
            <SectionHeading
                heading={"My shop"}
            ></SectionHeading>
        {/* TODO: Collapsible menu for shops */}
            <ShopCard
                shopName={"Milky way cheese"}
            ></ShopCard>
                     
            {/* EVENTS */}
            <SectionHeading
                heading={"Coming events"}
            ></SectionHeading>   
        {/* TODO: Collapsible menu for events */}
            {events.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }

            <ContentContainer>
            {/* MY PRODUCTS */}
            <SectionHeading
                heading={"My products"}
            ></SectionHeading>
            
           {product.map(product => <ProductCard name= {product.name} quantity = {product.quantity} price = {product.price}/>)} 
            

                
               

            </ContentContainer>
            <Footer></Footer>
        </>
    )   
}
export default ProducerStartPage
