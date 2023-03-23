import React from 'react';
import BasicButton from '../BasicButton';
import '../ButtonStyles.css';
import { MoreHorizontal } from 'react-feather';


const MenuMoreButton = ({onClick}) => {


    return (
        <BasicButton  
            className='onlyIcon'           
            onClick={onClick}     
        >
            <MoreHorizontal  strokeWidth={2} size={30}/>
              
        </BasicButton>     

    )
}


export default MenuMoreButton;