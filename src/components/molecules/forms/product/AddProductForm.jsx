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
import { useRef } from 'react';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime





function AddProductForm({setShow}) {

  const inputRef = useRef(null);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    

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



    //HandleSubmit for testing
    const handleSubmit = (product) => {
      product.preventDefault();
      postJSON("/api/Products", {"name":name, "quantity":quantity, "price":price })
      alert(`The data you entered was: \n
      Product:  ${name} \n
      Quantity: ${quantity} \n
      Price:  ${price} \n`)
      setShow(false)
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