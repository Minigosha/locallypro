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





function EditProductForm({setShow, product}) {


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    
    const [formData, setFormData] = useState(product);

   /*
    //HandleSubmit for testing
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The data you entered was: \n
      Product:  ${name} \n
      Quantity: ${quantity} \n
      Price:  ${price} \n`)
    }
    */

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

    const handleEdit = (evt) => {
        evt.preventDefault();
        patchJSON(`/api/products/${product.id}`, formData)
        alert(`The data you entered was: \n
                ID: ${product.id} 
                ${JSON.stringify(formData)} \n \n 
                NOTE: Update the site to see your changes`)
        setShow(false)
    }

    
    return (
    <div>
      <form onSubmit={handleEdit}>

        <label className='labels'>
            Product name:
            <br/>
        <input 
            type="text" 
            className='textField' 
            placeholder='Product name' 
            onChange={handleChange}
            name="name"
            value={formData.name}
            />
        </label><br/>
        
        <label className='labels'>
            Quantity: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Quantity'
                onChange={handleChange}
                name="Quantity"
                value={formData.quantity}
            />
        </label><br/>

        <label className='labels'>
            Price: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Price'
                onChange={handleChange}
                name="Price"
                value={formData.price}
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
export default EditProductForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EditProductForm/>);