import React from "react";
import { useState, useEffect } from "react";
import EventCard from "../../molecules/eventCard/EventCard";
import MenuMoreButton from '../../atoms/buttons/menu/MenuMoreButton'
import ContextMenu from "../../organisms/modals/contextMenu/ContextMenu";
import BasicContextMenuContent from "../../organisms/modals/contextMenu/BasicContextMenuContent";




const EventList = () => {

    const [showEventContextMenu, setShowEventContextMenu] = useState(false);
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/api/Events")
            .then(res => res.json())
            .then(result => setEvents(result))
    }, [])

    const handleDelete = ({ id }) => {
        console.log("delete clicked")
        //useEffect(() => {
        fetch("/api/Events/", + id, { method: 'DELETE' })
            .then(async response => {
                //const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    //const error = (data && data.message) || response.status;
                    return null//Promise.reject(error);
                }

                //setStatus('Delete successful');
            })
            .catch(error => {
                //setErrorMessage(error);
                console.error(error);
            })

        //}, [])
    }

    return (
        <>

            <ContextMenu
                onClose={() => setShowEventContextMenu(false)} show={showEventContextMenu}
                modalContent={<BasicContextMenuContent
                    //handleEdit= 
                    //id={event.id}
                    handleDelete={handleDelete}
                />}
            />



            {events?.slice(0, 3).map(event =>
                <div key={event.id}>
                    <EventCard
                        dateTimeStart={event.dateTimeStart}
                        dateTimeEnd={event.dateTimeEnd}
                        address={event.address + ", " + event.city}>

                        <div>
                            <MenuMoreButton onClick={() => setShowEventContextMenu(true)}>
                            </MenuMoreButton>

                        </div>
                    </EventCard>
                </div>
            )}

        </>
    )
}
export default EventList
