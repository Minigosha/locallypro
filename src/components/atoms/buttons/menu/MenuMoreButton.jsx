import React from 'react';
import '../ButtonStyles.css';
import { MoreHorizontal } from 'react-feather';


const MenuMoreButton = ({handleClick}) => {


    return (
        <button  
                 
            className='onlyIcon'           
        >
            <MoreHorizontal onClick={handleClick} strokeWidth={2} size={30}/>
            
        </button>     

    )
}


export default MenuMoreButton;