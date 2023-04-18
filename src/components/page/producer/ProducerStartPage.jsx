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
//import AddButton from '../../atoms/buttons/add/addButton'
import BasicContextMenuContent from '../../organisms/modals/contextMenu/BasicContextMenuContent'
import ContextMenu from '../../organisms/modals/contextMenu/ContextMenu'
import ShowMoreEvents from '../../molecules/showMore/ShowMoreEvents'
import ShowMore from '../../molecules/showMore/ShowMore'
import JoinEvent from '../../atoms/buttons/joinEvents/JoinEvent'

const ProducerStartPage = () => {
    const [events, setEvents] = useState([])
    const [showEditProduct, setShowEditProduct] = useState(false)

    const [product, setProduct] = useState()
    const [products, setProducts] = useState([])
    const [productID, setProductID] = useState();
    const [showAddProduct, setShowAddProduct] = useState(false)
    const [showProductContextMenu, setShowProductContextMenu] = useState(false);

    const [showAddEvent, setShowAddEvent] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [show, setShow] = useState(false)

    const [buttonText, setButtonText] = useState("Click");

    function handleClick() {
        setButtonText('New text');
    }

    const [joinEvent, setJoinEvent] = useState();    
    var buttonShowed = joinEvent? <JoinEvent/> : <JoinEvent/>;

    function toggleJoinButton() {
        setJoinEvent(!joinEvent);
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


    const handleDeleteProduct = () => {
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

    const handleProductMenuClick = (product) => {
        setProductID(product.id)
        setProduct(product)
        setShowProductContextMenu(true)
        return setProductID
    }


    const handleEditProduct = () => {
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
                onClose={() => setShowAddProduct(false)} show={showAddProduct}
                modalTitle="Add new product"
                modalContent={<AddProductForm setShow={setShowAddProduct} />}
            />
            <BasicModal
                onClose={() => setShowEditProduct(false)} show={showEditProduct}
                modalTitle={`Edit product: ${productID}`}
                modalContent={<EditProductForm setShow={setShowEditProduct} product={product} />}
            />

            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
            />

            <ContextMenu
                onClose={() => setShowProductContextMenu(false)} show={showProductContextMenu}
                modalContent={<BasicContextMenuContent handleDelete={handleDeleteProduct} handleEdit={handleEditProduct} />}
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

            {events?.slice(0, 3).map(event =>
                <div key={event.id}>
                    <EventCard
                        dateTimeStart={event.dateTimeStart}
                        dateTimeEnd={event.dateTimeEnd}
                        address={event.address + ", " + event.city}
                    >

                        <div> 
                            <JoinEvent eventID={event.id}/>
                            {/*    
                        {showText && <h1>Hello World</h1>}
                        <button onClick={() => setShowText(!showText)}>Toggle</button>

                            {event.id}
                            <MenuMoreButton onClick={() => handleMenuClick(event)}>
                            </MenuMoreButton>
                        */}



                        </div>
                    </EventCard>
                </div >
            )}

            <div>
                <ShowMore>
                    <ShowMoreEvents />
                </ShowMore>
            </div>



            {/* TODO: Collapsible menu for events */}


            {/* MY PRODUCTS */}
            <ContentContainer>

                <SectionHeading
                    heading={"My products"}
                    actionButton={<AddButtonSmall onClick={() => setShowAddProduct(true)} />}
                >

                </SectionHeading>


                <SearchBar />

                <Gallery>
                    {/* Add key? key={product.id} */}
                    {products.map(product =>
                        <div key={product.id}>
                            <ProductCard


                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}

                            >
                                <MenuMoreButton
                                    onClick={() => handleProductMenuClick(product)}>
                                </MenuMoreButton>
                            </ProductCard>

                        </div>
                    )}
                </Gallery>
                {/*<AddButton onClick={() => setShowAddProduct(true)} />*/}

            </ContentContainer >

            {/* FOOTER */}
            < Footer >
                {/*
                <HomeButton/>
                
                <UserButton
                    onClick={() => setShowLogin(true)}
                />
                */}

            </Footer >


        </>
    )
}
export default ProducerStartPage
