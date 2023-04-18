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
import { useParams, Link } from 'react-router-dom'



const ChooseProducerPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [producer, setProducer] = useState([])
    const [chosenEvent, setChosenEvent] = useState([])
    const [chosenProducer, setChosenProducer] = useState([])

    console.log(useParams());
    const { eventID } = useParams()
    const { producerID } = useParams()

    console.log("EVENT ID : " + eventID);
    console.log("Producer ID : " + producerID);


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


    useEffect(() => {
        fetch(`/api/Events/${eventID}`)
            .then(res => res.json())
            .then(result => {
                setChosenEvent(result);
                console.log("RESULT:" + result);
            });
    }, [])

    useEffect(() => {
        fetch(`/api/Producers/${producerID}`)
            .then(res => res.json())
            .then(result => {
                setChosenProducer(result);
                console.log("RESULT:" + result);
            });
    }, [])


    return (
        <>
            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
            />

            {/*Event chosen: {eventID}*/}


            <EventCard
                dateTimeStart={chosenEvent.dateTimeStart}
                dateTimeEnd={chosenEvent.dateTimeEnd}
                address={chosenEvent.address}
                city={chosenEvent.city}
            />

            {/*

            <EventCard
                dateTimeStart={"FAKE"}
                dateTimeEnd={'FAKE'}
                address={'FAKE'}
            />

            */}

            <ContentContainer>

                <SectionHeading
                    heading={"Producers selling during this event:"}
                />

                <SearchBar
                    myData={producer}
                /* returnData = {producer.producerName.toLowerCase().includes(value)}*/
                />

                <Gallery>
                    {producer.map(producer =>
                        <div key={producer.id}>
                            <Link to={`/ChooseProductPage/Event/${eventID}/Producer/${producer.id}`}>
                                <ProductCardImage
                                    producerName={producer.name}>

                                </ProductCardImage>
                                {producer.id}
                            </Link>
                        </div>
                    )}
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