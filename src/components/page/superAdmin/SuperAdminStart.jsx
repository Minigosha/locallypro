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
import EditProducerForm from "../../molecules/forms/producer/EditProducerForm";
import AddButton from "../../atoms/buttons/add/addButton";


const SuperAdminStart = () => {
    const [event, setEvent] = useState();
    const [events, setEvents] = useState([])
    const [eventID, setEventID] = useState();
    const [showEventContextMenu, setShowEventContextMenu] = useState(false);
    const [showAddEvent, setShowAddEvent] = useState(false)
    const [showEditEvent, setShowEditEvent] = useState(false)

    const [producer, setProducer] = useState()
    const [producers, setProducers] = useState([])
    const [producerID, setProducerID] = useState()
    const [showAddProducer, setShowAddProducer] = useState(false)
    const [showProducerContextMenu, setShowProducerContextMenu] = useState(false);
    const [showEditProducer, setShowEditProducer] = useState(false)


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

    const handleDeleteEvent = () => {
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


    const handleEventMenuClick = (event) => {
        setEventID(event.id)
        setEvent(event)
        setShowEventContextMenu(true)
        //return setEventID
    }

    
    const handleEditEvent = () => {
        console.log("Edit clicked. ID:" + eventID)
        setShowEventContextMenu(false)
        setShowEditEvent(true)
        //GetEvent(eventID)
        
        
    }
    
        useEffect(() => {
            fetch("/api/Producers")
            .then(res => res.json())
            .then(result => setProducers(result))
        }, [producerID])
        
        const handleDeleteProducer = () => {
            console.log("delete clicked")
            fetch(`/api/Producers/${producerID}`, { method: 'DELETE' })
                .then(async response => {
                    const data = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
    
                        return null
                    }
                    else {
                        alert("Producer deleted! ID: " + producerID)
                        setShowProducerContextMenu(false)
                        setProducers(producers.filter(producer => producer.id !== producerID));
    
                    }
                })
                .catch(error => {
    
                    console.error(error);
                })
    
    
        }
        

    const handleProducerMenuClick = (producer) => {
        setProducerID(producer.id)
        setProducer(producer)
        setShowProducerContextMenu(true)

    }


    const handleEditProducer = () => {
        console.log("Edit clicked. ID:" + producerID)
        setShowProducerContextMenu(false)
        setShowEditProducer(true)

    }











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
                onClose={() => setShowEditProducer(false)} show={showEditProducer}
                modalTitle={`Edit producer: ${producerID}`}
                modalContent={<EditProducerForm setShow={setShowEditProducer} producer={producer} />}
            />

            <BasicModal
                onClose={() => setShowAddProducer(false)} show={showAddProducer}
                modalTitle="Add new producer"
                modalContent={<AddProducerForm setShow={setShowAddProducer} />}
            />
            <ContextMenu
                onClose={() => setShowProducerContextMenu(false)} show={showProducerContextMenu}
                modalContent={<BasicContextMenuContent handleDelete={handleDeleteProducer} handleEdit={handleEditProducer} />}
            />

            <ContextMenu
                onClose={() => setShowEventContextMenu(false)} show={showEventContextMenu}
                modalContent={<BasicContextMenuContent handleDelete={handleDeleteEvent} handleEdit={handleEditEvent} />}
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
            {events?.slice(0, 3).map(event =>
                <div key={event.id}>
                    <EventCard
                        dateTimeStart={event.dateTimeStart}
                        dateTimeEnd={event.dateTimeEnd}
                        address={event.address + ", " + event.city}>

                        <div>
                           {/*{event.id}*/}
                            <MenuMoreButton onClick={() => handleEventMenuClick(event)}>
                            </MenuMoreButton>

                        </div>
                    </EventCard>
                </div>
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

                    {producers?.map(producer =>
                        
                            <div key={producer.id}>
                                <ProducerCardImage
                                    //key={producer.id}
                                    producerName={producer.name}
                                >

                                    <MenuMoreButton onClick={() => handleProducerMenuClick(producer)}>
                                    {producer.id}
                                    </MenuMoreButton>
                                </ProducerCardImage>
                            </div>
                        
                        //setShowProducerContextMenu(true)}>
                    )}

                </Gallery>

                <AddButton onClick={() => setShowAddProducer(true)} />

            </ContentContainer>
            <Footer />

        </>
    )
}
export default SuperAdminStart