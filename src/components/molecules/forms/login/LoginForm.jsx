import React from "react";
import '../BasicForm.css'
import { useState } from 'react';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';
//import { ReactDOM } from "react";


function LoginForm({setShow}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /*
    
    const requestOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            //'Access-Control-Expose-Headers':'Content-Disposition',
        },
        body:JSON.stringify({"userName": username, "password": password})
    }
    const response = await fetch(
        process.env.REACT_APP_SERVER_URL + User/Authenticate,//"User/Authenticate", //Classname/method
        requestOptions
    )
    */
    

    return(
        <div>

            <form> {/*onSubmit={handleSubmit}*/} 

                <label className='labels'>
                    Username:
                    <br />
                    <input
                        type="text"
                        className='textField'
                        placeholder='Username'
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </label><br />
                <label className='labels'>
                    Password:
                    <br />
                    <input
                        type="password"
                        className='textField'
                        placeholder='Password'
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </label><br />
                <div className='formFooter'>
                    <BackButton onClick={() => setShow(false)} />
                    <SubmitButton className='greenButton' />
                </div>

            </form>
        </div>
    )

}
export default LoginForm;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<LoginForm/>);