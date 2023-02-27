import React from 'react'
import './SectionHeading.css'
import PlusIcon from '../plusIcon/PlusIcon'



const SectionHeading = ({heading}) => {
    return(
       
        <div className='heading'>
            <h2>{heading}<PlusIcon></PlusIcon></h2>
        </div>

        
       
)}

export default SectionHeading
