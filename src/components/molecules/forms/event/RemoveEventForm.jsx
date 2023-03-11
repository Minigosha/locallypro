import React from 'react'
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



function RemoveEventForm({setShow}) {

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
      
        <div className='formFooter'>
            <BackButton onClick={()=>setShow(false)}/>
            <SubmitButton className='greenButton'/>
        </div>         

      </form>
      
    </div>
  
  )
}
export default RemoveEventForm;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoveEventForm/>);