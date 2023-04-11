import React, { useState, useEffect } from 'react'
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
//import { useIsAuthenticated } from '@azure/msal-react'
import EditProductForm from '../../molecules/forms/product/EditProductForm'
import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'


const ProducerStartPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showAddEvent, setShowAddEvent] = useState(false)
    const [showEditProduct, setShowEditProduct] = useState(false)
    const [show, setShow] = useState(false)
    const [events, setEvents] = useState([])
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [productID, setProductID] = useState();
    const [showProductContextMenu, setShowProductContextMenu] = useState(false);

    const [buttonText, setButtonText] = useState("Click");

  function handleClick() {
    
    setButtonText('New text');
  }


    {/*
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

*/}

    //FIX RE-RENDER WHEN ADDING/EDITING A EVENT
    useEffect(() => {
        fetch("/api/Products")
            .then(res => res.json())
            .then(result => (
                setProducts(result))
            )
    }, [productID]);

    useEffect(() => {
        fetch("/api/Events")
            .then(res => res.json())
            .then(result => (
                setEvents(result))
            )
    }, []);

    const handleDelete = () => {
        console.log("delete clicked")
        fetch(`/api/Products/${productID}`, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;

                    return null
                }
                else {
                    alert("Product deleted! ID: " + productID)
                    setShowProductContextMenu(false)
                    setProducts(products.filter(product => product.id !== productID));

                }
            })
            .catch(error => {

                console.error(error);
            })


    }

    const handleMenuClick = (product) => {
        setProductID(product.id)
        setProduct(product)
        setShowProductContextMenu(true)
        return setProductID
    }


    const handleEdit = () => {
        console.log("Edit clicked. ID:" + productID)
        setShowProductContextMenu(false)
        setShowEditProduct(true)
    }







    return (
        <>
            <BasicModal
                onClose={() => setShowAddEvent(false)} show={showAddEvent}
                modalTitle="Add new event"
                modalContent={<AddEventForm setShow={setShowAddEvent} />}
            />
            <BasicModal
                onClose={() => setShowEditProduct(false)} show={showEditProduct}
                modalTitle={`Edit product: ${productID}`}
                modalContent={<EditProductForm setShow={setShowEditProduct} product={product} />}
            />
            <BasicModal
                onClose={() => setShow(false)} show={show}
                modalTitle="Add new product"
                modalContent={<AddProductForm setShow={setShow} />}
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
            //actionButton={<AddButtonSmall onClick={() => setShowAddEvent(true)} />}
            ></SectionHeading>

            {/*
            {events.map(event => <EventCard date={event.date} time={event.time} address={event.address} />)}
            */}

            {events?.slice(0, 5).map(event =>
                <li style={{ listStyle: 'none' }} key={event.id}>
                    <EventCard
                        dateTimeStart={event.dateTimeStart}
                        dateTimeEnd={event.dateTimeEnd}
                        address={event.address + ", " + event.city}>

                        <div> JOIN
                        
                            <button 
                               onClick={handleClick}>
                               {buttonText}
                                                               
                            </button>
                            {/*    
                        {showText && <h1>Hello World</h1>}
                        <button onClick={() => setShowText(!showText)}>Toggle</button>

                            {event.id}
                            <MenuMoreButton onClick={() => handleMenuClick(event)}>
                            </MenuMoreButton>
                        */}


                        </div>

                    </EventCard>
                </li>
            )}



            {/* TODO: Collapsible menu for events */}


            {/* MY PRODUCTS */}
            <ContentContainer>

                <SectionHeading
                    heading={"My products"}
                    actionButton={<AddButtonSmall onClick={() => setShow(true)} />}
                >

                </SectionHeading>


                <SearchBar />

                <Gallery>
                    {product.map(product => <AdminProductCard name={product.name} quantity={product.quantity} price={product.price} />)}
                </Gallery>

                <AddButton onClick={() => setShow(true)} />
            </ContentContainer>

            {/* FOOTER */}
            <Footer>
                {/*
                <HomeButton/>
                
                <UserButton
                    onClick={() => setShowLogin(true)}
                />
                */}

            </Footer>


        </>
    )
}
export default ProducerStartPage
