import React, { useState } from "react";
import BasicButton from '../BasicButton';
import { CheckCircle } from "react-feather";
//import '../JoinEvents.css';


const JoinEvent = ({ eventID }) => {
    const [toggled, setToggled] = useState(false)
    

    return (

        <BasicButton
            //style= {{color: "lightblue"}}
            onClick={() => setToggled(!toggled)}
            //className='greenButton'
            className= {toggled ? 'greenButton' : 'blackButton'}
        >
            
            {/*<CheckCircle strokeWidth={2} size={20} />*/}
            {toggled ? "JOINED" : "JOIN"}
        </BasicButton>

    )
}


export default JoinEvent;