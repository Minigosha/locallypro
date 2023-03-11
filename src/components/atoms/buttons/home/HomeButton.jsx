import React from 'react';
import BasicButton from '../BasicButton';
import '../ButtonStyles.css';
import { Home } from 'react-feather';
import { useNavigate } from "react-router-dom";


const HomeButton = () => {
    const navigate = useNavigate();

    {/*TODO: Fix variable to check who is logged in */}
    const loggedIn = false;
    const homeUrl = "/ChooseEventPage";
    if(loggedIn)
    {
        homeUrl = "/ProducerStartPage";
    }


    return (
        <BasicButton  
                 
            className='blackButton'           
            >
            <Home 
                onClick={()=>navigate(homeUrl)} 
                strokeWidth={2} 
                size={44}/>
            
        </BasicButton>     

    )
}


export default HomeButton;