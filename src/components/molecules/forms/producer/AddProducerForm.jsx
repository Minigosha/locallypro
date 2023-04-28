import React from 'react'
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';
import UploadButton from '../../../atoms/buttons/upload/UploadButton';
import { useRef } from 'react';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime





function AddProducerForm({setShow}) {

  const inputRef = useRef(null);
    const [producerName, setProducerName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");

    async function postJSON(url, data) {
        try {
          const response = await fetch(url, {
            method: "POST", 
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
    const handleSubmit = (producer) => {
        producer.preventDefault();
      postJSON("/api/Producers", {"name":producerName, "address":address, "city":city, "email":email})
      alert(`The data you entered was: \n
      Producer Name:  ${producerName} \n
      Address: ${address} \n
      City: ${city} \n
      Email: ${email} \n`)
      setShow(false)
    }

    
    return (
    <div>
      <form onSubmit={handleSubmit}>

        <label className='labels'>
            Producer name:
            <br/>
        <input 
            type="text" 
            className='textField' 
            placeholder='Producer name' 
            onChange={(e)=>{setProducerName(e.target.value)}}
            />
        </label><br/>
        
        <label className='labels'>
        Address: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Address'
                onChange={(e)=>{setAddress(e.target.value)}}
            />
        </label><br/>

        <label className='labels'>
        City: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='City'
                onChange={(e)=>{setCity(e.target.value)}}
            />
        </label><br/>

        <label className='labels'>
        Email: 
            <br/>
            <input 
                type="email" 
                className='textField' 
                placeholder='Email'
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </label><br/>
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
            <BackButton onClick={()=>setShow(false)}/>
            <SubmitButton className='greenButton'/>
        </div>         

      </form>
      
    </div>
  
  )
}
export default AddProducerForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddProducerForm/>);