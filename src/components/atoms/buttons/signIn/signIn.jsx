
import React from 'react';
import BasicButton from '../BasicButton';
import { User } from 'react-feather';
import '../ButtonStyles.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../../authConfig.js";


const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    return (
  
    <BasicButton
        className='blackButton'
        onClick={() => handleLogin("popup")}
    > 
        <User strokeWidth={2} size={44}/>   
     Sign in
    </BasicButton>     

    )
}


export default SignInButton;