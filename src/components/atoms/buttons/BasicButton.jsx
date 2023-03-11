import React from 'react';
import './ButtonStyles.css';





const BasicButton = ({children, onClick, className}) => {

    return (

        <button type='button'
            className={className}
            onClick={onClick}
        >
         {children}
        </button>     

    )
}

export default BasicButton;
