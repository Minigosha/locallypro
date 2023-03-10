
import React from 'react';
import '../ButtonStyles.css';
import { ArrowLeft } from 'react-feather';


const BackButton = ({handleClick, className}) => {


    return (
        <button  type='button'
                 
            className={className}           
        >
            <ArrowLeft onClick={handleClick} strokeWidth={4} size={44}/>
            
        </button>     

    )
}


export default BackButton;
