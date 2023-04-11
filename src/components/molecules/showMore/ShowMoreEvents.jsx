import React, { useEffect } from "react";
import './ShowMore.css'
import { useState } from "react";
import EventCard from "../eventCard/EventCard";


//Dropdown: 
//https://www.positronx.io/react-select-dropdown-onchange-event-handler-tutorial/

export default function ShowMoreEvents(){
    const [events, setEvents] = useState([])

/*TODO: FILTER FOR EXTRA EVENTS; NOT THE SAME ALREADY SHOWN*/



    /*
    const [events, setEvents] = useState([
        {
            date : '5/8',
            time : '20:00-20:30',
            address : 'Ljungsbro, Linköping'
        },
        {
            date : '10/8',
            time : '17:30-18:00',
            address : 'Vikingstad'
        },
        {
            date : '19/8',
            time : '18:30-20:00',
            address : 'Ekholmen, Linköping'
        },
        {
            date : '6/9',
            time : '16:00-17:30',
            address : 'Tannefors, Linköping'
        },
    ])*/

    useEffect(() => {
        fetch("/api/Events")
        .then(res => res.json())
        .then(result => setEvents(result))
    }, [])


    return (
        <div> {/*className= "default.container"*/}

            {/*<h1>Welcome</h1>
            <h2>Click below</h2>*/}
            {/*{events.map(event => <EventCard date = {event.date} time = {event.time} address = {event.address} />) }*/}
            {events?.slice(4,undefined).map(event => <EventCard dateTimeStart = {event.dateTimeStart} dateTimeEnd = {event.dateTimeEnd} address = {event.address + ", " + event.city} />) }
        </div>
    )

}