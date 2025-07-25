import React from 'react';
//import FeatherIcon, { Plus } from 'react-feather';
import '../ButtonStyles.css';
import { Plus } from 'react-feather';
import BasicButton from '../BasicButton';




const AddButton = ({onClick}) => {

    return (

        <BasicButton
            className='greenButton'
            onClick={onClick}
        >
            <Plus strokeWidth={4} size={44}/>   
         
        </BasicButton>     

    )
}

export default AddButton;
