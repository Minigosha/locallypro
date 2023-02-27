import React from 'react'
import './SectionHeading.css'
import PlusIcon from '../plusIcon/PlusIcon'



const SectionHeading = ({heading}) => {
    return(
       
        <div className='heading'>
            <h2>{heading}</h2><PlusIcon></PlusIcon>
        </div>

        
       
)}

export default SectionHeading
