import React from 'react'
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import moment from 'moment/moment';
import { Check } from 'react-feather';
import { ArrowLeft } from 'react-feather';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/backButton';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime





function AddProductForm({setShowModal}) {


    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    

    //HandleSubmit for testing
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The data you entered was: \n
      Product:  ${product} \n
      Quantity: ${quantity} \n`)
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
            onChange={(e)=>{setProduct(e.target.value)}}
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
      
        <div>
           
            {/* BACKBUTTON DOES NOT WORK: fuctionality or css:hover
            <BackButton type='button' className='blackButton' onClick={()=>setShowModal(false)}/>
            */}

            <ArrowLeft type='button' className='blackButtonXL' strokeWidth={4} size={44}
                onClick ={()=>setShowModal(false)}
            />
            
            <SubmitButton className='greenButtonXL'/>
        </div>         

      </form>
      
    </div>
  
  )
}
export default AddProductForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddProductForm/>);