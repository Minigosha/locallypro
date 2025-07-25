
import React from 'react';
import BasicButton from '../BasicButton';
import { ArrowLeft } from 'react-feather';
import '../ButtonStyles.css';


const BackButton = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <ArrowLeft strokeWidth={4} size={44}/>   
     
    </BasicButton>     

    )
}


export default BackButton;
