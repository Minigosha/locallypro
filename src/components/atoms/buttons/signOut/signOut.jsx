
import React from 'react';
import BasicButton from '../BasicButton';
import { User } from 'react-feather';
import '../ButtonStyles.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../../authConfig.js";


const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/" // redirects the top level app after logout
            });
        }
    }

    return (
  
    <BasicButton
        className='blackButton'
        onClick={() => handleLogout("popup")}
    > 
        <User strokeWidth={2} size={44}/>   
     Sign out
    </BasicButton>     

    )
}


export default SignOutButton;