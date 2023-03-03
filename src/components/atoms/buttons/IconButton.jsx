import React, { useState } from 'react'
import './IconButton.css'
import BasicModal from '../../molecules/basicModal/BasicModal'
//import 'AlertCircle.svg' from '../../../media/icons'



const IconButton = ({icon}) => {
    const[show, setShow] = useState(false)

    return (

        <div onClick={() => setShow(true)} className = "iconButton">
            <BasicModal onClose ={()=>setShow(false)} show = {show} />  
            {icon}
        </div>     

    )
}

export default IconButton
