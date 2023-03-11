
import React from 'react';
import BasicButton from '../BasicButton';
import { ShoppingCart } from 'react-feather';
import '../ButtonStyles.css';


const ShoppingCartButton = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <ShoppingCart strokeWidth={4} size={44}/>   
     
    </BasicButton>     

    )
}


export default ShoppingCartButton;
