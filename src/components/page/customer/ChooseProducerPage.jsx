import React, { useState, useEffect } from 'react'
import SearchBar from '../../atoms/search/SearchBar'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
import EventCard from '../../molecules/eventCard/EventCard'
import Gallery from '../../molecules/gallery/Gallery'
import Producer from '../../atoms/producer/Producer'
import BasicModal from '../../molecules/modals/BasicModal'
import LoginForm from '../../molecules/forms/login/LoginForm'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Footer from '../../organisms/footer/Footer'
import HomeButton from '../../atoms/buttons/home/HomeButton'
import UserButton from '../../atoms/buttons/user/UserButton'
import ProductCard from '../../molecules/productCard/ProductCard'
import ProductCardImage from '../../molecules/producerCard/ProducerCardImage'



const ChooseProducerPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [producer, setProducer] = useState([])

    /*
    const [producer, setProducer] = useState([
        {
            producerName:'Milky way cheese'
           

        },
        {
            producerName:'Fruity Land'
            

        },
        {
            producerName:'Smoky ham'
          

        },
        {
            producerName:'Claire`s Jams'
        

        },
    ])
*/
    useEffect(() => {
        fetch("/api/Producers")
            .then(res => res.json())
            .then(result => setProducer(result))
    }, [])

    return (
        <>
            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
            />

            <EventCard
                date={'2/7'}
                time={'19:00-20:00'}
                address={'Mjärdevi, Linköping'}
            />

            <ContentContainer>

                <SectionHeading
                    heading={"Producers selling during this event:"}
                />

                <SearchBar
                    myData={producer}
                /* returnData = {producer.producerName.toLowerCase().includes(value)}*/
                />

                <Gallery>
                    {producer.map(producer => <ProductCardImage producerName={producer.name} />)}
                </Gallery>

            </ContentContainer>

            {/* FOOTER */}
            <Footer>
                {/*
                <HomeButton />

                <UserButton
                    onClick={() => setShowLogin(true)}
                />
                */}

            </Footer>


        </>
    )


}
export default ChooseProducerPage