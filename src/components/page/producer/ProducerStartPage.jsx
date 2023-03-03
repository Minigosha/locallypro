import React, {useState} from 'react'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
//import ShopCard from '../../molecules/shopCard/ShopCard'
import EventCard from '../../molecules/eventCard/EventCard'
import ProductCard from '../../molecules/productCard/ProductCard'
//import Footer from '../../organisms/footer/Footer'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Gallery from '../../molecules/gallery/Gallery'
import Search from '../../atoms/search/Search'
//import BasicModal from '../../molecules/basicModal/BasicModal'
import ProducerCard from '../../molecules/producerCard/ProducerCard'




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
            
            name : 'Mozzarella cheese',
            quantity : '100gr',
            price :'50Kr'
        },
        {
            name : 'Halloumi cheese',
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
            <ProducerCard
                businessName={"Milky way cheese"}
            ></ProducerCard>
                     
            {/* EVENTS */}
            <SectionHeading
                heading={"Coming events"}
            ></SectionHeading>   
        {/* TODO: Collapsible menu for events */}
            {events.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }

            {/* MY PRODUCTS */}
            <ContentContainer>

                <SectionHeading
                    heading={"My products"}
                ></SectionHeading>

                <Search></Search>

                <Gallery>
                    {product.map(product => <ProductCard name= {product.name} quantity = {product.quantity} price = {product.price}/>)} 
                </Gallery>



    
    
            
        
               

    </ContentContainer>

            
    
        </>
    )   
}
export default ProducerStartPage
