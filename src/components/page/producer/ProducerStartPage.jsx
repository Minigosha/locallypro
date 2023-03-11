import React, { useState } from 'react'
import SectionHeading from '../../atoms/sectionHeading/SectionHeading'
//import ShopCard from '../../molecules/shopCard/ShopCard'
import EventCard from '../../molecules/eventCard/EventCard'
import ProductCard from '../../molecules/productCard/ProductCard'
import AdminProductCard from '../../molecules/productCard/AdminProductCard'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Gallery from '../../molecules/gallery/Gallery'
import SearchBar from '../../atoms/search/SearchBar'
import ProducerCard from '../../molecules/producerCard/ProducerCard'
import AddButton from '../../atoms/buttons/add/addButton'
import AddEventForm from '../../molecules/forms/event/AddEventForm'
import BasicModal from '../../molecules/modals/BasicModal'
import { Plus, PlusCircle } from 'react-feather'
import SubmitButton from '../../atoms/buttons/tick/SubmitButton'
import BackButton from '../../atoms/buttons/back/BackButton'
import BasicButton from '../../atoms/buttons/BasicButton'
import AddProductForm from '../../molecules/forms/product/AddProductForm'
import AddButtonSmall from '../../atoms/buttons/add/AddButtonSmall'
import Footer from '../../organisms/footer/Footer'
import UserButton from '../../atoms/buttons/user/UserButton'
import LoginForm from '../../molecules/forms/login/LoginForm'
import HomeButton from '../../atoms/buttons/home/HomeButton'
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import ChooseEventPage from '../start/ChooseEventPage'


const ProducerStartPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showAddEvent, setShowAddEvent] = useState(false)
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
                onClose={() => setShowAddEvent(false)} show={showAddEvent}
                modalTitle="Add new event"
                modalContent = {<AddEventForm setShow={setShowAddEvent}/>}
            />
            <BasicModal 
                onClose={() => setShow(false)} show={show}
                modalTitle="Add new product"
                modalContent = {<AddProductForm setShow={setShow}/>}
            />

            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
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
                actionButton={<AddButtonSmall onClick={() => setShowAddEvent(true)}/>}
            ></SectionHeading>

            {events.map(event => <EventCard date={event.date} time={event.time} address={event.address} />)}

            {/* TODO: Collapsible menu for events */}
            

            {/* MY PRODUCTS */}
            <ContentContainer>

                <SectionHeading
                    heading={"My products"} 
                    actionButton={<AddButtonSmall onClick={() => setShow(true)} />}
                >
                    
                </SectionHeading>
             

                <SearchBar/>

                <Gallery>
                    {product.map(product => <AdminProductCard name={product.name} quantity={product.quantity} price={product.price} />)}
                </Gallery>

                <AddButton onClick={() => setShow(true)}/>
            </ContentContainer>

             {/* FOOTER */}
            <Footer>
                <HomeButton/>
                
                <UserButton
                    onClick={() => setShowLogin(true)}
                />

            </Footer>


        </>
    )
}
export default ProducerStartPage
