import React from "react";
import '../BasicForm.css'
import { useState } from 'react';
import SubmitButton from '../../../atoms/buttons/tick/SubmitButton';
import BackButton from '../../../atoms/buttons/back/BackButton';
//import { ReactDOM } from "react";


function LoginForm({setShow}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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