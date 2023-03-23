import React from 'react'
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment/moment';
import { Check } from 'react-feather';
import { ArrowLeft } from 'react-feather';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';
import UploadButton from '../../../atoms/buttons/upload/UploadButton';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime





function AddProductForm({setShow}) {


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    

    //HandleSubmit for testing
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The data you entered was: \n
      Product:  ${name} \n
      Quantity: ${quantity} \n
      Price:  ${price} \n`)
    }

    
    return (
    <div>
      <form onSubmit={handleSubmit}>

        <label className='labels'>
            Product name:
            <br/>
        <input 
            type="text" 
            className='textField' 
            placeholder='Product name' 
            onChange={(e)=>{setName(e.target.value)}}
            />
        </label><br/>
        
        <label className='labels'>
            Quantity: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Quantity'
                onChange={(e)=>{setQuantity(e.target.value)}}
            />
        </label><br/>

        <label className='labels'>
            Price: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Price'
                onChange={(e)=>{setPrice(e.target.value)}}
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
export default AddProductForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddProductForm/>);