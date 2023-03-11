import React from 'react'
import '../BasicForm.css'
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';


//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime





function RemoveProductForm({setShow}) {


    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
   
   
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

         {/*  SHOW PRODUCT PICTURE 
         <label className='labels'>
            Upload picture: 
            <br/>
            <UploadButton/>
        </label><br/>
             */}
      
        <div className='formFooter'>
            <BackButton onClick={()=>setShow(false)}/>
            <SubmitButton className='greenButton'/>
        </div>         

      </form>
      
    </div>
  
  )
}
export default RemoveProductForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoveProductForm/>);