
import React from 'react';
import BasicButton from '../BasicButton';
import { ChevronDown } from 'react-feather';
import '../ButtonStyles.css';


const OpenSubmenu = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <ChevronDown strokeWidth={2} size={30}/>   
     
    </BasicButton>     

    )
}


export default OpenSubmenu;