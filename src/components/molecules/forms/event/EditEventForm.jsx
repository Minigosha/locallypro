import React, { useEffect } from 'react'
import Datetime from 'react-datetime';
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import "moment/locale/en";
import moment from 'moment/moment';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';


//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime

//moment().format('LLLL'); // Tuesday, 7 March 2023 15:15

//GET>start + PATCH>submit
//ändra från json till js

function EditEventForm({ setShow, event }) {

    //const[show, setShow] = useState(false);

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
   // const [events, setEvents] = useState([])

    const [formData, setFormData] = useState(event);


    var yesterday = moment().subtract(1, 'day');

    var valid = function (current) {
        return current.isAfter(yesterday);
    };

    function handleChange(ev) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [ev.target.name]: ev.target.value,
            }
        })
    }

    function handleStartChange(newDate) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                dateTimeStart: newDate,
            }
        })
    }
    function handleEndChange(newDate) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                dateTimeEnd: newDate,
            }
        })
    }

    /*
    const handleEdit = (eventID) => {
        console.log("The event is handled! Event ID:" + eventID)
    } 
    */

    async function patchJSON(url, data) {
        try {
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }

    }

    const handleEdit = (evt) => {
        evt.preventDefault();
        patchJSON(`/api/Events/${event.id}`, formData)
        alert(`The data you entered was: \n
                ID: ${event.id} 
                ${JSON.stringify(formData)} \n \n 
                NOTE: Update the site to see your changes`)
        setShow(false)
    }




    /*
        const handleEdit = (event) => {
            console.log("EVENT ID: " + eventID)
            fetch(`/api/Events/${eventID}`, { method: 'PATCH' })
                .then(async response => {
                    const data = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                    else {
    
                        setEvents(events.filter(event => event.id !== eventID));
                        alert("Event edited! ID: " + eventID)
                    }
                })
                .catch(error => {
                    console.error(error);
                })
    
    */

    /*
        async function GetEvent(eventID) {
            try {
                // Assuming eventID object has properties like city, address, etc.
                const url = (`/api/Events/${eventID}`)
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
        
                const result = await response.json();
                result = JSON.parse(result)
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
        }*/


    /*
     postJSON(`/api/Events/${eventID}`, { "city": city, "address": address, "dateTimeStart": start, "dateTimeEnd": end })
     
     async function postJSON(url, data) {
         try {
             const response = await fetch(url, {
                 method: "GET",
                 headers: {
                     "Content-Type": "application/json",
                   },
                   body: JSON.stringify(data),
               });
               
               const result = await response.json();
               console.log("Success:", result);
           } catch (error) {
               console.error("Error:", error);
           }
       }
 
 
 /*
     useEffect(() => {
         console.log("get data")
         fetch(`/api/Events/${eventID}`)
           .then(res => res.json())
 
           .then(result => (
             setEvents(result))
             //const filteredEvents = result.filter(event => event.id !== currentMenuId);
             //setEvents(filteredEvents);
           )
       }, [eventID]);
 
 
 
       async function postJSON(url, data) {
           try {
               const response = await fetch(url, {
                   method: "GET",
                   headers: {
                       "Content-Type": "application/json",
                     },
                     body: JSON.stringify(data),
                 });
                 
                 const result = await response.json();
                 console.log("Success:", result);
             } catch (error) {
                 console.error("Error:", error);
             }
         }
         
         /*
     
 
 
         event.preventDefault();
         postJSON(`/api/Events/${eventID}`, { "city": city, "address": address, "dateTimeStart": start, "dateTimeEnd": end })
         //Alert only for testing
         alert(`The data you entered was: \n
          Event starts: ${start} \n 
          Event ends: ${end} \n
          Address: ${address} \n
          City:  ${city} \n`)
         //handleAddEvent= {handleAddEvent}
         setShow(false)
            }
 
         */


    return (
        <div>
            <form onSubmit={handleEdit}>

                <label className='labels'>
                    Event starts:
                    <Datetime
                        isValidDate={valid}
                        onChange={handleStartChange}
                        name="Start"
                        value={formData.dateTimeStart}
                    />
                </label><br />

                <label className='labels'>
                    Event ends:
                    <Datetime
                        isValidDate={valid}
                        onChange={handleEndChange}
                        name="End"
                        value={formData.dateTimeEnd}
                    />
                </label><br />


                <label className='labels'>
                    Address:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='Address'
                        onChange={handleChange}
                        name="address"
                        value={formData.address}
                    />
                </label><br />

                <label className='labels'>
                    City:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='City'
                        onChange={handleChange}
                        name="city"
                        value={formData.city}
                    />
                </label><br />
                <div className='formFooter'>
                    <BackButton onClick={() => setShow(false)} />
                    <SubmitButton className='greenButton' />
                </div>

            </form>

        </div>

    )
}
export default EditEventForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EditEventForm />);