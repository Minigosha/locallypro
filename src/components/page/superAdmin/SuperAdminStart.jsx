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



const SuperAdminStart = () => {
    const [showAddEvent, setShowAddEvent] = useState(false)
    const [showAddProducer, setShowAddProducer] = useState(false)
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [showEventContextMenu, setShowEventContextMenu] = useState(false);
    const [events, setEvents] = useState([])
    
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

    const [producer, setProducer] = useState([
        {
            producerName:'Milky way cheese'
            /*TODO: Add image*/

        },
        {
            producerName:'Fruity Land'
            /*TODO: Add image*/

        },
        {
            producerName:'Smoky ham'
            /*TODO: Add image*/

        },
        {
            producerName:'Claire`s Jams'
            /*TODO: Add image*/

        },
    ])
    useEffect(() => {
        fetch("/api/Events")
        .then(res => res.json())
        .then(result => setEvents(result))
    }, [])

    return (
        <>
            <BasicModal
                onClose={() => setShowAddEvent(false)} show={showAddEvent}
                modalTitle="Add new event"
                modalContent={<AddEventForm setShow={setShowAddEvent} />}
            />

            <BasicModal 
                onClose={() => setShowAddProducer(false)} show={showAddProducer}
                modalTitle="Add new producer"
                modalContent = {<AddProducerForm setShow={setShowAddProducer}/>}
            />
              <ContextMenu
                onClose={() => setShowContextMenu(false)} show={showContextMenu}
                modalContent = {<BasicContextMenuContent/>}                                       
            />

            <ContextMenu
                onClose={() => setShowEventContextMenu(false)} show={showEventContextMenu}
                modalContent={<BasicContextMenuContent />}
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
                {events?.map(event => <EventCard dateTimeStart = {event.dateTimeStart} dateTimeEnd = {event.dateTimeEnd} address = {event.address + ", " + event.city}>

                            <div>
                                <MenuMoreButton onClick={() => setShowEventContextMenu(true)}>
                                </MenuMoreButton>

                            </div>


                     
                    </EventCard>
                    ) }
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
                    myData = {producer}
                   /* returnData = {producer.producerName.toLowerCase().includes(value)}*/
                />

                <Gallery>
                    {producer.map(producer => <><ProducerCardImage producerName={producer.producerName}>
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