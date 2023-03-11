import React from 'react';
import BasicButton from '../BasicButton';
import { Upload } from 'react-feather';
import '../ButtonStyles.css';


const UploadButton = ({onClick}) => {


    return (
  
    <BasicButton
        className='blackButton'
        onClick={onClick}
    >
        <Upload strokeWidth={3} size={34}/>   
     
    </BasicButton>     

    )
}


export default UploadButton;