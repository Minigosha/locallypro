import React from 'react'
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';
import UploadButton from '../../../atoms/buttons/upload/UploadButton';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime


function EditProducerForm({ setShow, producer }) {

/*
    const [producerName, setProducerName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
*/
    const [formData, setFormData] = useState(producer);

    function handleChange(ev) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [ev.target.name]: ev.target.value,
            }
        })
    }

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



    //Alert only for testing
    const handleEdit = (evt) => {
        //console.log(formData)
        evt.preventDefault();
        patchJSON(`/api/Producers/${producer.id}`, formData)
        alert(`The data you entered was: \n
                ID: ${producer.id} 
                ${JSON.stringify(formData)} \n \n 
                NOTE: Update the site to see your changes`)
        setShow(false)
    }


    return (
        <div>
            <form onSubmit={handleEdit}>

                <label className='labels'>
                    Producer name:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='Producer name'
                        name="producerName"
                        onChange={handleChange}
                        value={formData.producerName}
                        //onChange={(e) => { setProducerName(e.target.value) }}
                        />
                      
                </label><br />

                <label className='labels'>
                    Address:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='Address'
                        name="address"
                        onChange={handleChange}
                        value={formData.address}
                        //onChange={(e) => { setAddress(e.target.value) }}
                    />
                </label><br />

                <label className='labels'>
                    City:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='City'
                        name="city"
                        onChange={handleChange}
                        value={formData.city}
                        //onChange={(e) => { setCity(e.target.value) }}
                    />
                </label><br />

                <label className='labels'>
                    Email:
                    <br />
                    <input
                        type="email"
                        className='textField'
                        placeholder='Email'
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        //onChange={(e) => { setEmail(e.target.value) }}
                    />
                </label><br />
                {/*
        <label className='labels'>
            Upload picture: 
            <br/>
            <UploadButton/>
               {/* <input 
             type="text"
               onChange={(e)=>{setQuantity(e.target.value)}}
            />*/}
                {/* </label><br/>
        */}

                <div className='formFooter'>
                    <BackButton onClick={() => setShow(false)} />
                    <SubmitButton className='greenButton' />
                </div>

            </form>

        </div>

    )
}
export default EditProducerForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EditProducerForm />);