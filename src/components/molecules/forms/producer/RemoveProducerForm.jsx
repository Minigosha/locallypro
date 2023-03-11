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





function RemoveProducerForm({setShow}) {


    const [producer, setProduct] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    //HandleSubmit for testing
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The data you entered was: \n
      Producer:  ${producer} \n
      Address: ${address} \n
      Email: ${email} \n`)
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
            onChange={(e)=>{setProduct(e.target.value)}}
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
        Address: 
            <br/>
            <input 
                type="email" 
                className='textField' 
                placeholder='Email'
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </label><br/>

        <label className='labels'>
            Upload picture: 
            <br/>
            <UploadButton/>
               {/* <input 
             type="text"
               onChange={(e)=>{setQuantity(e.target.value)}}
            />*/}
        </label><br/>
      
        <div className='formFooter'>
            <BackButton onClick={()=>setShow(false)}/>
            <SubmitButton className='greenButton'/>
        </div>         

      </form>
      
    </div>
  
  )
}
export default RemoveProducerForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoveProducerForm/>);