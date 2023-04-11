import React from "react";
import { useState, useEffect } from "react";
import BasicModal from "../../molecules/modals/BasicModal";
import AddEventForm from "../../molecules/forms/event/AddEventForm";
import AddButtonSmall from "../../atoms/buttons/add/AddButtonSmall";
import EventCard from "../../molecules/eventCard/EventCard";
import SectionHeading from "../../atoms/sectionHeading/SectionHeading";
import SearchBar from "../../atoms/search/SearchBar";
import Gallery from "../../molecules/gallery/Gallery";
import ProductCardImage from "../../molecules/producerCard/ProducerCardImage";
import ShowMore from '../../molecules/showMore/ShowMore'
import ContentContainer from "../../atoms/contentContainer/ContentContainer";
import AddProducerForm from "../../molecules/forms/producer/AddProducerForm";
import ShowMoreEvents from "../../molecules/showMore/ShowMoreEvents";
import Footer from "../../organisms/footer/Footer";
import SuperAdminProducerCard from "../../molecules/producerCard/SuperAdminProducerCard";
import ProducerCardImage from "../../molecules/producerCard/ProducerCardImage";
import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'
import ContextMenu from "../../organisms/modals/contextMenu/ContextMenu";
import BasicContextMenuContent from "../../organisms/modals/contextMenu/BasicContextMenuContent";
import EditEventForm from "../../molecules/forms/event/EditEventForm";



const SuperAdminStart = () => {
    const [showAddEvent, setShowAddEvent] = useState(false)
    const [showEditEvent, setShowEditEvent] = useState(false)
    const [showAddProducer, setShowAddProducer] = useState(false)
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [eventID, setEventID] = useState();
    const [event, setEvent] = useState();
    const [showEventContextMenu, setShowEventContextMenu] = useState(false);
    const [events, setEvents] = useState([])
    const [producer, setProducer] = useState([])


    {/*
    const [events, setEvents] = useState([
        {
            date: '2/7',
            time: '19:00-20:00',
            address: 'Mjärdevi, Linköping'
        },
        {
            date: '10/7',
            time: '17:00-19:00',
            address: 'T1, Linköping'
        },
        {
            date: '19/7',
            time: '18:00-19:00',
            address: 'Tallboda, Linköping'
        },
        {
            date: '23/7',
            time: '15:00-16:30',
            address: 'Malmslätt, Linköping'
        },
    ])
*/}
    {/*
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

*/}

    //FIX RE-RENDER WHEN ADDING/EDITING A EVENT
    useEffect(() => {
        fetch("/api/Events")
            .then(res => res.json())
            .then(result => (
                setEvents(result))
            )
    }, [eventID]);

    const handleDelete = () => {
        console.log("delete clicked")
        fetch(`/api/Events/${eventID}`, { method: 'DELETE' })
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;

                    return null
                }
                else {
                    alert("Event deleted! ID: " + eventID)
                    setShowEventContextMenu(false)
                    setEvents(events.filter(event => event.id !== eventID));

                }
            })
            .catch(error => {
               
                console.error(error);
            })


    }


    const handleMenuClick = (event) => {
        setEventID(event.id)
        setEvent(event)
        setShowEventContextMenu(true)
        return setEventID
    }


    const handleEdit = () => {
        console.log("Edit clicked. ID:" + eventID)
        setShowEventContextMenu(false)
        setShowEditEvent(true)
        //GetEvent(eventID)


    }

    useEffect(() => {
        fetch("/api/Producers")
            .then(res => res.json())
            .then(result => setProducer(result))
    }, [])

    return (
        <>
            <BasicModal
                onClose={() => setShowAddEvent(false)} show={showAddEvent}
                modalTitle="Add new event"
                modalContent={<AddEventForm setShow={setShowAddEvent} />}
            />
            <BasicModal
                onClose={() => setShowEditEvent(false)} show={showEditEvent}
                modalTitle={`Edit event: ${eventID}`}
                modalContent={<EditEventForm setShow={setShowEditEvent} event={event} />}
            />

            <BasicModal
                onClose={() => setShowAddProducer(false)} show={showAddProducer}
                modalTitle="Add new producer"
                modalContent={<AddProducerForm setShow={setShowAddProducer} />}
            />
            <ContextMenu
                onClose={() => setShowContextMenu(false)} show={showContextMenu}
                modalContent={<BasicContextMenuContent handleDelete={handleDelete} />}
            />

            <ContextMenu
                onClose={() => setShowEventContextMenu(false)} show={showEventContextMenu}
                modalContent={<BasicContextMenuContent handleDelete={handleDelete} handleEdit={handleEdit} />}
            />




            {/* EVENTS */}
            <SectionHeading
                heading={"Coming events"}
                actionButton={<AddButtonSmall onClick={() => setShowAddEvent(true)} />}
            ></SectionHeading>

            {/*<Search></Search>*/}

            {/*{events.map(event => event)}*/}
            {/*{events['$values']?.map(event => <EventCard date = {event.dateTime} time = {event.dateTime} address = {event.address + ", " + event.city} />) }*/}
            {/*{events.map(event => <EventCard date={event.date} time={event.time} address={event.address} />)}*/}
            {events?.slice(0, 5).map(event =>
                <li style={{ listStyle: 'none' }} key={event.id}>
                    <EventCard
                        dateTimeStart={event.dateTimeStart}
                        dateTimeEnd={event.dateTimeEnd}
                        address={event.address + ", " + event.city}>

                        <div>
                            {event.id}
                            <MenuMoreButton onClick={() => handleMenuClick(event)}>
                            </MenuMoreButton>

                        </div>
                    </EventCard>
                </li>
            )}

            <div>
                <ShowMore>
                    <ShowMoreEvents />
                </ShowMore>
            </div>



            {/* PRODUCERS */}
            <ContentContainer>
                <SectionHeading
                    heading={"Producers"}
                    actionButton={<AddButtonSmall onClick={() => setShowAddProducer(true)} />}
                />

                <SearchBar
                    myData={producer}
                /* returnData = {producer.producerName.toLowerCase().includes(value)}*/
                />

                <Gallery>
                    {producer?.map(producer => <><ProducerCardImage key={producer.id} producerName={producer.name}>

                        <MenuMoreButton onClick={() => setShowContextMenu(true)}>
                        </MenuMoreButton>
                    </ProducerCardImage>
                    </>
                    )}

                </Gallery>



            </ContentContainer>
            <Footer />

        </>
    )
}
export default SuperAdminStart