import React, { useState } from 'react'
import './IconButton.css'
//import PlusIcon from '../plusIcon/PlusIcon'
import BasicModal from '../../molecules/basicModal/BasicModal'
import {icon} from '../../media/icons'


const IconButton = ({ icon }) => {
    const[show, setShow] = useState(false)

    return (

        <button onClick={() => setShow(true)} className = "iconButton">
            <BasicModal onClose ={()=>setShow(false)} show = {show} />  
            {icon}
        </button>     

    )
}

export default IconButton
