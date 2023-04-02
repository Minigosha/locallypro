import React from 'react'
import './Footer.css'
//import UserButton from '../../atoms/buttons/user/UserButton'
import { useIsAuthenticated } from '@azure/msal-react'
import SignInButton from '../../atoms/buttons/signIn/signIn'
import SignOutButton from '../../atoms/buttons/signOut/signOut'
import HomeButton from '../../atoms/buttons/home/HomeButton'


const Footer = ({ children }) => {
    
    const isAuthenticated = useIsAuthenticated();

    return (
        <div className='Footer'>

            {children}
            <HomeButton/>

            {isAuthenticated ? <SignOutButton /> : <SignInButton />}


        </div>
    )
}

export default Footer


