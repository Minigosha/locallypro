import React, { useState, useEffect } from 'react'
import SearchBar from '../../atoms/search/SearchBar'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
import EventCard from '../../molecules/eventCard/EventCard'
import Gallery from '../../molecules/gallery/Gallery'
import ProducerCard from '../../molecules/producerCard/ProducerCard'
import ProductCard from '../../molecules/productCard/ProductCard'
import BasicModal from '../../molecules/modals/BasicModal'
import LoginForm from '../../molecules/forms/login/LoginForm'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Footer from '../../organisms/footer/Footer'
import HomeButton from '../../atoms/buttons/home/HomeButton'
import UserButton from '../../atoms/buttons/user/UserButton'
import { useParams } from 'react-router-dom'

const ChooseProductPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [products, setProducts] = useState([])
    const [chosenEvent, setChosenEvent] = useState([])
    const [chosenProducer, setChosenProducer] = useState([])


    const { eventID } = useParams()
    const { producerID } = useParams()

    console.log("EVENT ID : " + eventID);
    console.log("Producer ID : " + producerID);

    { /*
   const [products, setProducts] = useState([
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
*/}

    useEffect(() => {
        fetch("/api/Products")
            .then(res => res.json())
            .then(result => (
                setProducts(result))
            )
    }, []);

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
            <SectionHeading
                heading={"Chosen event:"}
            />
            <EventCard
                dateTimeStart={chosenEvent.dateTimeStart}
                dateTimeEnd={chosenEvent.dateTimeEnd}
                address={chosenEvent.address}
                city={chosenEvent.city}
            />
            <SectionHeading
                heading={"Chosen producer:"}
            />
            {/*
            <ProducerCard
                businessName={"Milky way cheese"}
            ></ProducerCard>
            */}
            <ProducerCard
                businessName={chosenProducer.name}
            ></ProducerCard>

            <ContentContainer>

                <SectionHeading
                    heading={"Products from this producer:"}
                />
                <SearchBar />

                <Gallery>
                    {products.map(product =>
                        <div key={product.id}>
                            <ProductCard
                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}
                            />
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
export default ChooseProductPage