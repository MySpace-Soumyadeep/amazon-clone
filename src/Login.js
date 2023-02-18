import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //Some fancy firebase register stuff
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //then successfully creater a new user with email and password
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img className ="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'
                    value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                {/* </div>

                <div> */}

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>

                <p> ----------New to Amazon?--------</p>
                <button onClick={register} className='login__registerButton'> Create your Amazon Account </button>
            </div>
        </div>
    )
}

export default Login
