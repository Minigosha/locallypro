import React, { useState, useEffect } from 'react'
import Hero from '../../atoms/hero/Hero'
//import Event from '../../atoms/NOevent/Event'
//import Footer from '../../organisms/footer/Footer'
import Intro from '../../atoms/intro/Intro'
import EventCard from '../../molecules/eventCard/EventCard'
import ContentContainer from '../../atoms/contentContainer/ContentContainer'
import Footer from '../../organisms/footer/Footer'
import UserButton from '../../atoms/buttons/user/UserButton'
import BasicModal from '../../molecules/modals/BasicModal'
import LoginForm from '../../molecules/forms/login/LoginForm'
//import Search from '../../atoms/search/Search'
import ShowMoreEvents from '../../molecules/showMore/ShowMoreEvents'
import ShowMore from '../../molecules/showMore/ShowMore'
import SignInButton from '../../atoms/buttons/signIn/signIn'
import SignOutButton from '../../atoms/buttons/signOut/signOut'
import { useIsAuthenticated } from "@azure/msal-react";
import { useParams } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'


const ChooseEventPage = () => {
    const isAuthenticated = useIsAuthenticated();

    const [showLogin, setShowLogin] = useState(false)

    const [eventKey, setEventKey] = useState("")
    const [selectedEventID, setSelectedEventID] = useState("");
    
    //let selectedEventID = null;

    const handleClick = (clickID) => {
        console.log("Test 3. Event ID: " + clickID)

        return (

            <>
                {clickID}

            </>

        )

    }

    const [events, setEvents] = useState([])
    /* const [events, setEvents] = useState([
        {
            date : '2/7',
            time : '19:00-20:00',
            address : 'Mjärdevi, Linköping'
        },
        {
            date : '10/7',
            time : '17:00-19:00',
            address : 'T1, Linköping'
        },
        {
            date : '19/7',
            time : '18:00-19:00',
            address : 'Tallboda, Linköping'
        },
        {
            date : '23/7',
            time : '15:00-16:30',
            address : 'Malmslätt, Linköping'
        },
    ])*/

    useEffect(() => {
        fetch("/api/Events")
            .then(res => res.json())
            .then(result => setEvents(result))
    }, [])

    //setEvents()


    /*
    const HandleClickOnEvent = () => {
       const params=  useParams()
       const eventID= params.eventID
       console.log("clicked" + eventID)
        return <div>MY CARD {eventID}</div>
    }
    */

    return (
        <>
            <BasicModal
                onClose={() => setShowLogin(false)} show={showLogin}
                modalTitle="Log in"
                modalContent={<LoginForm setShow={setShowLogin} />}
            />

            {/* Header */}

            <Hero
                source={"https://i.pinimg.com/originals/f0/77/d3/f077d3049799fee40694e5db9a90f5ca.png"}

                alt={"Green Wheat"}
            ></Hero>


            {/* Content */}
            <Intro intro={'Choose when and where you want to buy local products:'} />

            {/*<Search></Search>*/}

            <ContentContainer>
                {/*{events.map(event => event)}*/}
                {/*{EventDetails}*/}
                {events?.map(event =>
                    <div key={event.id}>

                        
                        <Link to={`/ChooseProducerPage/Event/${event.id}`} style={{ textDecoration: 'none' }}>
                            <EventCard
                                dateTimeStart={event.dateTimeStart}
                                dateTimeEnd={event.dateTimeEnd}
                                address={event.address + ", " + event.city}
                               
                                test={console.log("Test 1. Event ID: " + event.id)}
                            >

                                {handleClick(event.id)}
                                {console.log("Test 2. Event ID:" + event.id)}


                            </EventCard>
                        </Link>

                    </div>
                )}
                {/*{events.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }*/}

                <div>
                    <ShowMore>
                        <ShowMoreEvents />
                    </ShowMore>
                </div>

            </ContentContainer>

            {/* FOOTER */}
            <Footer>
                {/* 
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                     */}
                {/* 
                <UserButton
                  onClick={() => setShowLogin(true)}
                />
                */}

            </Footer>






        </>
    )
}
export default ChooseEventPage



