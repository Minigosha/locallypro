
import React from 'react';
import BasicButton from '../BasicButton';
import { ChevronUp } from 'react-feather';
import '../ButtonStyles.css';


const CloseSubmenu = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <ChevronUp strokeWidth={2} size={30}/>   
     
    </BasicButton>     

    )
}


export default CloseSubmenu;