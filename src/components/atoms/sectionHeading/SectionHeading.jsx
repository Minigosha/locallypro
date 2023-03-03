import React, { useState } from 'react'
import './SectionHeading.css'
//import PlusIcon from '../plusIcon/PlusIcon'
import BasicModal from '../../molecules/basicModal/BasicModal'
//import IconButton from '../buttons/IconButton'
//import AlertCircle from '../../../media/icons/AlertCirle.svg'
//import { AlertCircle } from 'react-feather'
//import { ReactComponent as AlertCirle } from '../../../media/icons/AlertCirle.svg'

const SectionHeading = ({ heading }) => {
    const[show, setShow] = useState(false)
    //const image = AlertCircle;

    return (

        <div className = 'heading'>
            {heading}

            <button onClick={() => setShow(true)} className = "test">
                <BasicModal onClose ={()=>setShow(false)} show = {show} />  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                
            </button>

            {/*<div>{{AlertCircle}}</div> */}
            

        </div>

    )
}

export default SectionHeading
