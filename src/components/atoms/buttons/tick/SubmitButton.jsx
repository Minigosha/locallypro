import React from 'react';
import { Check } from 'react-feather';
import '../ButtonStyles.css'


const SubmitButton = ({className}) => {


    return (
        <button  
            type="submit" 
            className= {className}
        >
            <Check strokeWidth={4} size={60}/>
        </button>     

    )
}


export default SubmitButton;
