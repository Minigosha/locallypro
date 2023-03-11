import React from 'react';
//import FeatherIcon, { Plus } from 'react-feather';
import '../ButtonStyles.css';
import { Plus } from 'react-feather';
import BasicButton from '../BasicButton';




const AddButtonSmall = ({onClick}) => {

    return (

        <BasicButton
            className='greenButton--Sm'
            onClick={onClick}
        >
            <Plus strokeWidth={5} size={24}/>   
         
        </BasicButton>     

    )
}

export default AddButtonSmall;