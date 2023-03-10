import React from 'react';
import FeatherIcon from 'react-feather';
import '../ButtonStyles.css';
import { Icon } from 'react-feather';




const AddButton = ({handleClick, icon, className}) => {

    return (

        <div
            className={className}
            onClick={handleClick}
        >
         {icon} {/*strokeWidth={4} size={44}*/}
        </div>     

    )
}

export default AddButton;
