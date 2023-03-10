import React from 'react'
import Datetime from 'react-datetime';
import '../BasicForm.css'
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import "moment/locale/en";
import moment from 'moment/moment';
import { Check } from 'react-feather';
import { ArrowLeft } from 'react-feather';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/backButton';

//TUTORIAL 
//NPM DATETIME: https://www.npmjs.com/package/react-datetime

//moment().format('LLLL'); // Tuesday, 7 March 2023 15:15



function AddEventForm({setShowModal}) {

    //const[show, setShow] = useState(false);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    
    var yesterday = moment().subtract( 1, 'day' );
    
    var valid = function( current ){
        return current.isAfter( yesterday );
        
    };
    
    //HandleSubmit for testing
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The data you entered was: \n
       Event starts: ${start} \n 
       Event ends: ${end} \n
       City:  ${city} \n
       Address: ${address} \n`)
    }

    

    return (
    <div>
      <form onSubmit={handleSubmit}>

        <label className='labels'>
            Event starts:
            <Datetime 
                isValidDate={ valid }
                onChange = {(value) => setStart(value)}                    
            />
        </label><br/>

        <label className='labels'>
            Event ends:
            <Datetime 
                isValidDate={ valid } 
                onChange={(value)=>{setEnd(value)}}                  
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
            Address: 
            <br/>
            <input 
                type="text" 
                className='textField' 
                placeholder='Address'
                onChange={(e)=>{setAddress(e.target.value)}}
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
export default AddEventForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AddEventForm/>);