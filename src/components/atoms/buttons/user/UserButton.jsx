
import React from 'react';
import BasicButton from '../BasicButton';
import { User } from 'react-feather';
import '../ButtonStyles.css';


const UserButton = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <User strokeWidth={2} size={44}/>   
     
    </BasicButton>     

    )
}


export default UserButton;

